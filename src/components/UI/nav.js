import { Link } from 'react-router-dom';

import './nav.css';
export const Nav = () => {
    return (
        <div>
            <header className="header-continer">
                <Link to='/Home' className="nav-link">Home</Link>
                <Link to='/categoty/Tourism' className="nav-link">Tourism</Link>
                <Link to='/categoty/Fitness' className="nav-link">Fitness</Link>
                <Link to='/categoty/Technology' className="nav-link">Technology</Link>
                <Link to='/categoty/Bollywood' className="nav-link">Bollywood</Link>
                <Link to='/categoty/Food' className="nav-link">Food</Link>
            </header>
        </div>
    )
}