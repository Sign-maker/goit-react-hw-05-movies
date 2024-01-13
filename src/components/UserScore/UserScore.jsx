import { Line } from 'rc-progress';
import { Wrapper } from './UserScore.styled';

export const UserScore = ({ value }) => {
  return (
    <Wrapper>
      <p>
        User score <span>{value}%</span>
      </p>
      <Line percent={value} strokeWidth={7} strokeColor="rgb(89, 255, 67)" />
    </Wrapper>
  );
};
