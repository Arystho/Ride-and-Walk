import React from 'react';
import '../styles/connection.css';
import { Link } from 'react-router-dom';

export default function Connection () {
    return (
        <main className="main-connection">
        <section className="background-connection">
            <article className="login-container">
                <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo"/>
                <h2>Connexion</h2>
                <form>
                    <div>
                        <p>Email</p>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                    </div>
                    <div>
                        <p>Mot de passe</p>
                        <input type="password" id="password" name="password" placeholder="Mot de passe"/>
                    </div>
                    <div>
                        <button type="submit">Connexion</button>
                    </div>
                </form>
                <p>Vous n'avez pas de compte ?</p>
                <Link to="#">Inscrivez-vous gratuitement</Link>
            </article>
        </section>
    </main>
    );
};