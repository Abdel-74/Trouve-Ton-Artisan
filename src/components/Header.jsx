import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
    return (
        <Navbar expand="lg" className="header-navbar">
            <div className="d-flex w-100 justify-content-between align-items-center flex-wrap">
                <Navbar.Brand href="#home" className="logo-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Logo.png`}
                        className="logo"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <div className="menu-toggle-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="menu-text d-lg-none">Menu</div>
                </div>
            </div>

            <Navbar.Collapse id="basic-navbar-nav" className="menu-collapse">
                <Nav className="mr-auto w-100">
                    <ul className="navbar-nav w-100 d-flex justify-content-around flex-column flex-lg-row">
                        <li className="nav-item">
                            <a className="nav-link" href="#batiment">Bâtiment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#fabrication">Fabrication</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#alimentation">Alimentation</a>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
            
            <Form inline className="search-form mt-3 mt-lg-0 d-flex w-50 justify-content-between align-items-center mx-auto">
                <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </Form>
        </Navbar>
    );
};

export default Header;
