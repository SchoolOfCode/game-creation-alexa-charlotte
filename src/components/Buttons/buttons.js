import React, { useState } from "react";
import "./buttons.css";

function Buttons() {
  const [size, setSize] = useState(50);

  function blowUpBen() {
    setSize(size + 15);
  }
  return (
    <div id="buttonDiv">
      <button onClick={blowUpBen} id="babel" alt="babel"></button>
      <button onClick={blowUpBen} id="codeWars" alt="codeWars"></button>
      <button onClick={blowUpBen} id="css" alt="css"></button>
      <button onClick={blowUpBen} id="express" alt="express"></button>
      <button onClick={blowUpBen} id="git" alt="gridTemplate: "></button>
      <button onClick={blowUpBen} id="heroku" alt="heroku"></button>
      <button onClick={blowUpBen} id="html" alt="html"></button>
      <button onClick={blowUpBen} id="jest" alt="justifyContent: "></button>
      <button onClick={blowUpBen} id="js" alt="js"></button>
      <button onClick={blowUpBen} id="netlify" alt="netlify"></button>
      <button onClick={blowUpBen} id="node" alt="node"></button>
      <button onClick={blowUpBen} id="pg" alt="pg"></button>
      <button onClick={blowUpBen} id="postman" alt="postman"></button>
      <button onClick={blowUpBen} id="react" alt="react"></button>
      <button onClick={blowUpBen} id="vsCode" alt="vsCode"></button>
    </div>
  );
}

export default Buttons;
