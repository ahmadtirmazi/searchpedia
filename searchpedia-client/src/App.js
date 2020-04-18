import React from "react";
import "./App.css";
import "typeface-roboto";

import Container from "@material-ui/core/Container";
import Home from "./home/index";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Home />
      </Container>
    </div>
  );
}

export default App;
