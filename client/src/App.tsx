import React from "react";
import "./App.css";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Nav } from "./nav/Nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
}

export default App;
