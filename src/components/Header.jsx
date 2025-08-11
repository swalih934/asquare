import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
function Header() {
    return (
        <>



            <Navbar expand="lg" className=" bg-white py-4">
                <Container>
                    <Navbar.Brand href="#home" className="me-5 d-flex align-items-center">
                        <img
                            src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/cropped-cropped-Asquare-logo-01-scaled-1-e1751608315648.png"
                            alt="Logo"
                            className="img-fluid"
                            style={{ height: '48px' }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto gap-3  font-urbanist fw-bold">
                            <Nav.Link style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }}  href="#home">Home</Nav.Link>

                            <NavDropdown style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }}  title="Dashboard" id="dashboard-dropdown" className="nav-big-dropdown">
                                <NavDropdown.Item href="#action/3.2">Microsoft Power BI</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Tablegu Visuals</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Tablegue Twins</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }}  href="#link">Placements</Nav.Link>

                            <NavDropdown style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }} title="Courses" id="courses-dropdown">
                                <NavDropdown.Item href="#action/3.1">Generative AI</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Business Analytics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Data Analytics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Data Science</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Power BI</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Tablegue Data Visualisation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">SalesForce Admin with AI</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Python Programming</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Artificial Intelligence</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">QlikSense</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }} href="#link">About Us</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }} href="#link">Blog</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }} href="#link">Contact Us</Nav.Link>

                            <Nav.Link style={{ fontWeight: 'bold', fontFamily: 'Urbanist' }} href="#link" className="d-flex align-items-center">
                                <i className="fa-solid fa-user me-1"></i> Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>)
}

export default Header