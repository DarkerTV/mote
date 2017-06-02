import React, { PureComponent } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import './index.css';

class Header extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Container className="my-3">
        <Navbar className="Header" color="fade" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="#">Mote</NavbarBrand>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">Inicio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
