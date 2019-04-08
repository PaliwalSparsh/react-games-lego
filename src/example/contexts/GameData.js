import React from "react";

export const GameData = React.createContext({
  state: {},
  dispatch: () => {}
});

export const GameDataProvider = GameData.Provider;
