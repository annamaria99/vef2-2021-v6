import Link from 'next/link';

import s from './Film.module.scss';
import { IFilm } from '../../types';

type Props = {
  film: IFilm;
};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {`Episode ${film.episodeID}: ${film.title}`}
      </h2>
      <div className={s.film__table}>
        <p className={s.film__opening}>
          {film.openingCrawl}
        </p>
        <div className={s.film__characters}>
          <h3>Characters</h3>
          {film.characterConnection.characters.map((char, i) => (
            <Link key={i} href={`/characters/${char.id}`}>{char.name}</Link>
          ))}
        </div>
      </div>
      <hr className={s.line} />
    </section>
  );
}
