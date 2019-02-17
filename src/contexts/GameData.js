import React from "react";

export const GameData = React.createContext({
    highScore: 2,
    currentScrore: 2,
    progress: 2,
    updateHighScore: ()=>{},
    updateCurrentScore: ()=>{},
    updateProgress: ()=> {}
});

export const GameDataProvider = GameData.Provider;
