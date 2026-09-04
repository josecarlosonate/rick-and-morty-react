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
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
        Rick and Morty Characters
      </h1>
      <form
        onSubmit={handleSearch}
        className="mb-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center"
      >
        <input
          type="search"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        />
        <button
          type="submit"
          className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </main>
  );
}

export default CharactersPage;
