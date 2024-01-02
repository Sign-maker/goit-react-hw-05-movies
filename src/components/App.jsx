import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/review" element={<div>Reviews</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};
