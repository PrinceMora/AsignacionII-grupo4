import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import Image from "next/image";
interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  return (
    <main className="m-4 flex flex-col justify-center rounded-lg bg-gray-200 border-spacing-12">
      <div className="grid grid-rows-4 items-center">
        <figure className="row-span-3 items-center max-h-100 max-w-100">
          <Image className="mx-auto my-auto object-cover" src={img} width={100} height={100} alt={`${name}`} data-testid={`pokemon-card-image-${id}`} />
        </figure>
        <footer className="row-span-1 grid grid-cols-3 ">
          <h3 className="ml-2"> # {id}</h3>
          <h3 className="col-span-2">{name}</h3>
        </footer>
      </div>
    </main>
  );
};
