import axios from "axios";
import { useQuery } from "react-query";
import { Pokemon } from "../types";
import { API_URL } from "./api";

export const useGetPokemon = (id: string) => {
  const getPokemonQuery = useQuery<Pokemon, unknown>(
    ["pokemon", id],
    async () => {
      const response = await axios.get(`${API_URL}/pokemons/${id}`);

      return response.data.data;
    }
  );

  return getPokemonQuery;
};
