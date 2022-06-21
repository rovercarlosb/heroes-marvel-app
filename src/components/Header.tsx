import marvelLogo from '../assets/marvel_logo.png';
import { Button } from './Button';
type Props = {};

export const Header = (props: Props): JSX.Element => {
  return (
    <header>
      <img src={marvelLogo} alt="Marvel Logo" />
      <h1>
        Marvel Heroes App
      </h1>
      <section className="menu-buttons">
        <Button>Heroes</Button>
        <Button>Series</Button>
        <Button>Comics</Button>
      </section>
    </header>
  );
};
