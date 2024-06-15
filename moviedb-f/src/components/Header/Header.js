import React from 'react';
import { Container, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // const myloginData = props.myloginData
    const myloginData = JSON.parse(localStorage.getItem('myloginData'));
    const logout = () => {
        localStorage.clear();
    }

    return(
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><FontAwesomeIcon icon={ faFilm } /> The MovieDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            <NavLink className="nav-link" to="/tvshows">TV Shows</NavLink>
                            <NavLink className="nav-link" to="/people">TV People</NavLink>
                        </Nav>
                        <Nav>
                            {myloginData ? <NavDropdown title={`Hi, ${myloginData.userInfo ? myloginData.userInfo.username : ''}`} id="collasible-nav-dropdown">
                                <NavLink className="dropdown-item" to="/myprofile">My profile</NavLink>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
                            </NavDropdown> : <NavLink className="nav-link" to="/login">Login</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;