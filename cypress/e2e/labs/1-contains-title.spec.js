describe('License plate store home page', () => {

    /*
    1) The text "Welcome to our store" is visible
    2) Its font weight is 300 and font size is 72px
    3) a tough one: Its font family should match Segoe UI
    */

    it('displays the right main title', () => {
        cy.visit('http://store.angulartraining.com');
        cy.contains('Welcome to our store')
            .should('be.visible')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-size', '72px')
            .should('have.css', 'font-family')
            .and('match', /Segoe UI/)

    });
});
