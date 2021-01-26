import express from 'express';
import PokemonRepository from './repositories/PokemonsRepository';

const app = express();

app.use(express.json());

const pokemonsRepository = new PokemonRepository();

app.get('/pokemons', (request, response) => {
  const pokemons = pokemonsRepository.getAll();

  return response.json(pokemons);
});

app.post('/pokemons', (request, response) => {
  const { name, type } = request.body;

  const pokemon = pokemonsRepository.create({ name, type });

  return response.json(pokemon);
});

app.listen(3333);
