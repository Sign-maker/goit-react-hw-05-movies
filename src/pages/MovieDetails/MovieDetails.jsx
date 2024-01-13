import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import {
  UNI_ICON_TYPES,
  UniversalLinkBtn,
} from 'components/UniversalBtn/UniversalLinkBtn';
import { INFO_TYPES, STATUS } from 'configs/constants';

import { getMovieById } from 'services-api/themoviedb-apt';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';

import { Informer } from 'components/Informer/Informer.styled';
import { GoBackWrapper } from './MovieDetails.styled';

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
          <GoBackWrapper>
            <UniversalLinkBtn
              path={backLinkRef.current}
              text="Go back"
              iconType={UNI_ICON_TYPES.goBackIcon}
            />
          </GoBackWrapper>
          <MovieCard movie={movie} />

          <section>
            <h2 className="visually-hidden">Additional information</h2>
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
