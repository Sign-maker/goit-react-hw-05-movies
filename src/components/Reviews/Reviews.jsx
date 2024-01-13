import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { INFO_TYPES, STATUS } from 'configs/constants';
import { getMovieReviews } from 'services-api/themoviedb-apt';
import { BtnLoadMore } from 'components/BtnLoadMore/BtnLoadMore';
import { Loader } from 'components/Loader/Loader';
import { ReviewList } from 'components/ReviewList/ReviewList';
import { Informer } from 'components/Informer/Informer.styled';

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getItems() {
      setStatus(STATUS.pending);
      const { results, total_pages } = await getMovieReviews(
        movieId,
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
  }, [movieId, page]);

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
    <>
      {showItems && <ReviewList items={items} />}
      {showNoItemsWarning && (
        <Informer
          $infotype={INFO_TYPES.notification}
        >{`No reviews found!`}</Informer>
      )}
      {showLoader && <Loader />}
      {showLoadMore && <BtnLoadMore handleLoadMore={handleLoadMore} />}
      {showError && (
        <Informer
          $infotype={INFO_TYPES.error}
        >{`Oops, something went wrong! ${error.message}`}</Informer>
      )}
    </>
  );
};

export default Reviews;
