import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "models/movie-item";
import styles from "./index.module.css";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleFetchMovieDetail = () => {
    navigate(`/movie-detail/${movie["#IMDB_ID"]}`);
  };

  return (
    <div className={styles.movieCard} onClick={handleFetchMovieDetail}>
      <div className={styles.imageContainer}>
        <img
          className={styles.movieImg}
          src={movie["#IMG_POSTER"]}
          alt={movie["#TITLE"]}
        />
        <div className={styles.overlay}>
          <h4 className={styles.movieTitle}>{movie["#TITLE"]}</h4>
          <p className={styles.movieActor}>{movie["#ACTORS"]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
