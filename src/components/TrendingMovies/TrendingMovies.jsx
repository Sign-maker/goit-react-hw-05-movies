import React, { useEffect, useState } from 'react';

import { getTrending } from 'services-api/themoviedb-apt';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { BtnLoadMore } from 'components/BtnLoadMore/BtnLoadMore';
import { INFO_TYPES, STATUS } from 'configs/constants';
import { Loader } from 'components/Loader/Loader';
import { Informer } from 'components/Informer/Informer.styled';

export const TrendingMovies = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.idle);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getItems() {
      setStatus(STATUS.pending);
      const { results, total_pages } = await getTrending(page, signal);

      setLoadMore(page < total_pages);
      setItems(state => [...state, ...results]);
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
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showItems =
    (status === STATUS.resolved || loadMore) && items.length > 0;
  const showNoItemsWarning = status === STATUS.resolved && !items.length;
  const showLoader = status === STATUS.pending;
  const showLoadMore = status === STATUS.resolved && loadMore;
  const showError = status === STATUS.rejected;

  return (
    <section>
      <h2>Trending today</h2>
      {showItems && <MoviesList items={items} />}
      {showNoItemsWarning && (
        <Informer
          $infotype={INFO_TYPES.notification}
        >{`No items found! Please, reload page`}</Informer>
      )}
      {showLoader && <Loader />}
      {showLoadMore && <BtnLoadMore handleLoadMore={handleLoadMore} />}
      {showError && (
        <Informer
          $infotype={INFO_TYPES.error}
        >{`Oops, something went wrong! ${error.message}`}</Informer>
      )}
    </section>
  );
};
