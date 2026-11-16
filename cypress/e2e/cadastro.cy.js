///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade de Cadastro', () => {


    beforeEach(() => {
        cy.visit('register.html')
    })

    it('Cadastrar usuário com sucesso usando função', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Lucas Lopes')
        cy.get('#email').type(email)
        cy.get('#phone').type('1234567890')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')

    });

    it('Cadastrar usuário com sucesso usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('1234567890')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)

    });

})