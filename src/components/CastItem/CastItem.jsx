import { DEFAULT_PROFILE_IMG } from 'configs/constants';
import { TMDB_CONFIG } from 'configs/tmdb-config';
import { DescrBlock, Img, ImgWrapper, Item, Title } from './CastItem.styled';

export const CastItem = ({ character, profile_path, name }) => (
  <Item>
    <ImgWrapper>
      <Img
        src={
          profile_path
            ? `${TMDB_CONFIG.secure_base_url}${TMDB_CONFIG.profile_size_185}/${profile_path}`
            : DEFAULT_PROFILE_IMG
        }
        loading="lazy"
        width={250}
        alt={name}
      />
    </ImgWrapper>
    <DescrBlock>
      <Title>{name}</Title>
      <p>{character}</p>
    </DescrBlock>
  </Item>
);
