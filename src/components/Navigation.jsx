import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Navigation(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="dark" dark expand="md" container >
        <NavbarBrand tag={Link} to="/" className="me-auto">
          C. Palacio
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="m-auto py-4">
            <NavItem>
              <NavLink tag={Link} to="/">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/resume">
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
