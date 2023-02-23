/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-promise-reject-errors */
import { URLMA } from './constants';

function getJsonOrError(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function checkToken() {
  return fetch(`${URLMA}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => getJsonOrError(res));
}

export function authUser(data) {
  return fetch(`${URLMA}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => getJsonOrError(res));
}

export function registerNewUser(data) {
  return fetch(`${URLMA}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => getJsonOrError(res));
}

export function setUserInfo(data) {
  return fetch(`${URLMA}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      _id: data._id,
      name: data.name,
      email: data.email,
    }),
  })
    .then((res) => getJsonOrError(res));
}

export function logout() {
  return fetch(`${URLMA}/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => getJsonOrError(res));
}

export function getSavedMovies() {
  return fetch(`${URLMA}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => getJsonOrError(res));
}

export function deleteSavedMovie(savedMovieId) {
  return fetch(`${URLMA}/movies/${savedMovieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => getJsonOrError(res));
}

export function addSavedMovie(movie, isMovieLiked, savedMovieId) {
  if (!isMovieLiked) {
    return fetch(`${URLMA}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then((res) => getJsonOrError(res));
  }
  return deleteSavedMovie(savedMovieId);
}
