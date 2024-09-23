class NavBar {
    verifyUserLoggedIn(){
        cy.get('button[data-testid="logout"]', {timeout: 10000})
        .should('be.visible')
    }
}
export default new NavBar()