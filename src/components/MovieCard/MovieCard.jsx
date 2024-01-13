import DateObject from 'react-date-object';
import { DEFAULT_MOVIE_IMG } from 'configs/constants';
import { TMDB_CONFIG } from 'configs/tmdb-config';
import {
  UNI_ICON_TYPES,
  UniversalLinkBtn,
} from 'components/UniversalBtn/UniversalLinkBtn';
import { UserScore } from 'components/UserScore/UserScore';
import {
  AddList,
  DescrBlock,
  GenresItem,
  GenresList,
  Img,
  ImgWrapper,
  Section,
  Subtitle,
  Title,
  UserScoreWrapper,
  Wrapper,
} from './MovieCard.styled';

export const MovieCard = ({
  movie: { poster_path, title, vote_average, overview, genres, release_date },
}) => (
  <Section>
    <Wrapper>
      <ImgWrapper>
        <Img
          src={
            poster_path
              ? `${TMDB_CONFIG.secure_base_url}${TMDB_CONFIG.poster_size_500}/${poster_path}`
              : DEFAULT_MOVIE_IMG
          }
          width={350}
          alt={title}
        />
      </ImgWrapper>
      <div>
        <Title>
          {title} <span>({new DateObject(release_date).format('YYYY')})</span>
        </Title>
        <UserScoreWrapper>
          <UserScore value={Math.round(+vote_average * 10)} />
        </UserScoreWrapper>
        <DescrBlock>
          <Subtitle>Overview</Subtitle>
          <p>{overview}</p>
        </DescrBlock>
        <DescrBlock>
          <Subtitle>Genres</Subtitle>
          <GenresList>
            {genres.map(({ id, name }) => (
              <GenresItem key={id}>{name}</GenresItem>
            ))}
          </GenresList>
        </DescrBlock>
        <DescrBlock>
          <Subtitle>Additional information</Subtitle>
          <AddList>
            <li>
              <UniversalLinkBtn
                path="cast"
                text="Cast"
                iconType={UNI_ICON_TYPES.peopleIcon}
              />
            </li>
            <li>
              <UniversalLinkBtn
                path="review"
                text="Reviews"
                iconType={UNI_ICON_TYPES.textIcon}
              />
            </li>
          </AddList>
        </DescrBlock>
      </div>
    </Wrapper>
  </Section>
);
