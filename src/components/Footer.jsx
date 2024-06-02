import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} lg={6} className="footer-pages d-flex align-items-center">
                        <div className="footer-links">
                            <a href="#mentions">Mentions légales</a>
                            <a href="#donnees">Données personnelles</a>
                        </div>
                        <div className="footer-links">
                            <a href="#accessibilite">Accessibilité</a>
                            <a href="#cookies">Gestion des cookies</a>
                        </div>
                    </Col>

                    <Col xs={12} lg={6} className="footer-contact d-flex align-items-center">
                        <div className="footer-address">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                            <p>101 cours Charlemagne CS 20033 <br/> 69269 LYON CEDEX 02 <br/> France</p>
                        </div>
                        <div className="footer-phone">
                            <FontAwesomeIcon icon={faPhoneAlt} className="footer-icon" />
                            <p>+33 (0)4 26 73 40 00</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
