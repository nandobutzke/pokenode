import Pokemon from '../models/Pokemon';

interface CreatePokemonDTO {
  name: string;
  type: string;
}

class PokemonsRepository {
  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = [];
  }

  public getAll(): Pokemon[] {
    return this.pokemons;
  }

  public create({ name, type }: CreatePokemonDTO): Pokemon {
    const pokemon = new Pokemon({ name, type });

    this.pokemons.push(pokemon);

    return pokemon;
  }
}

export default PokemonsRepository;
