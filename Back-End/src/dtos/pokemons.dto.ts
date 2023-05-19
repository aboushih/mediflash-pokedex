import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { IsType } from 'src/utils/IsType';
import { IsTypeArray } from 'src/utils/IsTypeArray';

export class Ability implements AbilityI {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsBoolean()
  is_hidden?: boolean;
}

export class Species implements SpeciesI {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsBoolean()
  is_baby?: boolean;

  @IsOptional()
  @IsBoolean()
  is_legendary?: boolean;

  @IsOptional()
  @IsBoolean()
  is_mythical?: boolean;
}

export class Stat implements StatI {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsInt()
  effort?: number;
}

export class Images implements ImagesI {
  @IsOptional()
  @IsString()
  back_default: string;

  @IsOptional()
  @IsString()
  back_shiny?: string;

  @IsOptional()
  @IsString()
  front_default?: string;

  @IsOptional()
  @IsString()
  front_shiny?: string;
}

export interface AbilityI {
  name: string;
  is_hidden?: boolean;
}

export interface SpeciesI {
  name: string;
  is_baby?: boolean;
  is_legendary?: boolean;
  is_mythical?: boolean;
}

export interface StatI {
  name: string;
  effort?: number;
}

export interface ImagesI {
  back_default?: string;
  back_shiny?: string;
  front_default?: string;
  front_shiny?: string;
}

export interface PokemonI {
  id: string;
  name: string;
  images: ImagesI;
  height: number;
  weight: number;
  color: string;
  shape: string;
  abilities?: AbilityI[];
  species?: SpeciesI;
  stats?: StatI[];
  types?: string[];
}

export class Pokemon implements PokemonI {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsType(() => Images)
  images: ImagesI;

  @IsInt()
  height: number;

  @IsInt()
  weight: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  shape: string;

  @IsOptional()
  @IsTypeArray(() => Ability)
  abilities?: AbilityI[];

  @IsOptional()
  @IsType(() => Species)
  species?: SpeciesI;

  @IsOptional()
  @IsTypeArray(() => Stat)
  stats?: StatI[];

  @IsOptional()
  @IsArray()
  types?: string[];
}

export class CreatePokemon
  implements Pick<PokemonI, 'name' | 'height' | 'weight' | 'color' | 'shape'>
{
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  height: number;

  @IsInt()
  weight: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  shape: string;
}

export class UpdatePokemon extends CreatePokemon {}
