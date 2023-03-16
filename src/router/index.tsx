import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PokeGamePage, PokeSearchPage } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poke-search" element={<PokeSearchPage />} />
        <Route path="/poke-game" element={<PokeGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}
