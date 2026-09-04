import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Character } from "../types/character";
import { getCharacterById } from "../services/rickAndMortyApi";

function CharacterDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    async function getCharacter() {
      if (!id) return;
      const loadedCharacter = await getCharacterById(Number(id));
      setCharacter(loadedCharacter);
    }

    getCharacter();
  }, [id]);

  if (!character) {
    return <p className="p-8 text-center text-slate-600">Loading character...</p>;
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-6 inline-flex font-semibold text-emerald-700 transition-colors hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Back to characters
      </Link>

      <article className="overflow-hidden rounded-xl bg-white shadow-lg md:grid md:grid-cols-2">
        <img
          src={character.image}
          alt={character.name}
          className="aspect-square w-full object-cover md:h-full"
        />

        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            {character.name}
          </h1>

          <div className="space-y-3 text-slate-600">
            <p>
              <strong className="font-semibold text-slate-800">Status:</strong>{" "}
              {character.status}
            </p>

            <p>
              <strong className="font-semibold text-slate-800">Species:</strong>{" "}
              {character.species}
            </p>

            <p>
              <strong className="font-semibold text-slate-800">Gender:</strong>{" "}
              {character.gender}
            </p>

            <p>
              <strong className="font-semibold text-slate-800">Origin:</strong>{" "}
              {character.origin.name}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default CharacterDetailsPage;
