import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  CreatePokemon,
  PokemonI,
  SpeciesI,
  UpdatePokemon,
} from 'src/dtos/pokemons.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PokemonsDBProvider {
  private pokemons: PokemonI[] = [];

  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0',
    );

    const totalPokeons = response.data.results;

    for (const pokemonUrl of totalPokeons) {
      const pokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonUrl.name}`,
      );
      const {
        id,
        name,
        height,
        weight,
        sprites,
        species: speciesAPI,
        stats: statsAPI,
        types: typesAPI,
        abilities: abilitiesAPI,
      } = pokemon.data;

      const { back_default, back_shiny, front_default, front_shiny } = sprites;

      const abilities = abilitiesAPI?.map(
        ({ is_hidden, ability: { name } }) => ({
          name,
          is_hidden,
        }),
      );

      const types = typesAPI?.map(({ type: { name } }) => name);

      const stats = statsAPI?.map(({ effort, stat: { name } }) => ({
        name,
        effort,
      }));

      const { species, color, shape } = await this.getSpiciesInfos(
        speciesAPI.url,
      );

      this.pokemons.push({
        id: `${id}`,
        name,
        images: { back_default, back_shiny, front_default, front_shiny },
        height,
        weight,
        abilities,
        species,
        color,
        shape,
        types,
        stats,
      });
    }
  }

  async getSpiciesInfos(
    speciesUrl: string,
  ): Promise<{ species: SpeciesI; color: string; shape: string }> {
    const specie = await axios.get(`${speciesUrl}`);

    const { name, is_baby, is_legendary, is_mythical, color, shape } =
      specie.data;

    return {
      species: { name, is_baby, is_legendary, is_mythical },
      color: color?.name,
      shape: shape?.name,
    };
  }

  getPokemons(limit: number, offset: number) {
    return this.pokemons
      .slice(offset, offset + limit)
      .map(({ id, name, images, types }) => ({ id, name, images, types }));
  }

  getPokemonById(pokemonId: string): PokemonI {
    const pokemon = this.pokemons.find(({ id }) => id === pokemonId);
    if (pokemon) {
      return pokemon;
    }
  }

  insertNewPokemon(newPokemon: CreatePokemon) {
    const pokemonId = uuid();

    this.pokemons.push({ id: pokemonId, ...newPokemon, images: {} });

    return pokemonId;
  }

  modifyPokemon(pokemonId: string, pokemon: UpdatePokemon) {
    const indexToBeUpdated = this.pokemons.findIndex(
      ({ id }) => id === pokemonId,
    );

    if (indexToBeUpdated !== -1) {
      const oldPokemon = this.pokemons[indexToBeUpdated];
      this.pokemons[indexToBeUpdated] = { ...oldPokemon, ...pokemon };
    }
  }

  removePokemon(pokemonId: string) {
    const indexToBeDeleted = this.pokemons.findIndex(
      ({ id }) => id === pokemonId,
    );

    if (indexToBeDeleted !== -1) {
      this.pokemons.splice(indexToBeDeleted, 1);
    }
  }
}
