import { uuid } from 'uuidv4';

class Pokemon {
  id: string;

  name: string;

  type: string;

  constructor({ name, type }: Omit<Pokemon, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.type = type;
  }
}

export default Pokemon;
