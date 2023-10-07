import Exercises from "../components/home-page-components/Exercises";
import HeroBanner from "../components/home-page-components/HeroBanner";
import SearchExercises from "../components/home-page-components/SearchExercises";
import HomePageScrollbar from "../components/home-page-components/HomePageScrollbar";

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <SearchExercises />
      <HomePageScrollbar />
      <Exercises />
    </>
  );
};

export default Home;
