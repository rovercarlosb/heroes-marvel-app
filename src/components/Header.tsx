import marvelLogo from '../assets/marvel.svg';
import { Button } from './Button';
type Props = {};

export const Header = (props: Props) => {
  return (
    <header>
      <img src={marvelLogo} alt="React Logo" />
      <section className="menu-buttons">
        <Button>Heroes</Button>
        <Button>Series</Button>
        <Button>Comics</Button>
      </section>
    </header>
  );
};
