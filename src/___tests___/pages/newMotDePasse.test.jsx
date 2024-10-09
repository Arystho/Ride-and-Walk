import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NewMotDePasse from '../../pages/newMotDePasse';

// Mock de useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('NewMotDePasse', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <NewMotDePasse />
            </BrowserRouter>
        );
    });

    test('renders NewMotDePasse component', () => {
        expect(screen.getByText('Réinitialiser votre mot de passe')).toBeInTheDocument();
        expect(screen.getByTestId('password-input')).toBeInTheDocument();
        expect(screen.getByTestId('password-confirm-input')).toBeInTheDocument();
        expect(screen.getByText("S'inscrire")).toBeInTheDocument();
    });

    // test('inputs are working correctly', () => {
    //     const passwordInput = screen.getByTestId('password-input');
    //     const passwordConfirmInput = screen.getByTestId('password-confirm-input');

    //     fireEvent.change(passwordInput, { target: { value: 'password123' } });
    //     fireEvent.change(passwordConfirmInput, { target: { value: 'password123' } });

    //     expect(passwordInput.value).toBe('password123');
    //     expect(passwordConfirmInput.value).toBe('password123');
    // });

    // test('form submission works correctly', async () => {
    //     global.fetch = jest.fn(() =>
    //         Promise.resolve({
    //             ok: true,
    //             json: () => Promise.resolve({ status: 'success' }),
    //         })
    //     );

    //     const passwordInput = screen.getByTestId('password-input');
    //     const passwordConfirmInput = screen.getByTestId('password-confirm-input');
    //     const submitButton = screen.getByText("S'inscrire");

    //     fireEvent.change(passwordInput, { target: { value: 'password123' } });
    //     fireEvent.change(passwordConfirmInput, { target: { value: 'password123' } });
    //     fireEvent.click(submitButton);

    //     expect(global.fetch).toHaveBeenCalledWith('/api/reset-password', expect.any(Object));
    //     expect(mockedUsedNavigate).toHaveBeenCalledWith('/validatePassword');
    // });

    // test('error handling works correctly', async () => {
    //     const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

    //     global.fetch = jest.fn(() =>
    //         Promise.reject(new Error('Une erreur est survenue'))
    //     );

    //     const passwordInput = screen.getByTestId('password-input');
    //     const passwordConfirmInput = screen.getByTestId('password-confirm-input');
    //     const submitButton = screen.getByText("S'inscrire");

    //     fireEvent.change(passwordInput, { target: { value: 'password123' } });
    //     fireEvent.change(passwordConfirmInput, { target: { value: 'password123' } });
    //     fireEvent.click(submitButton);

    //     expect(global.fetch).toHaveBeenCalledWith('/api/reset-password', expect.any(Object));
    //     expect(consoleErrorSpy).toHaveBeenCalledWith('Erreur lors de la réinitialisation du mot de passe:', expect.any(Error));

    //     consoleErrorSpy.mockRestore();
    // });
});