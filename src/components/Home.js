import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import { RollTheDice } from "./RollTheDice.js";
import { Welcome } from "./Welcome.js";
import { Users } from "./Users.js";

const Home = () => {
  const [getName, setName] = useState("");

  return (
    <Router>
      <div className="nest-header">
        <Link to={"./RollTheDice"}>Actividad 1 - Girar el Dado</Link>
        <p />
        <Link to={"./Welcome"}>Actividad 2 - Mensaje de Bienvenida  </Link>
        <input
          type="text"
          value={getName}
          onChange={(e) => setName(e.target.value)}
          placeholder="ingrese su nombre"
        />
        <p />
        <Link to={"./Users"}>Actividad 3 - Componente Usuarios  </Link>

        <Routes>
          <Route path="/RollTheDice" element={<RollTheDice />} />
          <Route path="/Welcome" element={<Welcome name={getName} />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
