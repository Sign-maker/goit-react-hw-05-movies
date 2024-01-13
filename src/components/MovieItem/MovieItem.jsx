import {
  DescriptionWrapper,
  Img,
  ImgWrapper,
  Item,
  StyledLink,
  Title,
} from './MovieItem.styled';
import { TMDB_CONFIG } from 'configs/tmdb-config';
import { DEFAULT_MOVIE_IMG } from 'configs/constants';
import DateObject from 'react-date-object';

export const MovieItem = ({ id, title, poster_path, release_date, state }) => (
  <Item>
    <StyledLink to={`/movies/${id}`} state={state}>
      <ImgWrapper>
        <Img
          src={
            poster_path
              ? `${TMDB_CONFIG.secure_base_url}${TMDB_CONFIG.poster_size_342}/${poster_path}`
              : DEFAULT_MOVIE_IMG
          }
          loading="lazy"
          width={230}
          alt={title}
        />
      </ImgWrapper>

      <DescriptionWrapper>
        <Title>{title}</Title>
        <p>{new DateObject(release_date).format('MMM YYYY')}</p>
      </DescriptionWrapper>
    </StyledLink>
  </Item>
);
