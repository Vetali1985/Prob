import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const StyledLink = styled(NavLink)`
display: flex;
    justify-content: center;
  color: black;
border: 1px solid black;
    padding: 16px;
    margin: 16px;
    width: 320px;
  &.active {
    color: orange;
    background-color:white;
    

  }
`;
export const Div = styled.div`
background-color: aqua;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;