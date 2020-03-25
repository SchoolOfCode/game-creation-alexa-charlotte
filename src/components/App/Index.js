import React, { useState, useEffect } from "react";
import "./App.css";
import benHead from "../../../src/benFixed.png";
import mrBenBod from "../../../src/benBody.png";
import Buttons from "../Buttons/buttons";
import benaroo from "../Buttons/benarooTitle.png";
import docs from "../Speech/bubbles/chris docs.JPG";
import errors from "../Speech/bubbles/chris errors.JPG";
import google from "../Speech/bubbles/chris google.JPG";
import hive from "../Speech/bubbles/chris hive.JPG";
import idiot from "../Speech/bubbles/chris idiot.JPG";
import know from "../Speech/bubbles/chris know.JPG";
import minutes from "../Speech/bubbles/chris minutes.JPG";
import nearly from "../Speech/bubbles/chris nearly.JPG";
import nice from "../Speech/bubbles/chris nice.JPG";
import plan from "../Speech/bubbles/chris plan.JPG";

function App() {
  //
  const [size, setSize] = useState(50);
  const [benLimit, setBenLimit] = useState(51);
  const [gameOver, setGameOver] = useState("");
  const [head, setHead] = useState(false);
  const [picture, setPicture] = useState("");

  const bubbles = [
    docs,
    errors,
    google,
    hive,
    idiot,
    know,
    minutes,
    nearly,
    nice,
    plan
  ];

  useEffect(() => {
    if (size > 70 && size < 100) {
      setPicture(bubbles[Math.floor(Math.random() * 10)]);
      console.log("over 70");
    }
  }, [size]);

  useEffect(() => {
    setBenLimit(Math.floor(Math.random() * (250 - 180 + 1) + 180));
  }, []);

  function blowUpBen() {
    setSize(size + Math.floor(Math.random() * (30 - -2) + -2));
  }

  console.log("size=  " + size);
  console.log("I can see  " + benLimit);

  useEffect(() => {
    if (size > benLimit) {
      console.log("Game Over");
      setGameOver("GAME OVER!");
      setHead(true);
    }
  }, [size]);

  return (
    <div className="App">
      <img id="benarooTitle" src={benaroo} alt="Benaroo" />
      <h1>Click on a button below and see how Ben reacts!</h1>
      <h2>
        If you're the one who makes his head explode, hang your head in shame!
      </h2>
      <img
        className="benHead"
        src={benHead}
        alt="ben"
        style={{ width: size }}
      />
      <img className="benBod" src={mrBenBod} alt="benbod" />
      <Buttons blowUpBen={blowUpBen} />
      <p>{gameOver}</p>

      <img src={picture} alt="" />
    </div>
  );
}
export default App;
