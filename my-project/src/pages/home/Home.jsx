import React from "react";
import Navbar from "../../components/nav/Navbar";
import Mainpage from "../../components/mainpage/Mainpage";
import Fod from "../../components/fod/Fod";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <Fod/>
    </div>
  );
};


export default Home;