import HomeCard from "../components/HomeComponents/HomeCard";
import HomeService from "../components/HomeComponents/HomeService";
import HomeHero from "../components/HomeComponents/HomeHero";
import Cta from "../components/Cta";


const HomePage = () => {
  return (
   <>
    <HomeHero/>
    <HomeService/>
    <HomeCard/>
    <Cta/>
   </>
  );
};

export default HomePage;
