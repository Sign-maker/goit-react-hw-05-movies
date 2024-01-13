import styled from 'styled-components';
import { INFO_TYPES } from 'configs/constants';

export const Informer = styled.p`
  text-align: center;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  color: ${props => {
    let color = '';

    switch (props.$infotype) {
      case INFO_TYPES.error:
        color = 'red';
        break;
      case INFO_TYPES.notification:
        color = props.theme.accentColor;
        break;
      default:
        color = 'black';
    }
    return color;
  }};
`;
