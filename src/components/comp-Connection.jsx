import React from 'react';
import './styles/connection.css';
import styles from './Login.module.css';
import logo from './img/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png';

export const Login = () => {
    return (
        <main className={styles.main}>
            <div className={styles.backgroundConnection}>
                <div className={styles.loginContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
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
                    <a href="#">Inscrivez-vous gratuitement</a>
                </div>
            </div>
        </main>
    );
};