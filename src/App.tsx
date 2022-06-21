import { useEffect, useRef, useState } from 'react';
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
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])
  
  useEffect(() => {
    const getHeroes = async (): Promise<void> => {
      const heroesResponse = await MarvelService.getAllHeroes();
      setHeroes(() => heroesResponse);
    };
    
    if (isMounted.current) {
      getHeroes();
    }
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <ListHeroes heroes={heroes} />
    </div>
  );
}

export default App;
