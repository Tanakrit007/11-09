import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Post from "./POST";
import Card from "./Card";
//import StateInClass from "./StateInClass";

function App() {
  return (
    <>
      <div>
        <Post />
        <Card name="TNK"  />
        <Card name="PPP"  />
      </div>
    </>
  );
}

export default App;
