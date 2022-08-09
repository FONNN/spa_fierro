// import styled from 'styled-components'
import './Navbar.css'
// react-bootstrap
import {Container , NavDropdown, Navbar, Nav} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/' >
                    <Navbar.Brand>
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
                        {/*C07 - min1:35:00 */}
                        <NavLink to='/category/services'>
                            Servicios
                        </NavLink>
                        <NavLink to='/category/prices'>
                            Precios
                        </NavLink>
                        <NavDropdown title="Sector" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Educacion</NavDropdown.Item>
                            <NavDropdown.Item >
                                Empresas
                            </NavDropdown.Item>
                            <NavDropdown.Item >Consultas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar