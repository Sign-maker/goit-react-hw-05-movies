import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  column-gap: ${props => props.theme.spacing(6)};
  row-gap: ${props => props.theme.spacing(10)};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing(8)};
`;
