import { Link } from 'react-router-dom';

export const MovieItem = ({ id, title, state }) => (
  <li>
    <Link to={`/movies/${id}`} state={state}>
      {title}
    </Link>
  </li>
);
