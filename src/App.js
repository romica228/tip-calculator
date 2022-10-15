import React from "react";
import "./App.css";
import { ReactComponent as Logo } from "./images/logo.svg";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <div className="box">
      <Logo id="logo" />
      <LeftSide />
    </div>
  );
}

export default App;
