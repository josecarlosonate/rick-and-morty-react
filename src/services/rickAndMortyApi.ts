import type { Character } from '../types/character';

const API_URL = 'https://rickandmortyapi.com/api';

//obtener un personaje por su id de la API de Rick and Morty
export async function getCharacterById(id: number): Promise<Character>{
  const response = await fetch(`${API_URL}/character/${id}`);

  if(!response.ok){
    throw new Error('Failed to fetch character');
  }

  const data: Character = await response.json();
  
  return data;
}

//obtener personajes de manera aleatoria de la API de Rick and Morty
export async function getRandomCharacters(): Promise<Character[]>{
  const response = await fetch(`${API_URL}/character`);

  if(!response.ok){
    throw new Error('Failed to fetch characters');
  }

  const data: {
    info: {
      count: number
    }
  } = await response.json();

  const randomIds = new Set<number>();

  while (randomIds.size < 20) {
    const randomId = Math.floor(Math.random() * data.info.count) + 1;

    randomIds.add(randomId);
  }

  const ids = Array.from(randomIds).join(',');

  const responseRandomData = await fetch(`${API_URL}/character/${ids}`);

  if(!responseRandomData.ok){
    throw new Error('Failed to fetch random characters');
  }

  const characters: Character[] = await responseRandomData.json();
  
  return characters;
}