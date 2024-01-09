import { TMDB_CONFIG } from 'configs/tmdb-config';

export const CastItem = ({ character, profile_path, name }) => (
  <li>
    {profile_path && (
      <img
        src={`${TMDB_CONFIG.secure_base_url}${TMDB_CONFIG.profile_sizes}/${profile_path}`}
        alt=""
      />
    )}
    <h4>{name}</h4>
    <p>{character}</p>
  </li>
);
