import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./index.module.css";
import MovieCard from "components/MovieCard";
import Loader from "components/Loader";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  selectMovieList,
  selectFetchingState,
} from "../../redux/selectors/movie-list";
import { getMovieList } from "../../redux/reducers/movie-list";

const MovieList: React.FC = () => {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector(selectMovieList);
  const movieFetching = useAppSelector(selectFetchingState);
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";

  useEffect(() => {
    if (movieList.length === 0) dispatch(getMovieList());
  }, [dispatch, movieList.length]);

  const filteredMovies = movieList.filter((movie) =>
    movie["#TITLE"].toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderMovieList = filteredMovies.map((movie) => (
    <div key={movie["#IMDB_ID"]} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <MovieCard movie={movie} />
    </div>
  ));

  return (
    <div className={styles.movieList}>
      <div className="row">
        {movieFetching ? (
          <Loader />
        ) : filteredMovies.length === 0 ? (
          <div>
            <h6 className="fst-italic text-white">Oops! No movies found.</h6>
          </div>
        ) : (
          renderMovieList
        )}
      </div>
    </div>
  );
};

export default MovieList;
