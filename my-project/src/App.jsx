import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/home/Home";
import Navbar from "./components/nav/Navbar";
import Home2 from "./pages/Home2/Home2";

const App = () => {
  return (
    <div>
      <Router>
	
    

				<section>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/home2" element={<Home2 />}></Route>
					
					</Routes>
				</section>
			</Router>
    </div>
  );
};

export default App;
