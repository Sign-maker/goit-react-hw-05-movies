import styled from 'styled-components';
import placeholder from '../../images/imgplaceholder.png';

export const Section = styled.section`
  /* padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(8)}; */
`;
export const Wrapper = styled.div`
  display: flex;
  /* align-items: flex-start; */
  padding: ${props => props.theme.spacing(8)};
  background-color: ${props => props.theme.bcColor2};
  gap: ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.spacing(4)};

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const ImgWrapper = styled.div`
  flex: 1 0 33%;

  @media screen and (max-width: 767px) {
    flex: 1 1 100%;
  }
`;

export const Img = styled.img`
  width: 100%;

  object-fit: cover;
  object-position: center;
  background-image: url(${placeholder});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const UserScoreWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.spacing(8)};
  margin-bottom: ${props => props.theme.spacing(6)};
  & span {
    font-weight: 400;
  }
`;
export const DescrBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(6)};
  }
`;
export const Subtitle = styled.h3`
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(4)};
`;

export const GenresItem = styled.li`
  padding-left: ${props => props.theme.spacing(3)};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: ${props => props.theme.spacing(1.5)};
    height: ${props => props.theme.spacing(1.5)};
    background-color: ${props => props.theme.accentColor};
    border-radius: 50%;
  }
`;

export const AddList = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing(4)};
  flex-wrap: wrap;
`;
