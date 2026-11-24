class CadastroPage {

    // Seletoes

    campoNome() {return cy.get('#name')}
    campoEmail() {return cy.get('#email')}
    campoTelefone() {return cy.get('#phone')}
    campoSenha() {return cy.get('#password')}
    campoConfirmarSenha() {return cy.get('#confirm-password')}
    checkTermos() {return cy.get('#terms-agreement')}
    botaoCriarConta() {return cy.get('#register-btn')}


    // Métodos

    visitarPaginaCadastro() {
        cy.visit('register.html')
    }


    preencherCadastro(nome, email, telefone, senha, confirmarSenha) {
        if (nome)this.campoNome().type(nome)
        this.campoEmail().type(email)
        this.campoTelefone().type(telefone)
        this.campoSenha().type(senha)
        this.campoConfirmarSenha().type(confirmarSenha)
        this.checkTermos().check()
        this.botaoCriarConta().click()
        


    }






}

export default new CadastroPage()