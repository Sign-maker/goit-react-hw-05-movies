import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { INFO_TYPES, STATUS } from 'configs/constants';
import { getMoviesByTitle } from 'services-api/themoviedb-apt';
import { BtnLoadMore } from 'components/BtnLoadMore/BtnLoadMore';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Informer } from 'components/Informer/Informer.styled';
import { H2, Section } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.idle);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getItems() {
      setStatus(STATUS.pending);
      const { results, total_pages } = await getMoviesByTitle(
        query,
        page,
        signal
      );

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
  }, [query, page]);

  const updateQueryString = searchQuery => {
    if (searchQuery === query) return;

    if (searchQuery === '') {
      setSearchParams({});
      setStatus(STATUS.idle);
      setItems([]);
      return;
    }

    setItems([]);
    setPage(1);
    setSearchParams({ query: searchQuery });
  };

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
    <Section>
      <H2 className="visually-hidden">Movies</H2>
      <SearchForm onSubmit={updateQueryString} value={query} />
      {showItems && <MoviesList items={items} />}
      {showNoItemsWarning && (
        <Informer
          $infotype={INFO_TYPES.notification}
        >{`No items found! Please, try another query!`}</Informer>
      )}
      {showLoader && <Loader />}
      {showLoadMore && <BtnLoadMore handleLoadMore={handleLoadMore} />}
      {showError && (
        <Informer
          $infotype={INFO_TYPES.error}
        >{`Oops, something went wrong! ${error.message}`}</Informer>
      )}
    </Section>
  );
};

export default Movies;
