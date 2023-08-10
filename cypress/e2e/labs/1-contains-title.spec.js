describe('License plate store home page', () => {

    it('displays the right main title', () => {
        cy.visit('http://store.angulartraining.com');
        cy.contains('Welcome to our store')
            .should('be.visible')
            .should('have.css', 'font-weight', '300');

    });
});
