import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import artisansData from '../data/datas.json';
import './ArtisanDetails.scss';

const ArtisanDetails = () => {
    const { id } = useParams();
    const artisan = artisansData.find(a => a.id === id);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    if (!artisan) {
        return <div>Artisan non trouvé</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setConfirmationMessage('Votre message a été envoyé avec succès!');

        // Réinitialiser les champs du formulaire
        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="artisan-details-page">
            <h1>Fiche artisan</h1>
            <div className="details-container">
                <div className="details">
                    <p className="artisan-name">{artisan.name}</p>
                    <StarRating rating={parseFloat(artisan.note)} />
                    <p><strong>Spécialité:</strong> {artisan.specialty}</p>
                    <p><strong>Localisation:</strong> {artisan.location}</p>
                    <p><strong>A propos:</strong></p>
                    <p>{artisan.about}</p>
                    {artisan.website && (
                        <p>
                            <strong>Site web:</strong> <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a>
                        </p>
                    )}
                </div>
            </div>
            
            <div className="contact-form">
                <h2>Contact</h2>
                <div className="contact-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Prénom</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Nom</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Objet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Envoyer</button>
                        {confirmationMessage && (
                            <p className="confirmation-message">{confirmationMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ArtisanDetails;
