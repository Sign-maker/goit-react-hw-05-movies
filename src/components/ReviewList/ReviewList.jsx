import { ReviewItem } from 'components/ReviewItem/ReviewItem';

export const ReviewList = ({ items }) => (
  <ul>
    {items.map(({ id, author, content }) => (
      <ReviewItem key={id} author={author} content={content} />
    ))}
  </ul>
);
