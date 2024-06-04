import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import StarRating from '../components/StarRating';
import './Home.scss';
import datas from '../data/datas.json';

const Home = () => {
    const [topArtisans, setTopArtisans] = useState([]);

    useEffect(() => {
        // Filtrer top artisans
        const filteredArtisans = datas.filter(artisan => artisan.top === true);
        setTopArtisans(filteredArtisans);
    }, []);

    return (
        <div className="home">
            <section className="steps-section py-5">
                <Container>
                    <h1 className="text-center mb-4">Comment trouver mon artisan ?</h1>
                    <Row>
                        <Col xs={12} md={6} className="mb-4">
                            <Card className="step-card">
                                <Card.Body>
                                    <Card.Title className="step-title">1. Choisir la catégorie d’artisanat dans le menu:</Card.Title>
                                    <Card.Text>
                                        Utilisez le menu de navigation pour sélectionner la catégorie qui correspond 
                                        à votre besoin (Bâtiment, Services, Fabrication ou Alimentation).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} md={6} className="mb-4">
                            <Card className="step-card">
                                <Card.Body>
                                    <Card.Title className="step-title">2. Choisir un artisan:</Card.Title>
                                    <Card.Text>
                                        Parcourez la liste des artisans disponibles dans la catégorie 
                                        choisie et sélectionnez celui qui répond à vos attentes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={6} className="mb-4">
                            <Card className="step-card">
                                <Card.Body>
                                    <Card.Title className="step-title">3. Contacter l'artisan via le formulaire:</Card.Title>
                                    <Card.Text>
                                        Remplissez le formulaire de contact présent sur la page de l’artisan 
                                        pour envoyer votre demande de renseignements, de prestations ou de tarifs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} md={6} className="mb-4">
                            <Card className="step-card">
                                <Card.Body>
                                    <Card.Title className="step-title">4. Une réponse sera apportée sous 48h:</Card.Title>
                                    <Card.Text>
                                        L’artisan vous répondra dans un délai de 48 heures pour traiter votre demande 
                                        et vous fournir les informations nécessaires.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="artisans-section py-5">
                <Container>
                    <h2 className="text-center mb-4">Artisans du mois</h2>
                    <Row>
                        {topArtisans.map((artisan) => (
                            <Col xs={12} md={6} lg={4} key={artisan.id} className="mb-4">
                                <Card className="artisan-card">
                                    <Card.Body>
                                        <Card.Title>{artisan.name}</Card.Title>
                                        <StarRating rating={parseFloat(artisan.note)} />
                                        <Card.Text>
                                            <span className="specialty"><strong>Spécialité:</strong> {artisan.specialty}</span>
                                            <br />
                                            <span className="location"><strong>Localisation:</strong> {artisan.location}</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;
