///<reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade de Cadastro', () => {


    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
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


    it('Cadastrar usuário com comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({sex: 'male'})
        cy.preencherCadastro(
            nome,
            email,
            '1234567890',
            'senha123',
            'senha123'
        )
        cy.url().should('include', 'dashboard')


    });


    it('Cadastrar usuário usando page objects', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Lucas Lopes', email, '1234567890', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    })


        it.only('Cadastro sem preencher nome', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('', email, '1234567890', 'senha123', 'senha123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    })

})