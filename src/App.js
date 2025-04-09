import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update.js";
import "./App.css";
import Navbar from "./components/Navbar/index.js";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route
            path="*"
            element={
              <div className="bg-violet-500">
                <Navbar />
                <div className=" h-screen  flex justify-center items-center text-white">
                  <p className="">Loading.........</p>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
