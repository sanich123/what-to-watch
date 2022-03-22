import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Film } from '../types/types';
import { adaptFilm, getAdaptedFilms } from '../utils/adapter/adapter';
import { serverPath, warnings } from '../utils/const';
import { getData } from '../utils/fetch-api';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Film[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const films = await (await getData(serverPath.favorite)).json();
        setFavorites(getAdaptedFilms(films));
      }
      catch {
        toast.error(warnings.server404);
      }
    })();
  }, []);
  return favorites;
};

export const useComments = (id: number) => {
  const [comments, getComments] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getData(`${serverPath.comments}/${id}`);
        if (response.status === 400) {
          toast.warn(warnings.serverReview400);
        } else {
          const reviews = await response.json();
          getComments(reviews);
        }
      }
      catch {
        toast.error(warnings.server404);
      }
    })();
  }, [id]);
  return comments;
};

export const useFilm = (id: string) => {
  const [selectedFilm, setSelectedMovie] = useState<Film>();

  useEffect(() => {
    (async () => {
      try {
        const film = await (await getData(`${serverPath.films}/${id}`)).json();
        setSelectedMovie(adaptFilm(film));
      }
      catch {
        toast.error(warnings.server404);
      }
    })();
  }, [id]);

  return selectedFilm;
};


