import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import ListHeroes from './components/ListHeroes';
import MarvelService from './services/marvelService';
import { Hero } from './types';

function App() {
  interface AppState {
    heroes: Hero[];
  }

  const [heroes, setHeroes] = useState<AppState['heroes']>([]);

  const getHeroes = async () => {
    const heroesResponse = await MarvelService.getAllHeroes();
    setHeroes(heroesResponse);
  };

  useEffect(() => {
    getHeroes();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <ListHeroes heroes={heroes} />
    </div>
  );
}

export default App;
