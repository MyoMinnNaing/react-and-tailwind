import "./App.css";
import Meal from "./components/Meal";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Search from "./components/search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
