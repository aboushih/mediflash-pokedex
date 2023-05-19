import { Injectable } from '@nestjs/common';
import {
  CreatePokemon,
  PokemonI,
  UpdatePokemon,
} from '../../dtos/pokemons.dto';
import { PokemonsDBProvider } from 'src/thirdPartyAPI/pokemons.db.provider';

@Injectable()
export class PokemonsRepository {
  constructor(private readonly pokemonsDBProvider: PokemonsDBProvider) {}

  getAll(limit: number, offset: number) {
    return this.pokemonsDBProvider.getPokemons(limit, offset);
  }

  get(id: string): PokemonI {
    return this.pokemonsDBProvider.getPokemonById(id);
  }

  add(pokemon: CreatePokemon) {
    return this.pokemonsDBProvider.insertNewPokemon(pokemon);
  }

  update(id: string, pokemon: UpdatePokemon) {
    return this.pokemonsDBProvider.modifyPokemon(id, pokemon);
  }

  delete(id: string) {
    return this.pokemonsDBProvider.removePokemon(id);
  }
}
