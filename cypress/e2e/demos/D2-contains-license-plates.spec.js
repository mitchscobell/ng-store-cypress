describe('License plate store home page', () => {

    // beforeEach is for something that needs to be done for all tests.
    //          This is helpful for logging on
    beforeEach(() => {
        // uses basesUrl config
        cy.visit('/');
    });

    it('displays the right main title', () => {
        cy.contains('Welcome to our store')
            .should('be.visible')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-size', '72px')
            .and('have.css', 'font-family').and('match', /Segoe UI/);
    });

    it('displays 8 license plates', () => {
        //cy.get('app-license-plate').should('have.length', 8);
        // can pass in a timeout as part of a config
        const config = {
            timeout: 10000
        }
        cy.get('app-license-plate', config).should('have.length', 8);
    });
});
