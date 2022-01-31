import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavorites, setFavorite } from '../../../../store/api/api-thunk';
import { RootState } from '../../../../types/types';

export default function FavoriteBtn({id}: {id: number}): JSX.Element {
  const dispatch = useDispatch();
  const favorites = useSelector(({movies}: RootState) => movies.favorites);
  const [isFavorite, setIsFavorite] = useState(0);

  useEffect(() => {
    if (favorites.some((favorite) => favorite.id === id)) {
      setIsFavorite(1);
    }
    else {
      setIsFavorite(0);
    }
    dispatch(loadFavorites());
  }, [dispatch, favorites, id]);

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => {
        dispatch(setFavorite(id, (1 - isFavorite)));
        dispatch(loadFavorites());
      }}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite === 1 ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </button>
  );
}
