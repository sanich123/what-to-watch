import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/types';
import { genres, numberOfFilms, startOfSlice } from '../../utils/const';
import { filterChanger } from '../../utils/utils';
import Svg from '../svg/svg';
import FilmsList from './films-list/films-list';
import Filter from './filters/filters';
import LogoFooter from './logo-footer/footer';
import Logo from './logo-footer/logo';
import MoreFilmsBtn from './more-films-btn/more-films-btn';
import PromoFilm from './promo-film/promo-film';
import UserMenu from './user-menu/user';
import './main-styles.css';
import Loader from '../common/loader/loader';

export default function Main(): JSX.Element {
  const chosenFilter = useSelector(({movies}: RootState) => movies.filter);
  const movies = useSelector((state: RootState) => state.movies.films);
  const movie = useSelector((state: RootState) => state.movies.promoFilm);
  const [slicingNum, setSlicingNum] = useState(numberOfFilms);

  const films = filterChanger(chosenFilter, movies);
  const slicedFilms = films.slice(startOfSlice, slicingNum);

  const {name, backgroundImage} = movie;

  if (movies.length === 0 || !movie) {
    return <Loader />;
  }

  return (
    <>
      <Svg />
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">

          <Logo />

          <UserMenu />

        </header>
        {<PromoFilm movie={movie} />}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {Object.entries(genres).map(([key, value]) => <Filter filter={chosenFilter} key={key} name={key} title={value} />)}
          </ul>

          <FilmsList films={slicedFilms} />
          {slicingNum <= slicedFilms.length &&
          <MoreFilmsBtn setSlicingNum={setSlicingNum} slicingNum={slicingNum} />}
        </section>

        <footer>

          <LogoFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
