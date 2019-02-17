import React from "react";

export const GameData = React.createContext({
  highScore: 0,
  currentScrore: 0,
  progress: 0,
  updateHighScore: () => {},
  updateCurrentScore: () => {},
  updateProgress: () => {}
});
