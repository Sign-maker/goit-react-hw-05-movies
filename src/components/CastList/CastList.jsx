import { useEffect, useRef } from 'react';
import { CastItem } from 'components/CastItem/CastItem';
import { List } from './CastList.styled';

export const CastList = ({ items }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const scrollToEl = el => {
      el?.scrollIntoView({ behavior: 'smooth' });
    };

    scrollToEl(listRef.current);
  }, []);

  return (
    <List ref={listRef}>
      {items.map(({ cast_id, character, profile_path, name }) => (
        <CastItem
          key={cast_id}
          character={character}
          profile_path={profile_path}
          name={name}
        />
      ))}
    </List>
  );
};
