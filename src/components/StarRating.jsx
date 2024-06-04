import React from 'react';
import './StarRating.scss';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="star-rating">
            {Array(fullStars).fill(<span className="star full">★</span>)}
            {halfStar && <span className="star half">★</span>}
            {Array(emptyStars).fill(<span className="star empty">★</span>)}
        </div>
    );
};

export default StarRating;
