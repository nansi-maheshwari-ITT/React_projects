import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  background-color: #008080;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  width:100%;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 10em;
  margin: 0;

  .active {
    color: black;
  }

  @media (max-width: 768px) {
    display: none;

    &.show {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      top: 5rem;
      left: 0;
      right: 0;
      background-color: #008080;
      padding: 1rem;
    }
  }
`;

const NavToggle = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
	background-color:rgb(22, 78, 78);
	color:white;
	border:none;
	padding: 5px 10px;
  }
`;

const NavItem = styled.li``;
const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export {NavItem,NavItems,NavLink,NavbarLink,NavToggle,Nav}