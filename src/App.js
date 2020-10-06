import React from "react";
import Navigation from "./components/Navigation";
// import BrowserRouter from 'react-router-dom'
import Router from "./Router";
import "./App.css";
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <div>
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
