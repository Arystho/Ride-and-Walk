import React from 'react';
import '../styles/connection.css';
import { Link } from 'react-router-dom';

export default function Connection () {
    return (
        <main>
            <div className="backgroundConnection">
                <img src="/img/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo"/>
                <h2>Connexion</h2>
                <form>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="password" placeholder="Mot de passe" />
                    </div>
                    <div>
                        <button type="submit">Connexion</button>
                    </div>
                </form>
                <p>Vous n'avez pas de compte ?</p>
                <Link to="#">Inscrivez-vous gratuitement</Link>
            </div>
        </main>
    );
};