import react, { useState } from "react";
import { useParams } from "react-router-dom";

export const RollTheDice = () => {
  const [getValue, setValue] = useState("");
  const [getDice, setDice] = useState("");

  function Roll() {

    let value = Math.floor(Math.random() * 6 + 1);

    switch (value.toString()) {
      case "1":
        setDice("⚀");
        break;
        case "2":
        setDice("⚁");
        break;
        case "3":
        setDice("⚂");
        break;
        case "4":
        setDice("⚃");
        break;
        case "5":
        setDice("⚄");
        break;
        case "6":
        setDice("⚅");
        break;
    }
    setValue(value);
  }

  return(
  <div>
    <h1>Presione el boton para girar el dado</h1>
    <button onClick={() => Roll()}>Girar el dado</button>
    <h2>
      El resultado es: <b>{getValue}</b>
    </h2>
    <p>
      <h1>{getDice}</h1>
    </p>
  </div>
  );
};
