import { useEffect } from 'react';
import '../styles/connection.css';
import { Link } from 'react-router-dom';

export default function Connection() {
    useEffect(() => {
        // Supprimer TOUTES les classes qui se trouvent sur le body
        document.querySelector('body').removeAttribute('class');

        // Ajouter la classe adequate sur le body
        document.querySelector('body').classList.add('connection');

    });
    return (
        <main className="main-connection">
            <section className="background-connection">
                <article className="login-container">
                    <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo" />
                    <h2>Connexion</h2>
                    <form>
                        <div>
                            <p>Email</p>
                            <input type="email" className="barre" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <p>Mot de passe</p>
                            <input type="password" className="barre" name="password" placeholder="Mot de passe" />
                        </div>
                        <div id="checkbox-container">
                            <div id='checkbox'>
                                <input type="checkbox" id="rememberMe" name="rememberMe" />
                                <label htmlFor="rememberMe" id='checkbox-label'>Se souvenir de moi</label>
                            </div>
                            <Link to="/motDePasseOublie" className="forgot">Mot de passe oublié ?</Link>
                        </div>
                        <div>
                            <button type="submit">Connexion</button>
                        </div>
                    </form>
                    <p>Vous n'avez pas de compte ?</p>
                    <Link to="/inscription">Inscrivez-vous gratuitement</Link>
                </article>
            </section>
        </main>
    );
};