import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';
import { Outlet } from 'react-router-dom';
import { Div, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <Div>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
      {/* <Home /> */}
      <Outlet />
    </Div>
  );
};
export default Layout;
