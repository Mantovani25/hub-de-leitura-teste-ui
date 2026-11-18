///<reference types="cypress" />
import user from '../fixtures/usuario.json'


describe('Funcionalidade de Login', () => {


    beforeEach(() => {
        cy.visit('login.html')
    })

    it('Login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')

    });

    it('Login com sucesso usando comando customizado', () => {
        cy.login('usuario@teste.com', 'user123')

    });

    it('Login com sucesso usando comando customizado usuário admin', () => {
        cy.login('admin@biblioteca.com', 'admin123')

    });

    it('Login com sucesso usando importação de massa de dados', () => {
        cy.login(user.email, user.senha)

    });

})