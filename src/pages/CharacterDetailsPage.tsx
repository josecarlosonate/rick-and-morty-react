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
    return <p>Loading character...</p>;
  }

  return (
    <main>
      <Link to="/">Back to characters</Link>

      <article>
        <img
          src={character.image}
          alt={character.name}
        />

        <h1>{character.name}</h1>

        <p>
          <strong>Status:</strong> {character.status}
        </p>

        <p>
          <strong>Species:</strong> {character.species}
        </p>

        <p>
          <strong>Gender:</strong> {character.gender}
        </p>

        <p>
          <strong>Origin:</strong> {character.origin.name}
        </p>
      </article>
    </main>
  );
}

export default CharacterDetailsPage;
