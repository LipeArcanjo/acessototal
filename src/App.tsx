import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyAcessibility = lazy(() => import("./pages/Accessibility/Acessibility"));
const LazyFeedback = lazy(() => import("./pages/Feedback/Feedback"));
const LazyContact = lazy(() => import("./pages/Contact/Contact"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const LazyRegister = lazy(() => import("./pages/Register/Register"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Carregando</h1>}>
        <Routes>
          <Route path="/" element={<LazyHome  />} />
          <Route path="/acessibilidade" element={<LazyAcessibility />} />
          <Route path="/feedback" element={<LazyFeedback />} />
          <Route path="/contato" element={<LazyContact />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/register" element={<LazyRegister />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}