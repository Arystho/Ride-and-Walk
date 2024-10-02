import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png';

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" id="logo" />
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/activities">Activités</Link></li>
                        <li><Link to="/discussions">Discussions</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
                <Link to="/login" id="connect">Se connecter</Link>
            </div>
        </header>
    );
}
