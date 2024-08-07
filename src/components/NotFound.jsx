import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <img src={`${process.env.PUBLIC_URL}/images/404-error.png`} alt="404" className="not-found-image" />
            <p>404 - Page not found</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
};

export default NotFound;
