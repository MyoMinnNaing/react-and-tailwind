import { useState } from "react";
import "./App.css";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
      </Routes>
    </>
  );
}

export default App;
