import { CastItem } from 'components/CastItem/CastItem';

export const CastList = ({ items }) => (
  <ul>
    {items.map(({ cast_id, character, profile_path, name }) => (
      <CastItem
        key={cast_id}
        character={character}
        profile_path={profile_path}
        name={name}
      />
    ))}
  </ul>
);
