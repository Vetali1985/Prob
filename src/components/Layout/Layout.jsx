import { Outlet } from 'react-router-dom';
import { Div, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <Div>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>

      <Outlet />
    </Div>
  );
};
export default Layout;
