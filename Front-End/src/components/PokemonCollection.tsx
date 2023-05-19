import React from "react";
import { Pokemon } from "../types";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: Pokemon[];
}

const PokemonCollection = ({ pokemons }: Props) => {
  return (
    <section className="collection-container">
      {pokemons.map((pokemon) => {
        return (
          <PokemonList
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.images.front_default}
            type={pokemon.types[0]}
          />
        );
      })}
    </section>
  );
};

export default PokemonCollection;
