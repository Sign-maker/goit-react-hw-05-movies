import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkWrapper = styled.div`
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.spacing(5)};
  border: 1px solid ${props => props.theme.accentColor};
  &.active {
    color: ${props => props.theme.accentColor};
  }
  &:is(:hover, :focus) {
    color: ${props => props.theme.accentColor};
  }
  transition: color ${props => props.theme.transition};
`;
