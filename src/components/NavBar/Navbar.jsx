// import styled from 'styled-components'
import './Navbar.css'
// react-bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/' >
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/src/components/NavBar/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Maderigen
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/'>
                            <Nav.Link href="#services">Servicios</Nav.Link>
                        </NavLink>
                        <Nav.Link href="#pricing">Precios</Nav.Link>
                        <NavDropdown title="Sector" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Educacion</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Empresas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Consultas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <NavLink to='/carrito'>
                        <CartWidget />
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar