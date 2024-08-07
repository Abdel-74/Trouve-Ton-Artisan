import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import { SearchContext } from './SearchContex';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    useEffect(() => {
        setSearchTerm('');
    }, [location.pathname, setSearchTerm]);

    const handleCategoryClick = (category) => {
        navigate(`/artisanlist?category=${category}`);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/artisanlist?search=${searchTerm}`);
        }
    };

    return (
        <Navbar expand="lg" className="header-navbar">
            <div className="d-flex w-100 justify-content-between align-items-center flex-wrap">
                <Link to="/" className="logo-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Logo.png`}
                        className="logo"
                        alt="Logo"
                    />
                </Link>
                <div className="menu-toggle-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="menu-text d-lg-none">Menu</div>
                </div>
            </div>

            <Navbar.Collapse id="basic-navbar-nav" className="menu-collapse">
                <Nav className="mr-auto w-100">
                    <ul className="navbar-nav w-100 d-flex justify-content-around flex-column flex-lg-row">
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => handleCategoryClick('bâtiment')}>Bâtiment</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => handleCategoryClick('services')}>Services</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => handleCategoryClick('fabrication')}>Fabrication</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => handleCategoryClick('alimentation')}>Alimentation</div>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
            
            <Form inline className="search-form mt-3 mt-lg-0 d-flex w-50 justify-content-between align-items-center mx-auto" onSubmit={handleSearchSubmit}>
                <FormControl
                    type="text"
                    placeholder="Recherche"
                    className="mr-sm-2"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </button>
            </Form>
        </Navbar>
    );
};

export default Header;
