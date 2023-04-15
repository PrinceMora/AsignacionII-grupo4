import { NextPage } from "next";
import { Layout } from "@/src/components/layouts";
import { GetStaticProps } from "next";
import { SmallPokemon } from "@/src/interfaces";
import { PokemonCard } from "@/src/components/pokemon/PokemonCard";
import { useEffect, useState } from "react";
import pokeApi from "../utils/localFavorites";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const [newPokemons, setNewPokemons] = useState<any>([]);
  let isLoaded = false;
  useEffect((): void => {
    (async () => {
      if (!isLoaded) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isLoaded = true;
        setNewPokemons(await pokeApi.getNewPokemonsSearched());
      }
    })();
  }, []);

  return (
    <>
      <Layout title="Listado de Pokémons">
        <div className="bg-red-300 grid  grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {pokemons && pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
          {newPokemons.length > 0 && newPokemons?.map((pokemon: SmallPokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const limit = 100;
  const offset = 0;

  return {
    props: {
      pokemons: await pokeApi.getPokemons(limit, offset),
    },
  };
};

export default HomePage;
