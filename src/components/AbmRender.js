import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";

export const AbmRender = (props) => {
    const [abmClass, SetAbmClass] = useState("abm-container-red");
    const [getBackgroundColor,setBackgroundColor] = useState("original-background");
  
    if (!props.flag) return null;
  
    const ChangeColor = () => {
      if (getBackgroundColor === "original-background") {
        setBackgroundColor("new-background");
        console.log(getBackgroundColor);
      } else {
        setBackgroundColor("original-background");
        console.log(getBackgroundColor);
      }
    };
  
    return (
      <div className={getBackgroundColor}>
        <div>
          <h1 className="abm-title">Super ABM</h1>
          <br></br>
          <div className={abmClass}>
            <label>ID:</label>
            <input type="text"></input>
            <label>Nombre</label>
            <input type="text"></input>
            <label>Apellido</label>
            <input type="text"></input>
            <button type="submit">Submit me</button>
          </div>
          <button onClick={() => ChangeColor()}>Cambiar color de fondo</button>
        </div>
      </div>
    );
  }
  
  