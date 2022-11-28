import { Outlet } from 'react-router-dom';

import { LayoutWrapper, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>

      <Outlet />
    </LayoutWrapper>
  );
};
export default Layout;
