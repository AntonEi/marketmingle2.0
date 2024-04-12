import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo" height="45"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Sign in</Nav.Link>
                        <Nav.Link>Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
