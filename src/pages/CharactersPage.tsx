import { useEffect, useState } from "react";
import type { Character } from "../types/character";
import { getCharacters } from "../services/rickAndMortyApi";
import CharacterCard from "../components/CharacterCard";

function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Load characters logic here
    async function loadCharacters() {
      const charactersData = await getCharacters();
      setCharacters(charactersData);
    }

    loadCharacters();
  }, []);

  return (
    <section>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}

export default CharactersPage;
