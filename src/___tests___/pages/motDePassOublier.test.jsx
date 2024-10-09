import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MotDePasseOublier from '../../pages/motDePassOublier';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

// Mock fetch
global.fetch = jest.fn();

describe('MotDePasseOublier', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders MotDePasseOublier component', () => {
        render(
            <BrowserRouter>
                <MotDePasseOublier />
            </BrowserRouter>
        );

        expect(screen.getByText('Mot de passe oublié')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Votre adresse e-mail')).toBeInTheDocument();
        expect(screen.getByText('Réinitialiser le mot de passe')).toBeInTheDocument();
    });

    test('submits form with email and navigates on success', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ status: 'success' }),
        });

        render(
            <BrowserRouter>
                <MotDePasseOublier />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('Votre adresse e-mail'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.click(screen.getByText('Réinitialiser le mot de passe'));

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: 'test@example.com' }),
            });
            expect(mockNavigate).toHaveBeenCalledWith('/validateEmail');
        });
    });

    test('handles error when form submission fails', async () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        global.fetch.mockRejectedValueOnce(new Error('API Error'));

        render(
            <BrowserRouter>
                <MotDePasseOublier />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('Votre adresse e-mail'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.click(screen.getByText('Réinitialiser le mot de passe'));

        await waitFor(() => {
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                'Erreur lors de la réinitialisation du mot de passe:',
                expect.any(Error)
            );
        });

        consoleErrorSpy.mockRestore();
    });
});