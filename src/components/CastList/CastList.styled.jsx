import styled from 'styled-components';

export const List = styled.ul`
  padding-top: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(6)};
  display: flex;
  flex-wrap: wrap;
  column-gap: ${props => props.theme.spacing(6)};
  row-gap: ${props => props.theme.spacing(10)};
  justify-content: center;
`;
