import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";

export const AbmRender = (props) => {
    const [abmClass, SetAbmClass] = useState("abm-container-red");
  
    if (!props.flag) return null;
  
    const ChangeColor = () => {
      if (abmClass === "abm-container-red") {
        SetAbmClass("abm-container-yellow");
        console.log(abmClass);
      } else {
        SetAbmClass("abm-container-red");
        console.log(abmClass);
      }
    };
  
    return (
      <div>
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
          <button onClick={() => ChangeColor()}>Change my ABM background</button>
        </div>
      </div>
    );
  }
  
  