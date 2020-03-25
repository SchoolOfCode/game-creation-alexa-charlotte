import React from "react";
import "./buttons.css";
// import blowUpBen from "../App/Index";
const topics = [
  "babel",
  "css",
  "codeWars",
  "express",
  "git",
  "heroku",
  "html",
  "jest",
  "js",
  "netlify",
  "node",
  "pg",
  "postman",
  "react",
  "vsCode"
];

function Buttons({ blowUpBen }) {
  // const [size, setSize] = useState(50);

  // function blowUpBen() {
  //   setSize(size + 15);
  // }
  return (
    <div id="buttonDiv">
      {topics.map(topic => (
        <button onClick={blowUpBen} id={topic} alt={topic}></button>
      ))}
    </div>
  );
}

export default Buttons;
