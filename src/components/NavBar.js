import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../context/CurrentUserContext";


const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedInIcons = <>
        {currentUser?.username}
        <NavDropdown className={styles.NavLink} activeClassName={styles.Active} title="Categories" id="basic-nav-dropdown">
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/uncategorized">Uncategorized</NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/nature">Nature</NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/adventure">Adventure</NavLink>
                        
                        </NavDropdown>
    
    </>
    
    const loggedOutIcons = <> <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active} to="/signin">
    <i className="fas fa-sign-in-alt"></i>Sign in
</NavLink>
<NavLink
    exact
    className={styles.NavLink}
    activeClassName={styles.Active} to="/signup">
    <i className="fas fa-user-plus"></i>Sign up
</NavLink></>
    
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active} to="/">
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        
                        {currentUser ? loggedInIcons : loggedOutIcons }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;