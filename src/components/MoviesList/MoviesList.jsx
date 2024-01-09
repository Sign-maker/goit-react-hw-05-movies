import { useLocation } from 'react-router-dom';
import { MovieItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ items }) => {
  const location = useLocation();

  return (
    <ul>
      {items.map(({ id, title }, idx) => (
        <MovieItem key={idx} id={id} title={title} state={{ from: location }} />
      ))}
    </ul>
  );
};
