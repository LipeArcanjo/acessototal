import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Accessibility from "./pages/Accessibility/Acessibility";
import Feedback from "./pages/Feedback/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acessibilidade" element={<Accessibility />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}