import { configureStore } from "@reduxjs/toolkit";
import exerciseSlice from "../features/exercise/exerciseSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import bodyPartSlice from "../features/bodypart/bodyPartSlice";
import searchTermSlice from "../features/searchTerm/searchTermSlice";

const store = configureStore({
  reducer: {
    exercises: exerciseSlice,
    bodyParts: bodyPartSlice,
    searchTerms: searchTermSlice,
  },
});

export default store;

//typescript types for useDispatch and useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
