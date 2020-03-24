import React, { useState } from "react";
import "./App.css";
import benHead from "../../../src/ben-head.jpg";
import mrBenBod from "../../../src/ben-body.jpg";

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
    setSize(size + 25);
  }

  return (
    <div className="App">
      <div>
        <img
          className="benHead"
          src={benHead}
          alt="ben"
          style={{ width: size }}
        />
        <img className="benBod" src={mrBenBod} alt="benbod" />
      </div>
      <button onClick={blowUpBen}>Ask Ben a Question!</button>
    </div>
  );
}

export default App;
