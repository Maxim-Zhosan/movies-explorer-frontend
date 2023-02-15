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
      name: data.name,
      about: data.about,
    }),
  })
    .then((res) => getJsonOrError(res));
}
