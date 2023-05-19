import axios from "axios";
import { useMutation } from "react-query";
import { API_URL } from "./api";

export const useDeletePokemon = () => {
  const deletePokemonQuery = useMutation(async (id: string) => {
    await axios.delete(`${API_URL}/pokemons/${id}`);
  });

  return deletePokemonQuery;
};
