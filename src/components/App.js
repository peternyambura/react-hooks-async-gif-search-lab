import React, { Component } from "react";
import GifListContainer from './GifListContainer';
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar color="black" title="Giphy Search" />
        <GifListContainer />
      </div>
    );
  }
}

export default App;
