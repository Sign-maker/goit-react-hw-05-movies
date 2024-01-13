import styled from 'styled-components';

export const Item = styled.li`
  padding: ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.bcColor2};
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(6)};
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(6)};
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing(4)};
`;
export const Img = styled.img`
  width: ${props => props.theme.spacing(25)};
  height: ${props => props.theme.spacing(25)};
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export const Title = styled.h4`
  font-size: ${props => props.theme.spacing(6)};
  margin-bottom: ${props => props.theme.spacing(2)};
`;
