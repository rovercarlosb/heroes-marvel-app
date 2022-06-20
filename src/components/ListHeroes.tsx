import { Hero } from '../types';

interface Props {
  heroes: Array<Hero>;
}

const ListHeroes = ({ heroes }: Props) => {
  const renderList = (): JSX.Element[] => {
    return heroes.map((hero) => {
      return (
        <li key={hero.id}>
          <img
            className="card-img-hero"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={`Avatar for ${hero.name}`}
          />
          <h4>
            {hero.name} (<small>{hero.modified}</small>)
          </h4>
          <p>{hero.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default ListHeroes;
