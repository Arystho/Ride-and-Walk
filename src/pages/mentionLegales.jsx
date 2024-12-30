import { useEffect } from "react";
import '../styles/mentionLegales.css';
import Footer from "../components/footer";
import Header from "../components/header";

export default function MentionLegales() {
    useEffect(() => {
        // Supprimer TOUTES les classes qui se trouvent sur le body
        document.querySelector('body').removeAttribute('class');

        // Ajouter la classe adequate sur le body
        document.querySelector('body').classList.add('mentionlegales');
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
                                <h2>Mentions légales</h2>
                            </div>
                            <div>
                                <p>Le site web Ride & Walk est la propriété de Jordan BLIN
                                    Tel. : 0625134913
                                    Adresse : 46 Grand rue, Nans-les-pins 83860
                                    Email : jordanblin-83470@hotmail.com
                                    Responsable de la publication : Jordan BLIN
                                    Capital social : Auto-entrepreneur (pas de capital social)</p>
                            </div>
                            <div>
                                <h3>
                                    Modifications</h3>
                                <p>En accédant et en naviguant sur ce site, l'utilisateur est informé de ses droits et obligations et accepte pleinement de se conformer aux présentes conditions d'utilisations du site. L'éditeur du site se réserve la possibilité de modifier ces conditions. Il appartient à l'utilisateur de vérifier périodiquement le contenu des documents concernés. L'éditeur se réserve la possibilité de supprimer ou de modifier en tout ou partie le « site ».
                                </p>
                            </div>
                            <div>
                                <h3>Responsabilités de Ride & Walk</h3>
                                <p>L'éditeur du site Ride & Walk met tout en œuvre pour assurer l'exactitude et la mise à jour de l'ensemble des informations fournies sur son site. Il ne peut garantir que les informations contenues sur le site soient complètes, précises, exactes, exhaustives et dépourvues de toute erreur.
                                    Ride & Walk s'engage, dès qu'un utilisateur quelconque transmet toute erreur constatée aux coordonnées ci-dessus, à procéder à la correction dans les plus brefs délais.
                                </p>
                            </div>
                            <div>
                                <h3>Accessibilité</h3>
                                <p>Le site est par principe accessible aux utilisateurs 24/24h et 7/7j, sauf interruption, programmée ou non, pour des besoins de maintenance ou en cas de force majeure.
                                    En cas d'indisponibilité d'accès au site, celui-ci s'engage à faire son maximum afin de rétablir l'accès. Le site ne saurait être tenu pour responsable de tout dommage, quelle qu'en soit la nature, résultant de son indisponibilité.
                                </p>
                            </div>
                            <div>
                                <h3>Collecte de données et Loi Informatiques et Libertés</h3>
                                <p>En conformité avec la loi du 6 janvier 1978 relative à l'informatique, aux fichiers, aux libertés, et au Règlement Général sur la Protection des Données (RGPD), le traitement des données personnelles réalisé à partir du site Internet Ride & Walk fait l'objet d'une déclaration de conformité aux règles de protection des données.
                                    Conformément à la loi n° 78-17 du 6 janvier 1978 et au RGPD, l'utilisateur peut à tout moment accéder aux informations personnelles le concernant détenues par Ride & Walk, demander leur modification ou leur suppression. Ainsi, selon les articles 36, 39 et 40 de la loi Informatique et Libertés, l'utilisateur peut demander que soient rectifiées, complétées, clarifiées, mises à jour ou effacées les informations le concernant qui sont inexactes, incomplètes, équivoques, périmées ou dont la collecte ou l'utilisation, la communication ou la conservation sont interdites.
                                    Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, veuillez-vous adresser :
                                    par courrier à : 46 Grand rue, Nans-les-pins 83860
                                    par email à : jordanblin-83470@hotmail.com
                                    Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant. Nous nous engageons à prendre toutes précautions afin de préserver la sécurité de ces informations et notamment empêcher qu'elles ne soient déformées, endommagées ou communiquées à des tiers.
                                    À la clôture du compte et à toutes fins de preuve, des données concernant l'utilisateur peuvent être conservées et archivées confidentiellement par Ride & Walk selon les lois en vigueur.
                                    Afin d'améliorer la qualité de son service et de mieux répondre aux attentes de ses utilisateurs, Ride & Walk pourra être amené à collecter des données nominatives sur l'utilisateur, notamment par l'utilisation de marqueurs (cookies).
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