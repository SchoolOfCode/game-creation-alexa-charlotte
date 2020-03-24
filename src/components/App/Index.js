import React, { useState } from "react";
import "./App.css";
import benHead from "../../../src/benFixed.png";
import mrBenBod from "../../../src/benBody.png";
import Buttons from "../Buttons/buttons";

// BENAROO

// similar to balloon task, players pin requests for help on Ben
// requests are in the form of buttons with different programming symbols on
// buttons will generate a random number each time between -3 and 3
// The number of questions ben can take will be between 10 and 15
// addition of minus numbers means total can go up or down
// when number is met then Ben will explode!

// BOARD
//picture of ben, who's head grows on each click
//"Speech mark" buttons

//

function App() {
  const [size, setSize] = useState(50);

  function blowUpBen() {
    setSize(size + 15);
  }

  return (
    <div className="App">
      <img
        className="benHead"
        src={benHead}
        alt="ben"
        style={{ width: size }}
      />
      <img className="benBod" src={mrBenBod} alt="benbod" />
      <button onClick={blowUpBen}>Ask Ben a Question!</button>
      <Buttons />
    </div>
  );
}

export default App;
