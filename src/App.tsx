import "./App.css";
import { Routes, Route } from "react-router";
import Menu from "./components/Menu";
import Dolor from "./components/Dolor";
import ObjetivePain from "./components/ObjetivePain";
import Sedacion from "./components/Sedacion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/dolor" element={<Dolor />} />
      <Route path="/objetivepain" element={<ObjetivePain />} />
      <Route path="/sedacion" element={<Sedacion />} />
    </Routes>
  );
}

export default App;
