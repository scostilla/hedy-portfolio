import react, { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

export const Welcome = (props) => {

    console.log(props.name);
    return(
  <div>
    <h1>Bienvenido {props.name}</h1>
  </div>
  );
};
