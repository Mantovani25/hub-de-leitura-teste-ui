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

    it('Fazer busca de um livro por fixture', () => {
        cy.fixture('livros').then((cat) => {
            cy.get('#search-input').type(cat[2].livro)
            cy.get('.card-title > .text-dark').should('contain', cat[2].livro)
        })
    });

    it.only('Fazer busca de um livro por fixture', () => {
        cy.fixture('livros').then((cat) => {
            cat.forEach((item) => {
                cy.get('#search-input').clear().type(item.livro)
                cy.get('.card-title > .text-dark').should('contain', item.livro)
                
            })
        })
    });


});