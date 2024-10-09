import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MotDePasseOublier from '../../pages/motDePassOublier';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));

test('MotDePassOublier renders without crashing', () => {
    render(
        <Router>
            <MotDePasseOublier />
        </Router>
    );
    expect(screen.getByText('Mot de passe oublié')).toBeInTheDocument();
});

//     test('submits form with email and navigates on success', async () => {
//         global.fetch.mockResolvedValueOnce({
//             ok: true,
//             json: () => Promise.resolve({ status: 'success' }),
//         });

//         render(
//             <BrowserRouter>
//                 <MotDePasseOublier />
//             </BrowserRouter>
//         );

//         fireEvent.change(screen.getByPlaceholderText('Votre adresse e-mail'), {
//             target: { value: 'test@example.com' },
//         });
//         fireEvent.click(screen.getByText('Réinitialiser le mot de passe'));

//         await waitFor(() => {
//             expect(global.fetch).toHaveBeenCalledWith('/api/reset-password', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email: 'test@example.com' }),
//             });
//             expect(mockNavigate).toHaveBeenCalledWith('/validateEmail');
//         });
//     });

//     test('handles error when form submission fails', async () => {
//         const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
//         global.fetch.mockRejectedValueOnce(new Error('API Error'));

//         render(
//             <BrowserRouter>
//                 <MotDePasseOublier />
//             </BrowserRouter>
//         );

//         fireEvent.change(screen.getByPlaceholderText('Votre adresse e-mail'), {
//             target: { value: 'test@example.com' },
//         });
//         fireEvent.click(screen.getByText('Réinitialiser le mot de passe'));

//         await waitFor(() => {
//             expect(consoleErrorSpy).toHaveBeenCalledWith(
//                 'Erreur lors de la réinitialisation du mot de passe:',
//                 expect.any(Error)
//             );
//         });

//         consoleErrorSpy.mockRestore();
//     });
// });