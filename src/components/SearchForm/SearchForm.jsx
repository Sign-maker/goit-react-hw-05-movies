import { useId } from 'react';

import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { Button, Input, SForm, SearchContainer } from './SearchForm.styled';

export const SearchForm = ({ value, onSubmit }) => {
  const queryInputId = useId();

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    onSubmit(query);
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <label htmlFor={queryInputId} />
      <SearchContainer>
        <Input
          id={queryInputId}
          type="text"
          defaultValue={value}
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">
          <PiMagnifyingGlassBold />
        </Button>
      </SearchContainer>
    </SForm>
  );
};
