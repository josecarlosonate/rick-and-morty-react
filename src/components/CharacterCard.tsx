import { Link } from 'react-router';
import type { Character } from '../types/character';

function CharacterCard({character}: {character: Character}) {
    return(
        <article className="h-full">
          <Link
            to={`/character/${character.id}`}
            className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <img
              src={character.image}
              alt={character.name}
              className="aspect-square w-full object-cover"
            />
            <h2 className="flex min-h-16 items-center px-4 py-3 text-lg font-semibold text-slate-800">
              {character.name}
            </h2>
          </Link>
        </article>
    )
}

export default CharacterCard;