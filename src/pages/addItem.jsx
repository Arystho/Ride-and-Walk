import { useEffect } from 'react';
import '../styles/addItem.css';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export default function AddItem() {
    useEffect(() => {
        // Supprimer TOUTES les classes qui se trouvent sur le body
        document.querySelector('body').removeAttribute('class');

        // Ajouter la classe adequate sur le body
        document.querySelector('body').classList.add('additem');
    });



    return (
        <>
            <Header />
            <main>
                <Link to="#" className="back-link">← Prev</Link>
                <div className="content">
                    <div className="upload-section">
                        <h2>Upload photos</h2>
                        <div className="upload-area">
                            <img src="/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'%3E%3C/path%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'%3E%3C/path%3E%3C/svg%3E" alt="Camera icon"/>
                                <p>Add photos</p>
                                <p>or Drag & Drop</p>
                        </div>
                        <div className="thumbnail-grid">
                            <div className="thumbnail"></div>
                            <div className="thumbnail"></div>
                            <div className="thumbnail"></div>
                            <div className="thumbnail"></div>
                        </div>
                    </div>
                    <div className="form-section">
                        <h2>Share a location</h2>
                        <form>
                            <div>
                                <label htmlFor="location-name">Location name</label>
                                <input type="text" id="location-name" name="location-name" required />
                            </div>
                            <div>
                                <label htmlFor="estimated-distance">Estimated distance</label>
                                <input type="text" id="estimated-distance" name="estimated-distance" />
                            </div>
                            <div>
                                <label htmlFor="location-description">Location description</label>
                                <textarea id="location-description" name="location-description" rows="4"></textarea>
                            </div>
                            <div>
                                <label htmlFor="activity">Activity</label>
                                <select id="activity" name="activity">
                                    <option value="">Select an activity</option>
                                    <option value="rollerblading">Rollerblading</option>
                                    <option value="skateboarding">Skateboarding</option>
                                    <option value="longboarding">Longboarding</option>
                                    <option value="cycling">Cycling</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="recreational">Recreational</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="accessibility">Accessibility</label>
                                <select id="accessibility" name="accessibility">
                                    <option value="">Select accessibility</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                </select>
                            </div>
                            <button type="submit">Submit now</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};

