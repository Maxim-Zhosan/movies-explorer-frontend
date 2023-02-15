/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */
import { URL } from './constants';

class MoviesApi {
  constructor(host) {
    this._host = host;
  }

  _getJsonOrError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  searchMovies() {
    return fetch(`${this._host}`)
      .then((res) => this._getJsonOrError(res));
  }
}

const moviesApi = new MoviesApi(URL);

export default moviesApi;
