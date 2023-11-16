import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projectinfo from "./pages/projectinfo/Projectinfo";

const App = () => {
  return (
    <div>
      <Router>
	
    

				<section>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
            <Route path="/projectinfo" element={<Projectinfo/>}></Route>
					</Routes>
				</section>
			</Router>
    </div>
  );
};

export default App;
