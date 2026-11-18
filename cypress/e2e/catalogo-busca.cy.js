///<reference types="cypress" />
import catalogoLivros from '../fixtures/livros.json'


describe('Funcionalidade busca no catálogo', () => {


    beforeEach(() => {
        cy.visit('catalog.html')
    })

    it('Fazer busca do livro 1984', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title > .text-dark').should('contain', '1984')
    });

    it('Fazer busca de um livro por massa de dados', () => {
        cy.get('#search-input').type(catalogoLivros[2].livro)
        cy.get('.card-title > .text-dark').should('contain', catalogoLivros[2].livro)
    });


})