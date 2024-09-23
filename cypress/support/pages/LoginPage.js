import navbar from "./components/NavBar";

class LoginPage {

    constructor(){
        this.navbar = navbar
    }

    visit(){
        cy.visit('https://front.serverest.dev/login')
        cy.url().should('eq', 'https://front.serverest.dev/login')
    }

    pageShouldBeVisible(text){
        cy.get('.form h1')
        .should('be.visible')
        .should('have.text', text)
    }

    fillForm(user){
        cy.get('[data-testid="email"]').type(user.email)
        cy.get('[data-testid="senha"]').type(user.senha)
    }

    submitData(){
        cy.get('[data-testid="entrar"]').click()
    }

    invalidCredentialsAlert(text){
        cy.get('.alert-secondary span').eq(1)
        .should('be.visible')
        .should('have.text', text)
    }

}
export default new LoginPage()