import React from "react";
import GameContainer from "../../components/GameContainer";
import WormContainer from "../../components/WormContainer";
import "./diglett.css";

function Diglett(props) {
  const { intervalTime, wormSpawnsPerGame } = props;
  return (
    <GameContainer displayName="Diglett">
      <WormContainer intervalTime={intervalTime} wormSpawnsPerGame={wormSpawnsPerGame} />
    </GameContainer>
  );
}

export default Diglett;
