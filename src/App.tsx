import "./App.css";
import { Routes, Route } from "react-router";
import Menu from "./components/Menu";
import Dolor from "./components/Dolor";
import ObjetivePain from "./components/ObjetivePain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/dolor" element={<Dolor />} />
      <Route path="/objetivepain" element={<ObjetivePain />} />
    </Routes>
  );
}

export default App;
