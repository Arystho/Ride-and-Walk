import { useEffect } from "react";
import '../styles/politiqueDeConfidentialiter.css';
import Footer from "../components/footer";
import Header from "../components/header";

export default function PolitiqueDeConfidentialiter() {
    useEffect(() => {
        // Supprimer TOUTES les classes qui se trouvent sur le body
        document.querySelector('body').removeAttribute('class');

        // Ajouter la classe adequate sur le body
        document.querySelector('body').classList.add('politiqueDeConfidentialiter');
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
                                <h2>Politique de confidentialité</h2>
                            </div>
                            <div>
                                <h3> Responsable du traitement</h3>
                                <p>Responsable du traitement :
                                    Jordan BLIN
                                    46 Grand rue, Nans-les-pins 83860
                                    Email : jordanblin-83470@hotmail.com
                                    Téléphone : 0625134913
                                </p>
                            </div>
                            <div>
                                <h3>Données personnelles collectées</h3>
                                <h4>Données fournies directement par l'utilisateur</h4>
                                <p>Nom et prénom
                                    Adresse email
                                    Numéro de téléphone
                                    Adresse postale
                                </p>
                                <h4>Données collectées automatiquement</h4>
                                <p>Adresse IP
                                    Données de navigation (pages visitées, durée de la visite)
                                    Type de navigateur et système d'exploitation
                                    Cookies techniques essentiels au fonctionnement du site
                                </p>
                            </div>
                            <div>
                                <h3>Finalités du traitement</h3>
                                <p>Nous utilisons vos données personnelles pour :
                                    Gérer votre compte utilisateur
                                    Traiter vos réservations et achats
                                    Vous envoyer des confirmations de réservation
                                    Répondre à vos demandes de contact
                                    Améliorer nos services
                                    Respecter nos obligations légales
                                    Envoyer des newsletters (avec votre consentement)
                                    Personnaliser votre expérience utilisateur
                                </p>
                            </div>
                            <div>
                                <h3>Base juridique du traitement</h3>
                                <p>Nous traitons vos données sur les bases juridiques suivantes :
                                    Exécution d'un contrat (pour les réservations et achats)
                                    Consentement (pour l'envoi de newsletters)
                                    Intérêt légitime (pour l'amélioration de nos services)
                                    Obligation légale (pour la conservation des factures)
                                </p>
                            </div>
                            <div>
                                <h3>Durée de conservation</h3>
                                <p>Nous conservons vos données personnelles :
                                    Données de compte : pendant la durée de votre inscription
                                    Données de facturation : 10 ans (obligation légale)
                                    Données de navigation : 13 mois maximum
                                    Données de prospection commerciale : 3 ans après le dernier contact
                                </p>
                            </div>
                            <div>
                                <h3>Destinataires des données</h3>
                                <p>Vos données peuvent être partagées avec :
                                    Notre hébergeur web
                                    Nos prestataires de paiement sécurisé
                                    Nos sous-traitants techniques (maintenance, sécurité)
                                    Les autorités compétentes sur demande
                                    Nous ne vendons ni ne louons vos données personnelles à des tiers.
                                </p>
                            </div>
                            <div>
                                <h3>Transfert hors UE</h3>
                                <p>Les données personnelles sont hébergées dans l'Union Européenne. En cas de transfert hors UE, nous nous assurerons que le pays destinataire dispose d'une protection adéquate ou nous mettrons en place des garanties appropriées.</p>
                            </div>
                            <div>
                                <h3>Vos droits</h3>
                                <p>Conformément au RGPD, vous disposez des droits suivants :
                                    Droit d'accès à vos données
                                    Droit de rectification
                                    Droit à l'effacement ("droit à l'oubli")
                                    Droit à la limitation du traitement
                                    Droit à la portabilité des données
                                    Droit d'opposition
                                    Droit de retirer votre consentement
                                    Droit de définir des directives relatives au sort de vos données après votre décès
                                    Pour exercer ces droits, contactez-nous par :
                                    Email : jordanblin-83470@hotmail.com
                                    Courrier : 46 Grand rue, Nans-les-pins 83860
                                    Nous répondrons à votre demande dans un délai maximum d'un mois.

                                </p>
                            </div>
                            <div>
                                <h3>Cookies</h3>
                                <p>Notre site utilise des cookies essentiels au fonctionnement du site. Vous pouvez les désactiver via les paramètres de votre navigateur, mais cela pourrait affecter le fonctionnement du site.</p>
                            </div>
                            <div>
                                <h3>Sécurité</h3>
                                <p>Nous mettons en place des mesures de sécurité pour protéger vos données personnelles contre les accès non autorisés et les fuites. Cependant, aucun système n'est infaillible et nous ne pouvons garantir une sécurité absolue.</p>
                                <h4>Types de cookies utilisés</h4>
                                <p>Cookies techniques (session, panier)
                                    Cookies analytiques (mesure d'audience)
                                    Cookies fonctionnels (préférences)
                                </p>
                                <div>
                                    <h3>Modification de la politique</h3>
                                    <p>Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page avec une date de mise à jour actualisée. Nous vous invitons à consulter régulièrement cette page.</p>
                                </div>
                                <div>
                                    <h3>Réclamation</h3>
                                    <p>En cas de différend, vous pouvez introduire une réclamation auprès de la CNIL :
                                        46 grand rue, Nans-les-pins 83860
                                        Tél : 06 25 13 49 13
                                    </p>
                                </div>
                                <div>
                                    <h3>Contact</h3>
                                    <p>Pour toute question concernant cette politique de confidentialité, contactez-nous :
                                        Jordan BLIN
                                        Email : jordanblin-83470@hotmail.com
                                        Téléphone : 06 25 13 49 13
                                        Adresse : 46 Grand rue, Nans-les-pins 83860
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
};