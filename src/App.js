import axios from "axios";
import "./App.css";
import React, { useEffect } from "react";
import { DarkThemeProvider } from "./Components/DarkThemeContext";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <DarkThemeProvider>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
