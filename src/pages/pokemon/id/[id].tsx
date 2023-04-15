import { NextPage } from 'next';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { Pokemon } from '../../../interfaces';
import {   getStaticInformation } from '../../../utils';
import { PokemonPrincipalCard } from '@/src/components/pokemon/PokemonPrincipalCard';

interface PokemonProps {
  pokemon: Pokemon; 
}
const PokemonPage: NextPage<PokemonProps> = ({ pokemon }) => {
  return <PokemonPrincipalCard pokemon={pokemon} />;
};
export const getStaticPaths: GetStaticPaths = async (_ctx) => {
  const pokemons100 = [...Array(100)].map((_value, index) => {
    return { params: { id: `${index + 1}` } };
  });
  return {
    paths: pokemons100,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: pokemonTermSearch } = params as { id: string };

  return await getStaticInformation(pokemonTermSearch);
};

export default PokemonPage;