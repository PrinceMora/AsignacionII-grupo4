import { Search } from "./searchPokemon";
export const Navbar = () => {
  return (
    <div className=" h-14 bg-red-500 grid grid-cols-2">
      <h1 className="mt-2 ml-2 text-4xl text-blue-400">Pokedex</h1>
      <Search  />
    </div>
  );
};

//Add the component to the Upper bar
