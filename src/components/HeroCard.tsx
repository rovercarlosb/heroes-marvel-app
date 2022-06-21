import { Hero } from "../types"

type Props = {
    hero: Hero
}

export const HeroCard = ({ hero }: Props): JSX.Element => {
    return (
        <section className="hero-card animate__animated">
          <img
            className="card-img-hero"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={`Avatar for ${hero.name}`}
          />
          <div className="hero-info">
            <h3 style={{textAlign: 'center'}}>
                {hero.name}
            </h3>
            <p style={{fontSize : '10px'}}>{ hero.description ? hero.description.substring(0, 100) : 'Not Description'}</p>
          </div>
        </section>
    )
}