import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePokemonView from "./views/SinglePokemonView";
import Home from "./views/HomeView";
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<SinglePokemonView />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
