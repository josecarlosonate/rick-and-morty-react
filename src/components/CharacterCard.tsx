import { Link } from 'react-router';
import type { Character } from '../types/character';

function CharacterCard({character}: {character: Character}) {
    return(
        <article>   
          <Link to={`/character/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        </article>
    )
}

export default CharacterCard;