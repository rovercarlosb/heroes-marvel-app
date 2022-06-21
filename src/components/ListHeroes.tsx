import { Hero } from '../types';
import { HeroCard } from './HeroCard';

interface Props {
  heroes: Array<Hero>;
}

const ListHeroes = ({ heroes }: Props) => {
  const renderList = (): JSX.Element[] => {
    return heroes.map((hero) => {
      return (
        <HeroCard key={hero.id} hero={hero}></HeroCard>
      );
    });
  };

  return <div className='hero-list'>{renderList()}</div>;
};

export default ListHeroes;
