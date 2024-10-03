import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                <img id="logo" src="img/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo"/>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/activities">Activités</Link></li>
                        <li><Link to="/discussions">Discussions</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
                <Link to="/connection" id="connect">Se connecter</Link>
            </div>
        </header>
    );
}
