import React, { useState, useEffect, Component } from "react";
import Worm from "./components/Worm.js";
import "./styles.css";

function Diglett() {
  const [states, setStates] = useState([0, 1, 1, 1]);

  useEffect(() => {
      const generateStates = setInterval(()=>{
        let updatedState = [];
        const randomString = String(parseInt(10000 * Math.random()));
        for (let charIndex = 0; charIndex < randomString.length; charIndex++) {
            updatedState.push(parseInt(Number(randomString[charIndex])/5));
        }
        setStates(updatedState)
      }, 100);
      return ()=>{
          clearInterval(generateStates);
      }
  });

  return (
    <div className="container">
      {states.map((state, index) => (
        <Worm pose={state} key={index} />
      ))}
    </div>
  );
}

export default Diglett;
