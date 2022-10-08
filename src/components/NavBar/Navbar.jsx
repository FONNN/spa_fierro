// import styled from 'styled-components'
import './Navbar.css'
// react-bootstrap
import {Container , NavDropdown, Navbar, Nav} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Nav.Link as={Link} to='/' >
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/src/components/NavBar/logoInvdom.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-center"
                        />{' '}
                        Inversiones Domus
                    </Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*C07 - min1:35:00 */}
                        <Nav.Link as={Link} to='/category/house'>
                            Casas
                        </Nav.Link>
                        <Nav.Link as={Link} to='/category/apartment'>
                            Departamentos
                        </Nav.Link>
                        <NavDropdown title="Sector" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Proyectos</NavDropdown.Item>
                            <NavDropdown.Item >Asesorias</NavDropdown.Item>
                            <NavDropdown.Item >Inversiones</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Futuros proyectos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <NavLink to='/cart'>
                        <CartWidget />
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar