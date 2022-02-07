export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  Favorites: '/mylist',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
  MoviePage: '/films/:id',
};

export const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
};

export const tabs = {
  overView: 'Overview',
  details: 'Details',
  reviews: 'Reviews',
};

export const genres = {
  'All genres': 'All genres',
  Comedies: 'Comedy',
  Documentary: 'Documentary',
  Dramas: 'Drama',
  Horror: 'Adventure',
  'Kids & Family': 'KidsFamily',
  Romance: 'Crime',
  'Sci-Fi': 'SciFi',
  Thrillers: 'Fantasy',
};

export const numberOfFilms = 8;
export const startOfSlice = 0;

export const rootUrl = 'https://8.react.pages.academy/wtw/';

export const serverPath = {
  films: 'films',
  comments: 'comments',
  promo: 'promo',
  similar: 'similar',
  login: 'login',
  logout: 'logout',
  favorite: 'favorite',
};

export const httpMethods = {
  post: 'POST',
  delete: 'DELETE',
};

export const testingEmail = /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,}$/;
export const testingPassword = /[A-zА-я]{1,}[0-9]{1,}|[0-9]{1,}[A-zА-я]{1,}/;

export const errors = {
  wrongAddress: 404,
  noAuth: 401,
  wrongData: 400,
};

export const warnings = {
  network: 'Неполадки с сетью или вы неправильно ввели адрес',
  server404: 'Запрашиваемая страница не найдена. Проверьте правильность написанного адреса',
  serverReview400: 'Поле рейтинга должно быть значением не меньше 1, отзыв должен состоять из не менее 40 символов и не более 500 символов',
  wrongData: 'Введенные вами логин и пароль не соответствуют требованиям',
  haveToAuth: 'Не забудьте авторизоваться',
  wrongAddedFavorites: 'Не удалось добавить в избранное',
  wrongAccess: 'Добавлять в избранное могут только авторизованные пользователи',
};

export const promoFilmId = 25;


