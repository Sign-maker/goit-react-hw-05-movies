import styled from 'styled-components';
export const SForm = styled.form`
  margin-bottom: ${props => props.theme.spacing(8)};
`;
export const SearchContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: ${props => props.theme.spacing(120)};
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-top: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(11)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(4)};
  background-color: transparent;
  border: 1px solid white;
  border-radius: 22px;
  color: inherit;
  &:focus {
    border-color: ${props => props.theme.accentColor};
  }
`;
export const Button = styled.button`
  padding: 0 ${props => props.theme.spacing(3)};
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  & svg {
    fill: white;
    transition: fill ${props => props.theme.transition};
  }
  &:is(:hover, :focus) svg {
    fill: ${props => props.theme.accentColor};
  }
`;
