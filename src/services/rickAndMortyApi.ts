import type { Character } from '../types/character';

const API_URL = 'https://rickandmortyapi.com/api';

//obtener todos los personajes de la API de Rick and Morty
export async function getCharacters(): Promise<Character[]>{
  const response = await fetch(`${API_URL}/character`);

  if(!response.ok){
    throw new Error('Failed to fetch characters');
  }

  const data: { results: Character[] } = await response.json();
  
  return data.results;
}

//obtener un personaje por su id de la API de Rick and Morty
export async function getCharacterById(id: number): Promise<Character>{
  const response = await fetch(`${API_URL}/character/${id}`);

  if(!response.ok){
    throw new Error('Failed to fetch character');
  }

  const data: Character = await response.json();
  
  return data;
}