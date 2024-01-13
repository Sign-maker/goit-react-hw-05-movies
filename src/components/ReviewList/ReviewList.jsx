import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { List } from './ReviewList.styled';
import { useEffect, useRef } from 'react';

export const ReviewList = ({ items }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const scrollToEl = el => {
      el?.scrollIntoView({ behavior: 'smooth' });
    };

    scrollToEl(listRef.current);
  }, []);

  return (
    <List ref={listRef}>
      {items.map(({ id, author, author_details, content, created_at }) => (
        <ReviewItem
          key={id}
          author={author}
          authorDetails={author_details}
          createdAt={created_at}
          content={content}
        />
      ))}
    </List>
  );
};
