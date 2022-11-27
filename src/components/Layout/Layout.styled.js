import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const StyledLink = styled(NavLink)`
   display: flex;
   justify-content: center;
   color: black;
   font-weight:bold;
   border: 1px solid black;
    padding: 16px;
    margin: 16px;
    width: 320px;
    text-decoration: none;
  &.active {
    color: orange;
    background-color:white;
  }
`;
export const LayoutWrapper = styled.div`
background-color: aqua;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;