import Home from "../components/Hero";
import HomeCard from "../components/HomeCard";
import HomeService from "../components/HomeService";
import HomeCta from "../components/HomeCta";


const HomePage = () => {
  return (
   <>
    <Home/>
    <HomeService/>
    <HomeCard/>
    <HomeCta/>
   </>
  );
};

export default HomePage;
