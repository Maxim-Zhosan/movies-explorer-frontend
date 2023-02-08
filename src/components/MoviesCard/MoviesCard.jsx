/* eslint-disable react/prop-types */
import React from 'react';
import './MoviesCard.css';

function MoviesCard({
  name, likes, link, duration, cardOwner, type,
}) {
  const cardType = type;
  const currentUser = cardOwner;
  const isLiked = likes.some((i) => i === currentUser);
  const cardMovieLikePlaceName = (`card__movie-like-place ${cardType === 'MovieCard' && 'card__movie-like-place_active'}`);
  const cardSavedMovieDeleteName = (`card__saved-movie-delete-place ${cardType === 'SavedMovieCard' && 'card__saved-movie-delete-place_active'}`);
  const cardLikeButtonClassName = (`card__heart-icon ${isLiked && 'card__heart-icon_liked'}`);

  return (
    <article className="card">
      <img src={link} alt={name} className="card__movie-image" />
      <div className="card__movie-info-box">
        <h2 className="card__movie-name">{name}</h2>
        <div className={cardMovieLikePlaceName}>
          <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" />
        </div>
        <div className={cardSavedMovieDeleteName}>
          <button className="card__movie-delete-button" type="button" aria-label="Лайк" />
        </div>
      </div>
      <p className="card__movie-duration">{duration}</p>
    </article>
  );
}

export default MoviesCard;
