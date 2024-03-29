import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acessibilidade" element={<Home />} />
        <Route path="/feedback" element={<Home />} />
        <Route path="/contato" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}