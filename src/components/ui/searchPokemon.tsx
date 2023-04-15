import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleClick = () => {
    const inputValue = inputRef.current?.value;
    const pokemonId = inputValue ? parseInt(inputValue) : 0; 
    const hasLetters = inputValue ? String(inputValue) : "";
    const regex = /\D/;
    if (pokemonId > 1010) {
      alert("The id of pokemon to search do not exist.");
    }
    if (pokemonId !== undefined && regex.test(hasLetters)) {
      alert("The search cannot be complete because it contains non-numeric characters");
    } else {
      if (!pokemonId) return alert("First enter one number of the pokemon to search");
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(async (response) => {
        if (response.ok) {
          router.push(`../../pokemon/id/${pokemonId}`);
        } else {
          router.push(`#`);
        }
      });
    }
  };
  //this event, validate data and if all is ok search the pokemon with the Api using fetch

  return (
    <div className="flex flex-row space-x-4 justify-self-end mr-8">
      <input
        ref={inputRef}
        className="mt-2 h-10 form-input w-full px-3 py-2 rounded-md bg-white"
        type="text"
        placeholder="ID of pokemon to search"
        id="search"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
        onKeyPress={(event) => {
          const charCode = event.which ? event.which : event.keyCode;
          if (charCode < 48 || charCode > 57) {
            event.preventDefault();
          }
        }}
      />
      <button className=" mt-2 h-10 w-40 rounded-md bg-blue-400 mx-3" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};
//1010max
//evitar letras en el input
