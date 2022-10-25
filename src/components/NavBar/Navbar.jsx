// import styled from 'styled-components'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
// react-bootstrap
import {Container , NavDropdown, Navbar, Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './img/logo_Domus2.png'
import { useState } from 'react'

const NavBar = () => {

    //change color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 20) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener = ('scroll', changeColor)

    return (
        <Navbar className={color ? 'navbar navbar-bg fs-5' : 'navbar fs-5'} collapseOnSelect expand="lg" variant="light" fixed='top' >
            <Container>
                <Nav.Link as={Link} to='/' >
                    <Navbar.Brand>
                        <img
                            alt="imagen de logo"
                            src={logo}
                            width="180"
                            className="d-inline-block align-center"
                        />
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
                        <Nav.Link as={Link} to='/team'>
                            Nosotros
                        </Nav.Link>
                        <NavDropdown title="Sector" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/products'>Proyectos</NavDropdown.Item>
                            <NavDropdown.Item >Asesorias</NavDropdown.Item>
                            <NavDropdown.Item >Inversiones</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Futuros proyectos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button as={Link} to="/formulary" variant='dark'>Contáctanos</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar