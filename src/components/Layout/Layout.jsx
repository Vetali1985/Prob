import { Outlet } from 'react-router-dom';
import { StyledLink, Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>

      <Outlet />
    </Wrapper>
  );
};
export default Layout;
