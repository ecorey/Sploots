import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainMint from "./MainMint";
import NavBar from "./NavBar";
import About from "./About";
import Stats from "./Stats";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <Router>
      <div className="overlay">
        <div className="App">
          <NavBar accounts={accounts} setAccounts={setAccounts} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/stats" element={<Stats />} />

            <Route
              path="/"
              element={
                <MainMint accounts={accounts} setAccounts={setAccounts} />
              }
            />
          </Routes>
        </div>
        <div className="moving-background"></div>
      </div>
    </Router>
  );
}

export default App;
