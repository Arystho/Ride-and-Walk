import { useEffect } from 'react';
import '../styles/inscription.css';
import { Link } from 'react-router-dom';

export default function Inscription() {
    useEffect(() => {
        // Supprimer TOUTES les classes qui se trouvent sur le body
        document.querySelector('body').removeAttribute('class');

        // Ajouter la classe adequate sur le body
        document.querySelector('body').classList.add('inscription');
    });
    return (
        <main id="inscription">
            <div className="background-inscription">
                <div className="signup-container">
                    <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo" />
                    <h2>Inscription</h2>
                    <form>
                        <div>
                            <p>Nom</p>
                            <input type="text" className="input" name="nom" placeholder="Nom" />
                        </div>
                        <div>
                            <p>Prénom</p>
                            <input type="text" className="input" name="prenom" placeholder="Prénom" />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="email" className="input" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <p>Mot de passe</p>
                            <input type="password" className="input" name="password" placeholder="Mot de passe" />
                        </div>
                        <div>
                            <div id="checkbox">
                                <input id="coche" type="checkbox" height="13px" width="13px" required />
                                <label htmlFor="coche" id='checkbox-label' onClick={() => setShowTermsModal(true)}>J'accepte les <Link to="/conditionDutilisation">conditions d'utilisation !</Link></label>
                            </div>
                        </div>
                        <div>
                            <button type="submit">S'inscrire</button>
                        </div>
                    </form>
                    <div id ="forgoten">
                        <p>Vous avez déjà un compte ?</p>
                        <Link to="/connection" id='link'>Connectez-vous</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
