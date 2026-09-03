export interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;        
    }
};