///<reference types="cypress" />

describe('Funcionalidade de Contato', () => {


  beforeEach(() => {
    cy.visit('index.html')
  })

  it('Preencher formulário de contato com sucesso', () => {

    cy.get('[name="name"]').type('Lucas Lopes')
    cy.get('[name="email"]').type('lucas.lopes@example.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste.')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('be.visible')
  });

  it('Preencher formulário sem informar nome', () => {

    cy.get('[name="email"]').type('lucas.lopes@example.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste.')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
  });

  it('Preencher formulário sem informar e-mail', () => {

    cy.get('[name="name"]').type('Lucas Lopes')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste.')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Preencher formulário sem informar assunto', () => {

    cy.get('[name="name"]').type('Lucas Lopes')
    cy.get('[name="email"]').type('lucas.lopes@example.com')
    cy.get('[name="message"]').type('Mensagem de teste.')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });

  it('Preencher formulário sem informar mensagem', () => {

    cy.get('[name="name"]').type('Lucas Lopes')
    cy.get('[name="email"]').type('lucas.lopes@example.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  });

})