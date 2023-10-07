import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common-components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/common-components/Footer";

import { useAppDispatch, useAppSelector } from "./store/store";
import { fetchExercises } from "./features/exercise/exerciseSlice";
import {
  fetchBodyParts,
  getBodyParts,
} from "./features/bodypart/bodyPartSlice";
import {
  fetchSearchTerms,
  addToSearchTerms,
} from "./features/searchTerm/searchTermSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const bodyPartsData: string[] = useAppSelector(getBodyParts);

  useEffect(() => {
    (() => {
      dispatch(fetchExercises());
      dispatch(fetchBodyParts());
      dispatch(fetchSearchTerms());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(addToSearchTerms({ extraTerms: bodyPartsData }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPartsData]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
