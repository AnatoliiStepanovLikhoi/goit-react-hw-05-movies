// import { NavLink } from 'react-router-dom';

import { HeaderStyled, List, NavLinkStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <List>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="movies">Movies</NavLinkStyled>
          </li>
        </List>
      </nav>
    </HeaderStyled>
  );
};
