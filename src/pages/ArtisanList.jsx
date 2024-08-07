import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StarRating from '../components/StarRating';
import './ArtisanList.scss';
import artisansData from '../data/datas.json';
import { SearchContext } from '../components/SearchContex';

const ArtisanList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const [filteredArtisans, setFilteredArtisans] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        const search = queryParams.get('search');
        let filtered = artisansData;

        if (search) {
            filtered = filtered.filter(artisan =>
                artisan.name.toLowerCase().includes(search.toLowerCase()) ||
                artisan.category.toLowerCase().includes(search.toLowerCase())
            );
            setSearchTerm(search);
        } else if (category) {
            filtered = filtered.filter(artisan =>
                artisan.category.toLowerCase() === category.toLowerCase()
            );
        }

        setFilteredArtisans(filtered);
    }, [location.search, setSearchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/artisanlist?search=${searchTerm}`);
    };

    const handleArtisanClick = (id) => {
        navigate(`/artisan/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className="artisan-list-page">
            <div className="search-section" style={{ backgroundColor: '#0074C7' }}>
                <h1>Recherche</h1>
                <div className="search-bar-container">
                    <p>Rechercher par mot clé ou catégorie</p>
                    <div className="search-bar">
                        <form onSubmit={handleSearchSubmit} className="search-form">
                            <input
                                type="text"
                                placeholder="Recherche..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="search-input"
                            />
                            <button type="submit" className="search-button">
                                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="artisan-list-section">
                <h2>Liste des artisans :</h2>
                <p>Nombre d'artisans trouvés : {filteredArtisans.length}</p>
                <div className="artisan-cards">
                    {filteredArtisans.map(artisan => (
                        <div
                            key={artisan.id}
                            className="artisan-card"
                            onClick={() => handleArtisanClick(artisan.id)}
                        >
                            <h3>{artisan.name}</h3>
                            <StarRating rating={parseFloat(artisan.note)} />
                            <p>{artisan.specialty}</p>
                            <p>{artisan.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtisanList;
