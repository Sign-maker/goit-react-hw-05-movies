import React from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { SlPeople } from 'react-icons/sl';
import { BsCardText } from 'react-icons/bs';
import { StyledNavLink } from './UniversalLinkBtn.styled';

export const UNI_ICON_TYPES = {
  goBackIcon: 'goBack',
  peopleIcon: 'people',
  textIcon: 'text',
};

export const UniversalLinkBtn = ({ path, iconType, text }) => (
  <StyledNavLink to={path}>
    {iconType === UNI_ICON_TYPES.goBackIcon && (
      <span>
        <TbArrowBackUp />
      </span>
    )}
    {iconType === UNI_ICON_TYPES.peopleIcon && (
      <span>
        <SlPeople />
      </span>
    )}
    {iconType === UNI_ICON_TYPES.textIcon && (
      <span>
        <BsCardText />
      </span>
    )}
    {text}
  </StyledNavLink>
);
