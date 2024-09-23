import navbar from "./components/NavBar";

class RegisterPage {

    constructor(){
        this.navbar = navbar
    }

    visit(){
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        cy.url().should('eq', 'https://front.serverest.dev/cadastrarusuarios')
    }

    pageShouldBeVisible(text){
    cy.get('.form h2')
      .should('be.visible')
      .should('have.text', text)
    }

    fillForm(user){
        cy.get('[data-testid="nome"]').type(user.nome)
        cy.get('[data-testid="email"]').type(user.email)
        cy.get('[data-testid="password"]').type(user.senha)
    }

    submitData(){
        cy.get('[data-testid="cadastrar"]').click()
    }

    successfulRegistrationAlert(text){
        cy.get('.alert-dismissible a.alert-link')
        .should('be.visible')
        .should('have.text', text)
    }

}
export default new RegisterPage()