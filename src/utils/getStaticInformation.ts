import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export async function getStaticInformation(pokemonTermSearch: string) {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemonTermSearch}`);
    const { id, name, sprites } = data;

    return {
      props: {
        pokemon: {
          id,
          name,
          sprites,
        },
      },
      revalidate: 86400,
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}
