describe('License plate store home page', () => {

    it('displays the right main title', () => {
        cy.visit('http://store.angulartraining.com');
        cy.contains('Welcome to our store')
            .should('be.visible')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-size', '72px')
            .should('have.css', 'font-family') // yields 'sans-serif'
            .and('match', /Segoe UI/) // yields 'sans-serif'

    });
});
