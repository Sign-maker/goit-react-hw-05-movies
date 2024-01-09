import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { TMDB_CONFIG } from 'configs/tmdb-config';
import { getMovieById } from 'services-api/themoviedb-apt';
import { Informer } from 'components/Informer/Informer.styled';
import { INFO_TYPES, STATUS } from 'configs/constants';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getItem() {
      setStatus(STATUS.pending);
      const data = await getMovieById(movieId, signal);
      console.log(data);
      setMovie(data);
      setStatus(STATUS.resolved);
    }

    try {
      getItem();
    } catch (error) {
      setStatus(STATUS.rejected);
      setError(error);
    }

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {status === STATUS.resolved && (
        <>
          <Link to={backLinkRef.current}>
            <span>&lt;=</span> Go back
          </Link>
          <section>
            <div>
              <img
                src={`${TMDB_CONFIG.secure_base_url}${TMDB_CONFIG.poster_sizes}/${movie.poster_path}`}
                alt=""
              />
              <div>
                <h2>{movie.title}</h2>
                <p>{Math.round(+movie.vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <ul>
                  {movie.genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="review">Reviews</Link>
              </li>
            </ul>

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </section>
        </>
      )}
      {status === STATUS.pending && <Loader />}
      {status === STATUS.error && (
        <Informer
          $infotype={INFO_TYPES.error}
        >{`Oops, something went wrong! ${error.message}`}</Informer>
      )}
    </>
  );
};

export default MovieDetails;
