import { Div, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <Div>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink>Movies</StyledLink>
    </Div>
  );
};
export default Layout;
