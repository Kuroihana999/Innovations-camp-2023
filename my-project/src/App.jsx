import { useState } from "react";

import "./index.css";
import Navbar from "./components/nav/Nav";
import Mainpage from "./pages/mainpage/Mainpage";
import Fod from "./components/fod/Fod";

const App = () => {
  return (
    <>
  
   <Navbar/>
   <Mainpage/>
   <Fod/>

    </>
  );
};

export default App;
