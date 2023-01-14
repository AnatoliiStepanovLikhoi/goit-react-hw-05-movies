import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const NavlistLink = styled(NavLink)`
  padding: 4px;

  &:hover,
  &:focus {
    color: #eb8596;
  }
`;
