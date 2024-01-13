import { useLocation } from 'react-router-dom';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({ items }) => {
  const location = useLocation();

  return (
    <List>
      {items.map(({ id, title, poster_path, release_date }, idx) => (
        <MovieItem
          key={idx}
          id={id}
          title={title}
          poster_path={poster_path}
          release_date={release_date}
          state={{ from: location }}
        />
      ))}
    </List>
  );
};
