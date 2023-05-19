import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemon, UpdatePokemon } from '../dtos/pokemons.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  getPokemons(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    return {
      success: true,
      data: this.pokemonsService.retrievePokemonsList(limit, offset),
    };
  }

  @Get(':id')
  async retrieveOne(@Param('id') id: string) {
    const pokemon = this.pokemonsService.retrievePokemon(id);
    return {
      success: true,
      data: pokemon,
    };
  }

  @Post()
  async createProduct(@Body() pokemon: CreatePokemon) {
    const createdProduct = this.pokemonsService.addPokemon(pokemon);
    return {
      success: true,
      data: createdProduct,
    };
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() pokemon: UpdatePokemon) {
    const updatedPokemon = this.pokemonsService.updatePokemon(id, pokemon);
    return {
      success: true,
      data: updatedPokemon,
    };
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    this.pokemonsService.deletePokemon(id);
    return {
      success: true,
      data: id,
    };
  }
}
