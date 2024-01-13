import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../../images/imgplaceholder.png';

export const Item = styled.li`
  flex-basis: ${props => props.theme.spacing(57)};
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bcColor2};

  &:is(:hover, :focus) {
    transform: scale(1.03);
  }
  transition: transform ${props => props.theme.transition};
`;
export const ImgWrapper = styled.div`
  height: ${props => props.theme.spacing(75)};
  background-image: url(${placeholder});
  background-position: center;
  background-size: cover;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const DescriptionWrapper = styled.div`
  flex: 1;
  font-size: ${props => props.theme.spacing(4.5)};
  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(4)};
`;
export const Title = styled.h3`
  font-weight: 500;

  margin-bottom: ${props => props.theme.spacing(3)};
`;
