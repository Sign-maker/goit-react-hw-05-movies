import { useId } from 'react';

export const SearchForm = ({ value, onSubmit }) => {
  const queryInputId = useId();

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      SearchForm
      <label htmlFor={queryInputId} />
      <input
        id={queryInputId}
        type="text"
        defaultValue={value}
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};
