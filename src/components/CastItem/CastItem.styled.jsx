import styled from 'styled-components';
import placeholder from '../../images/imgplaceholder.png';

export const Item = styled.li`
  flex-basis: ${props => props.theme.spacing(41)};
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  height: ${props => props.theme.spacing(60)};
  background-image: url(${placeholder});
  background-position: center;
  background-size: cover;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const DescrBlock = styled.div`
  flex: 1;
  font-size: ${props => props.theme.spacing(4.5)};
  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(4)};

  background-color: ${props => props.theme.bcColor2};
`;

export const Title = styled.h4`
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(3)};
`;
