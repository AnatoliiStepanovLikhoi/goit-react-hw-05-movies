import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0px;
  left: 0px;
  position: sticky;
  z-index: 10;

  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;

  font-size: 16px;
  padding: 16px 24px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;

  &.active {
    color: #eb8596;
  }

  :hover,
  :focus {
    text-decoration: underline;
  }

  /* :focus {
    text-decoration: underline;
    color: #eb8596;
  } */
`;
