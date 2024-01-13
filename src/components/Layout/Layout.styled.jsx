import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 428px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Header = styled.header`
  background-color: ${props => props.theme.bcColor2};
  height: ${props => props.theme.spacing(16)};
  display: flex;

  border-bottom-right-radius: ${props => props.theme.spacing(4)};
  border-bottom-left-radius: ${props => props.theme.spacing(4)};
  justify-content: center;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing(6)};
`;

export const StyledLink = styled(NavLink)`
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  position: relative;

  &:is(:hover, :focus) {
    transform: scale(1.05);
  }
  transition: transform ${props => props.theme.transition};

  &.active {
    color: ${props => props.theme.accentColor};
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: ${props => props.theme.spacing(0.5)};
    left: 0;
    width: 100%;
    height: ${props => props.theme.spacing(0.25)};
    background-color: ${props => props.theme.accentColor};
  }
`;
