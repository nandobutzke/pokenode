import Pokemon from '../models/Pokemon';
import PokemonsRepository from '../repositories/PokemonsRepository';

interface CreatePokemonDTO {
  name: string;
  type: string;
}

class CreatePokemonService {
  private pokemonsRepository: PokemonsRepository;

  constructor(pokemonsRepository: PokemonsRepository) {
    this.pokemonsRepository = pokemonsRepository;
  }

  public execute({ name, type }: CreatePokemonDTO): Pokemon {
    const pokemon = this.pokemonsRepository.create({ name, type });

    if (
      ![
        'Bug',
        'Dark',
        'Dragon',
        'Eletric',
        'Fairy',
        'Fighting',
        'Fire',
        'Flying',
        'Ghost',
        'Grass',
        'Ground',
        'Ice',
        'Normal',
        'Poison',
        'Psychic',
        'Rock',
        'Steel',
        'Water',
      ].includes(type)
    ) {
      throw new Error('This type of pokemon doesn`t exists');
    }

    return pokemon;
  }
}

export default CreatePokemonService;
