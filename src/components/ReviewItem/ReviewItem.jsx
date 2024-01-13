import DateObject from 'react-date-object';
import { DEFAULT_PROFILE_IMG } from 'configs/constants';
import { TMDB_CONFIG } from 'configs/tmdb-config';
import { DetailsWrapper, Img, Item, Title } from './ReviewItem.styled';

export const ReviewItem = ({
  author,
  authorDetails: { avatar_path },
  content,
  createdAt,
}) => (
  <Item>
    <DetailsWrapper>
      <Img
        src={
          avatar_path
            ? `${TMDB_CONFIG.secure_base_url}${TMDB_CONFIG.profile_size_185}/${avatar_path}`
            : DEFAULT_PROFILE_IMG
        }
        width={150}
        alt={author}
      />
      <div>
        <Title>A review by {author}</Title>
        <p>Written on {new DateObject(createdAt).format('DD MMM YYYY')}</p>
      </div>
    </DetailsWrapper>
    <p>{content}</p>
  </Item>
);
