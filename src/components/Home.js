import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import { RollTheDice } from "./RollTheDice.js";

const Home = () => {
  return (
    <Router>
      <div className="nest-header">
        <Link to={"./RollTheDice"}>Girar el Dado</Link>

        <Routes>
          <Route path="/RollTheDice" element={<RollTheDice />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
