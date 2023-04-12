import React from "react";
import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Description from "../components/Description";
import Points from "../components/Points";
import Ingredient from "../components/Ingredient";
import Testimony from "../components/Testimony";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      <Description />
      <Points />
      <Ingredient />
      <Testimony />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
