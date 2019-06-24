import React from "react";
import logo from "./logo.svg";
import { Cell, Grid, Row } from "@material/react-layout-grid";

import "./App.scss";

function App() {
  return (
    <div className="video-container">
      <video loop autoPlay muted playsInline>
        <source src="/video/jus.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
