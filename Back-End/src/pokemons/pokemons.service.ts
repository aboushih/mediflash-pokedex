import { Injectable } from '@nestjs/common';
import { CreatePokemon, PokemonI, UpdatePokemon } from '../dtos/pokemons.dto';
import { PokemonsRepository } from './repositories/pokemons.repository';

@Injectable()
export class PokemonsService {
  constructor(private readonly pokemonsRepository: PokemonsRepository) {}

  retrievePokemonsList(limit: number, offset: number) {
    return this.pokemonsRepository.getAll(limit, offset);
  }

  retrievePokemon(id: string): PokemonI {
    return this.pokemonsRepository.get(id);
  }

  addPokemon(pokemon: CreatePokemon) {
    return this.pokemonsRepository.add(pokemon);
  }

  updatePokemon(id: string, pokemon: UpdatePokemon) {
    return this.pokemonsRepository.update(id, pokemon);
  }

  deletePokemon(id: string) {
    return this.pokemonsRepository.delete(id);
  }
}
