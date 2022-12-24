import React from "react";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

export default function Header() {


    return (
        <div className="App-header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Porfolio</Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Container >
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Work</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Contact us</Nav.Link>
                        </Nav>
                    </Container>
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
            
        </div>
    )
}