import { Router } from 'express';
import PokemonRepository from '../repositories/PokemonsRepository';
import Pokemon from '../models/Pokemon';
import CreatePokemonService from '../services/CreatePokemonService';

const pokemonsRouter = Router();

const pokemonsRepository = new PokemonRepository();

const createPokemonService = new CreatePokemonService(pokemonsRepository);

pokemonsRouter.post('/', (request, response) => {
  const { name, type } = request.body;

  const pokemon = createPokemonService.execute({ name, type });

  return response.json(pokemon);
});

export default pokemonsRouter;
