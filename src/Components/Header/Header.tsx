import { useState } from "react";
import { NavItems, NavbarLink, NavToggle, Nav } from "./HeaderStyle";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "about", label: "About" },
    { to: "achievements", label: "Achievements" },
    { to: "contact", label: "Contact" },
  ];

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
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavbarLink to={link.to} onClick={handleNavLinkClick}>
              {link.label}
            </NavbarLink>
          </li>
        ))}
      </NavItems>
    </Nav>
  );
};

export default Header;
