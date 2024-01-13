import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: ${props => props.theme.spacing(120)};
  margin: 0 auto;
  height: ${props => props.theme.spacing(10)};
  border: 1px solid ${props => props.theme.accentColor};
  border-radius: ${props => props.theme.spacing(5)};
  background-color: transparent;
  color: inherit;
  &:is(:hover, :focus) {
    color: ${props => props.theme.accentColor};
  }
  transition: color ${props => props.theme.transition};
`;
