import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services-api/themoviedb-apt';
import { INFO_TYPES, STATUS } from 'configs/constants';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { Informer } from 'components/Informer/Informer.styled';

const Cast = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getItems() {
      setStatus(STATUS.pending);
      const { cast } = await getMovieCredits(movieId, signal);
      setItems(cast);
      setStatus(STATUS.resolved);
    }

    try {
      getItems();
    } catch (error) {
      setStatus(STATUS.rejected);
      setError(error);
    }

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const showItems = status === STATUS.resolved && items.length > 0;
  const showNoItemsWarning = status === STATUS.resolved && !items.length;
  const showLoader = status === STATUS.pending;
  const showError = status === STATUS.rejected;

  return (
    <>
      {showItems && <CastList items={items} />}
      {showNoItemsWarning && (
        <Informer
          $infotype={INFO_TYPES.notification}
        >{`No casts found!`}</Informer>
      )}
      {showLoader && <Loader />}
      {showError && (
        <Informer
          $infotype={INFO_TYPES.error}
        >{`Oops, something went wrong! ${error.message}`}</Informer>
      )}
    </>
  );
};

export default Cast;
