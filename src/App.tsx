import { Route, Routes } from "react-router";
import "./App.css";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
    </Routes>
  );
}

export default App;
