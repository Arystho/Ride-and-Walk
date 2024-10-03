import React from 'react';
import '../styles/accueil.css';
import Header from '../components/header';
import Footer from '../components/footer';


export default function Accueil() {
    return (
        <>
            <Header />
            <main>
                <section id="section-1">
                    <article className="background-container">
                        <div className="background-overlay">
                            <div className="container">
                                <h1>Ride & Walk</h1>
                                <h2>Trouver votre spot idéal</h2>
                            </div>
                            <div className="nav-container">
                                <nav>
                                    <div>
                                        <p>Catégorie</p>
                                        <label type="checkbox">Catégorie</label>
                                    </div>
                                    <div>
                                        <p>Type d'activité</p>
                                        <label type="checkbox">Type d'activité</label>
                                    </div>
                                    <div>
                                        <p>Localisation</p>
                                        <label type="checkbox">Localisation</label>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}