import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';




const addNewPokemonToLocalStorage = (newPokemonId:number)  => {
  if (typeof window === 'undefined') return [];

  const newPokemonList = JSON.parse(localStorage.getItem('newPokemonList') || '[]');
  
  if (!newPokemonList.includes(newPokemonId)) {
    newPokemonList.push(newPokemonId);
    localStorage.setItem('newPokemonList', JSON.stringify(newPokemonList));
  }
};

const getNewPokemonsSearched = async () => {
  if (typeof window === 'undefined') return [];

  const newPokemonList = JSON.parse(localStorage.getItem('newPokemonList') || '[]');
  
  const result=  await Promise.all( newPokemonList.map(async (pokemonId:number) => {
    const [newPokemon] = await getPokemons(1, pokemonId - 1);
    return newPokemon;
  })); 
  return result;
  
};

const getPokemons = async (limit: number, offset: number): Promise<SmallPokemon[]> => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id: string = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    return {
      ...pokemon,
      id: Number(id),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });
  return pokemons;
};

const exportedFunctions = {  getNewPokemonsSearched, getPokemons, addNewPokemonToLocalStorage };

export default exportedFunctions;
