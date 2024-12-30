import { useEffect } from 'react';
import '../styles/motDePasseOublier.css';
import { Link, useNavigate } from 'react-router-dom';

export default function MotDePasseOublier() {
    useEffect(() => {
        // Supprimer TOUTES les classes qui se trouvent sur le body
        document.querySelector('body').removeAttribute('class');

        // Ajouter la classe adequate sur le body
        document.querySelector('body').classList.add('motDePasseOublier');
    });
    const navigate = useNavigate();
    const handleForm = async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Une erreur est survenue');
            }

            const data = await response.json();

            if (data.status === 'success') {
                navigate('/validateEmail');
            }
        } catch (error) {
            console.error('Erreur lors de la réinitialisation du mot de passe:', error);
        }
    };

    return (
    <main id="mot-de-passe-oublie">
        <div className="background-mdp-oublie">
            <div className="mdp-oublie-container">
                <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo" />
                <h2>Mot de passe oublié</h2>
                <p>Entrez votre adresse e-mail pour recevoir les instructions de réinitialisation de votre mot de passe.</p>
                <form>
                    <div>
                        <p>Email</p>
                        <input type="email" id="email" name="email" placeholder="Votre adresse e-mail" />
                    </div>
                    <div>
                        <button onClick={handleForm} type="submit">Réinitialiser le mot de passe</button>
                    </div>
                </form>
                <p>Vous vous souvenez de votre mot de passe ?</p>
                <Link to="/connection">Retour à la connexion</Link>
            </div>
        </div>
    </main>
    );
}
