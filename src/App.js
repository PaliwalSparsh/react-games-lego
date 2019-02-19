import React, { Component } from "react";
import Diglett from "./containers/Diglett";

const INTERVAL_TIME = 600;
const WORM_SPAWNS_PER_GAME = 30;

class App extends Component {
  render() {
    return <div style={{ height: '500px' }}><Diglett intervalTime={INTERVAL_TIME} wormSpawnsPerGame={WORM_SPAWNS_PER_GAME} /></div>;
  }
}

export default App;
