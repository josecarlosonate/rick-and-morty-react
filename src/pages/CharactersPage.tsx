import { useEffect, useState } from "react";
import type { Character } from "../types/character";
import { getRandomCharacters, getCharactersByName } from "../services/rickAndMortyApi";
import CharacterCard from "../components/CharacterCard";
import type { SubmitEvent } from "react";

function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Load characters logic here
    async function loadCharacters() {
      const charactersData = await getRandomCharacters();
      setCharacters(charactersData);
    }

    loadCharacters();
  }, []);

  async function handleSearch(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = searchTerm.trim();

    if (!name) {
      const charactersData = await getRandomCharacters();
      setCharacters(charactersData);
      return;
    }
    
    const searchResults = await getCharactersByName(name);
    setCharacters(searchResults);

  }

  return (
    <main>
      <h1>Rick and Morty Characters</h1>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <section>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </main>
  );
}

export default CharactersPage;
