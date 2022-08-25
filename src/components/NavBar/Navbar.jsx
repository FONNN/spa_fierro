// import styled from 'styled-components'
import './Navbar.css'
// react-bootstrap
import {Container , NavDropdown, Navbar, Nav} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <NavLink to='/' >
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/src/components/NavBar/logoInvdom.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-center"
                        />{' '}
                        Maderigen
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*C07 - min1:35:00 */}
                        <NavLink to='/category/education'>
                            Educacion
                        </NavLink>
                        <NavLink to='/category/business'>
                            Empresas
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