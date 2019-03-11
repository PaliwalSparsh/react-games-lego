import React from "react";
import DiglettContainer from "../components/DiglettContainer";
import WormContainer from "../components/WormContainer";
import "./styles/Diglett.style.css";

function Diglett(props) {
  const { intervalTime, wormSpawnsPerGame } = props;
  return (
    <DiglettContainer displayName="Diglett">
      <WormContainer intervalTime={intervalTime} wormSpawnsPerGame={wormSpawnsPerGame} />
    </DiglettContainer>
  );
}

export default Diglett;
