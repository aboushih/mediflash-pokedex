import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { Pokemon } from "../types";
import { API_URL } from "./api";

export const useGetPokemons = () => {
  const searchQuery = useInfiniteQuery<
    { pokemons: Pokemon[]; nextPage?: number },
    unknown
  >(
    "pokemons",
    async ({ pageParam = 0 }) => {
      const response = await axios.get(
        `${API_URL}/pokemons?limit=20&offset=${20 * pageParam}`
      );

      const pokemons: Pokemon[] = response.data.data;
      return { pokemons, nextPage: pageParam + 1 };
    },
    {
      getNextPageParam: ({ nextPage }) => nextPage,
      refetchOnWindowFocus: false,
    }
  );

  const { data } = searchQuery;
  const pokemons = data?.pages.flatMap((page) => page.pokemons) ?? [];

  return { ...searchQuery, pokemons };
};
