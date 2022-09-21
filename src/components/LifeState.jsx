import { useEffect, useState } from 'react';
import AxiosPokemon from '../services/axios';

const LifeState = ({ limit }) => {
  const [counter, setCounter] = useState(0);
  const [pokemon, setPokemons] = useState([]);

  useEffect(() => {
    const idInterval = setInterval(() => {
      console.log('init');
      setCounter((preCounter) => {
        return preCounter + 1;
      });
    }, 1000);

    return () => {
      console.log('Muero :(');
      clearInterval(idInterval);
    };
  }, []);

  useEffect(() => {
    console.log('Updated counter');
  }, [counter]);

  // const axiosPokemon = new AxiosPokemon();
  // useEffect(() => {
  //   axiosPokemon
  //     .getPokemons()
  //     .then(({ results }) => {
  //       setPokemons(results);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   axiosPokemon
  //   .getPokemons(limit)
  //   .then(({ results }) => {
  //     setPokemons(results);
  //   })
  //   .catch((err) => console.error(err));
  // }, [limit])

  return <div>{counter}</div>;
};

export default LifeState;
