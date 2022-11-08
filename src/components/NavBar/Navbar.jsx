// import styled from 'styled-components'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
// react-bootstrap
import { Container, NavDropdown, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './img/logo_Domus2.png'
import { useState } from 'react'

const NavBar = () => {

    //change color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener = ('scroll', changeColor)

    return (
        <Navbar className={color ? 'navbar fs-5 navbar-bg' : 'navbar fs-5'} collapseOnSelect expand="lg" variant="light" fixed='top' >
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
                    <Nav className="me-auto" onSelect={(selectedKey) => (`selected ${selectedKey}`)}>
                        {/*C07 - min1:35:00 */}
                        <Nav.Link as={Link} to='/team' eventKey="link-1">
                            Quiénes somos
                        </Nav.Link>
                        <Nav.Link as={Link} to='/rentorsell/arriendo' eventKey="link-2">
                            Arriendo
                        </Nav.Link>
                        <Nav.Link as={Link} to='/rentorsell/venta' eventKey="link-3">
                            Venta
                        </Nav.Link>
                        <NavDropdown title="Proyectos" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/products'>Proyectos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/Casas'>Casas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/Departamentos'>Departamentos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/Oficinas'>Oficinas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/Terrenos'>Terrenos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/Parcelas'>Parcelas</NavDropdown.Item>
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