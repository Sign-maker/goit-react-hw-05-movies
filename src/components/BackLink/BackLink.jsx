import { TbArrowBackUp } from 'react-icons/tb';
import { BackLinkWrapper, StyledNavLink } from './BackLink.sytled';

export const BackLink = ({ path }) => (
  <BackLinkWrapper>
    <StyledNavLink to={path}>
      <span>
        <TbArrowBackUp />
      </span>
      Go back
    </StyledNavLink>
  </BackLinkWrapper>
);
