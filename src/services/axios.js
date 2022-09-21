import axios from 'axios';

class AxiosPokemon {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });
  }

  getPokemons() {
    return this.axios.get('pokemon?limit=10&offset=0').then((res) => res.data);
  }
}


export default AxiosPokemon;