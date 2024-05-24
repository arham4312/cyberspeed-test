import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  selectMovieDetail,
  selectFetchingState,
} from "../../redux/selectors/movie-list";
import { getMovieDetail } from "../../redux/reducers/movie-list";
import Loader from "components/Loader";

interface Actor {
  "@type": string;
  name: string;
  url: string;
}

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const movieDetail = useAppSelector(selectMovieDetail);
  const movieFetching = useAppSelector(selectFetchingState);

  useEffect(() => {
    if (id) dispatch(getMovieDetail(id));
  }, [id, dispatch]);

  const renderActorNames = movieDetail?.short?.actor
    ?.map((actor: Actor) => actor.name)
    .join(", ");

  return (
    <div className={styles.container}>
      <Link className={styles.backLink} to="/">
        ⇽ Back
      </Link>
      {movieFetching ? (
        <Loader />
      ) : (
        <div className={styles.movieDetail}>
          <div className={styles.imageContainer}>
            <img
              className={styles.moviePageImg}
              src={movieDetail?.short?.image}
              alt={movieDetail?.short?.name}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h1 className={styles.movieTitle}>{movieDetail?.short?.name}</h1>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: movieDetail?.short?.description ?? "",
              }}
            />
            <div className={styles.additionalInfo}>
              <div className={styles.infoBlock}>
                <h6 className={styles.subtitle}>Actors</h6>
                <p className={styles.infoText}>{renderActorNames}</p>
              </div>
              <div className={styles.infoBlock}>
                <h6 className={styles.subtitle}>Rating</h6>
                <p className={styles.infoText}>
                  {movieDetail?.short?.review?.reviewRating?.ratingValue ??
                    "??"}{" "}
                  / 10
                </p>
              </div>
              <div className={styles.infoBlock}>
                <h6 className={styles.subtitle}>Keywords</h6>
                <p className={styles.infoText}>
                  {movieDetail?.short?.keywords}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
