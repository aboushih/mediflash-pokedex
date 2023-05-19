export interface Images {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };

export interface Pokemon {
  id: number;
  name: string;
  images: Images;
  height: number;
  weight: number;
  abilities: {
    name: string;
    is_hidden?: boolean;
  }[];
  species: {
    name: string
    is_baby?: boolean;
    is_legendary?: boolean;
    is_mythical?: boolean
  };
  stats: {
    name: string;
    ffort?: number;
  }[];
  types: string[];
}
