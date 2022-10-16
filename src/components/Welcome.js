import { useParams } from "react-router-dom";
import react, { useState } from "react";
import "../App.css";

export const Welcome = (props) => {

    console.log(props.name);
    return(
  <div>
    <h1>Bienvenido {props.name}</h1>
  </div>
  );
};
