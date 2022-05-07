import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Nav } from "./components/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Rsvp } from "./pages/Rsvp/Rsvp";
import { Photos } from "./pages/Photos/Photos";
import { Info } from "./pages/Info/Info";
import { Page } from "./models/page";

const pages: Page[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/info",
    title: "Info",
  },
  {
    path: "/photos",
    title: "Photos",
  },
  {
    path: "/rsvp",
    title: "RSVP",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "secondary.light" }}>
        <BrowserRouter>
          <Nav pages={pages} />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/rsvp" element={<Rsvp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
