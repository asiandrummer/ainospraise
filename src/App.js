import React from "react";
import { Grid, Row, Cell } from "@material/react-layout-grid";
import Button from "@material/react-button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JoinUs from "./JoinUs.react";

import "./App.scss";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/joinus" component={JoinUs} />
    </Router>
  );
}

const Home = () => (
  <div className="App">
    <div className="video-container">
      <video loop autoPlay muted playsInline>
        <source src="/video/jus.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="content">
      <Grid>
        <Row>
          <Cell desktopColumns={4} phoneColumns={4} tabletColumns={2} />
          <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
            <h1 className="team-name">Ainos</h1>
            <h1 className="team-name">Praise</h1>
            <Link to="/joinus">
              <Button outlined>Join Our Team</Button>
            </Link>
          </Cell>
          <Cell desktopColumns={4} phoneColumns={4} tabletColumns={2} />
        </Row>
      </Grid>
    </div>
  </div>
);
