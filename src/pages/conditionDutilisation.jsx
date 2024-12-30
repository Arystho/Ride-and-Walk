import { useEffect } from 'react';
import '../styles/conditionDutilisation.css';
import Footer from '../components/footer';
import Header from '../components/header';


export default function ConditionDutilisation() {
    useEffect(() => {
        // Supprimer TOUTES les classes qui se trouvent sur le body
        document.querySelector('body').removeAttribute('class');

        // Ajouter la classe adequate sur le body
        document.querySelector('body').classList.add('conditionDutilisation');
    });
    return (
        <>
            <Header />
            <main>
                <section id="faq-section">
                    <article id="faq-section-overlay">
                        <div className="container">
                            <div className="titles">
                                <h1>Ride & Walk</h1>
                                <h2>Conditions d'utilisation</h2>
                            </div>
                            <div>
                                <h3>Utilisation du service</h3>
                                <p>Vous conservez les droits sur le contenu que vous publiez sur Ride & Walk, mais nous vous accordons une licence pour l'utiliser sur notre plateforme.
                                    Nous collectons des données sur vos activités, y compris celles non directement liées au sport, afin d'améliorer nos services.

                                </p>
                            </div>
                            <div>
                                <h3>
                                    Responsabilité</h3>
                                <p>Ride & Walk n'est pas responsable des accidents ou blessures survenant lors de l'utilisation de notre service.
                                    Vous êtes responsable de vérifier que votre équipement est en bon état avant utilisation.
                                </p>
                            </div>
                            <div>
                                <h3>Restrictions</h3>
                                <p>N'utilisez pas Ride & Walk pour des activités illégales ou dangereuses.
                                    Ne partagez pas de contenu offensant, diffamatoire ou violant les droits d'autrui.
                                </p>
                            </div>
                            <div>
                                <h3>Puis-je modifier ou supprimer un lieu que j'ai ajouté ?</h3>
                                <p>Oui, vous pouvez modifier ou supprimer les lieux que vous avez ajoutés. Allez dans votre
                                    profil,
                                    trouvez la liste des lieux que vous avez soumis et sélectionnez l'option d'édition ou de
                                    suppression.</p>
                            </div>
                            <div>
                                <h3>Modifications</h3>
                                <p>Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les utilisateurs seront informés des changements importants.
                                    En utilisant Ride & Walk, vous acceptez de vous conformer à ces conditions d'utilisation.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}

