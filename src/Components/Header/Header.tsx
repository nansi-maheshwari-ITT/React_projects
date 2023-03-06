import { useState } from "react";
import {
  NavItem,
  NavItems,
  NavbarLink,
  NavToggle,
  Nav,
} from "./HeaderStyle";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  const handleNavLinkClick = () => {
    setShowNav(!showNav);
  };
  return (
    <Nav>
      <NavToggle onClick={handleToggle}>☰</NavToggle>
      <NavItems className={showNav ? "show" : ""}>
        <NavItem>
          <NavbarLink to="/" onClick={handleNavLinkClick}>
            Home
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink to="about" onClick={handleNavLinkClick}>
            About
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink to="achievements" onClick={handleNavLinkClick}>
            Achievements
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink to="contact" onClick={handleNavLinkClick}>
            Contact
          </NavbarLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

export default Header;
