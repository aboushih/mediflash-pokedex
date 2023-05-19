import { Module } from '@nestjs/common';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';
import { HttpModule } from '@nestjs/axios';
import { PokemonsDBProvider } from 'src/thirdPartyAPI/pokemons.db.provider';
import { PokemonsRepository } from './repositories/pokemons.repository';

@Module({
  imports: [HttpModule],
  controllers: [PokemonsController],
  providers: [PokemonsService, PokemonsDBProvider, PokemonsRepository],
})
export class PokemonsModule {}
