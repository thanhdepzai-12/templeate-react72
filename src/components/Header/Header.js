import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import '../Header/Header.scss';
const Header= ()=> {
  return (
    <Navbar expand="lg" className="navBar bg-body-tertiary">
      <Container>
      <NavLink to="/" className='navbar-brand'>Thanh Bieng</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/User" className='nav-link'>User</NavLink>
            <NavLink to="/Admin" className='nav-link'>Admin</NavLink>
          </Nav>
          <Nav>
            <button className='btn-login'>Login</button>
            <button className='btn-signin'>Sign Up</button>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item >Login</NavDropdown.Item>
              <NavDropdown.Item >Logout</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item > Separated link </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;