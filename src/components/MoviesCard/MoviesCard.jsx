/* eslint-disable react/prop-types */
import React from 'react';
import './MoviesCard.css';
import { URLBF } from '../../utils/constants';

function MoviesCard({
  name, image, link, duration, type,
}) {
  const cardType = type;
  const isLiked = false;
  const cardMovieLikePlaceName = (`card__movie-like-place ${cardType === 'MovieCard' ? 'card__movie-like-place_active' : 'card__movie-like-place_non-active'}`);
  const cardSavedMovieDeleteName = (`card__saved-movie-delete-place ${cardType === 'SavedMovieCard' ? 'card__saved-movie-delete-place_active' : 'card__saved-movie-delete-place_non-active'}`);
  const cardLikeButtonClassName = (`card__heart-icon ${isLiked ? 'card__heart-icon_liked' : 'card__heart-icon_not-liked'}`);

  return (
    <article className="card">
      <a href={link} target="blank"><img src={URLBF + image} alt={name} className="card__movie-image" /></a>
      <div className="card__movie-info-box">
        <h2 className="card__movie-name">{name}</h2>
        <div className={cardMovieLikePlaceName}>
          <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" />
        </div>
        <div className={cardSavedMovieDeleteName}>
          <button className="card__movie-delete-button" type="button" aria-label="Лайк" />
        </div>
      </div>
      <p className="card__movie-duration">{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
    </article>
  );
}

export default MoviesCard;
