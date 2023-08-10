describe('Checkout features', () => {

    beforeEach(() => {
        cy.intercept('/rates', {EUR: 1.5, GBP: 2}).as('rates');
        cy.intercept('/data', {fixture: 'plates.json'}).as('plates');
        cy.intercept('POST', '/checkout', {result: 'OK'}).as('checkout');
        cy.visit('/');
    });

    it('hides the submit button as long as the checkout form is invalid', () => {
        // TODO: Navigate to the checkout page and check that the submit button is not showing up
        cy.contains("Checkout").click();
        cy.get(`Submit`).should('not.exist');
        //  TODO: Enter a first name, last name, and check that the submit button is still not showing up
        cy.get("[name='firstname']").type('Mitchy');
        cy.get("[name='lastname']").type('Scobelli');
        cy.get(`Submit`).should('not.exist');
        // TODO: Enter a 5-digit zipcode and a 16-digit number that starts with 4 as a credit card number
        //  TODO Then check that the submit button is showing up
        cy.get("[name='zip']").type(53718);
        cy.get("[name='cc']").type(1234567812345678);
        cy.get(`[type='submit']`).should('be.visible');

    });

    it('displays an error message when an invalid zipcode is entered', () => {
        // TODO: Navigate to the checkout page and enter 123 as a zipcode then remove focus from that input (blur)
        cy.contains("Checkout").click();
        cy.get(`Submit`).should('not.exist');
        cy.get("[name='zip']").type(123).blur();
        // TODO:  Check that the ng-invalid css class is applied to the zipcode form input
        cy.get("[name='zip']").should('have.class', 'ng-invalid');
        // TODO: Check that the message 'Please enter a 5-digit zipcode' is displayed
        cy.contains('Please enter a 5-digit zipcode');
        // TODO: Enter 12345 as a zipcode  then remove focus from that input (blur)
        cy.get("[name='zip']").click();
        cy.get("[name='zip']").type('{selectAll}12345').blur();
        // TODO: Check that the message 'Please enter a 5-digit zipcode' is NOT displayed anymore
        cy.get('Please enter a 5-digit zipcode').should('not.exist');
        // TODO:  Check that the ng-valid css class is applied to the zipcode form input
        cy.get("[name='zip']").should('have.class', 'ng-valid');
    });

    it('makes a request to the server upon form submission', () => {
        // TODO: Navigate to the checkout page and fill out the form with data
        cy.contains("Checkout").click();
        cy.get(`Submit`).should('not.exist');
        cy.get("[name='firstname']").type('Mitchy');
        cy.get("[name='lastname']").type('Scobelli');
        cy.get("[name='zip']").type(53718);
        cy.get("[name='cc']").type(1234567812345678);
        cy.get(`[type='submit']`).should('be.visible');
        // TODO: Click the submit button and make sure that a HTTP POST request to /checkout was made and that the response was successful
        cy.contains('Submit').click();
        cy.wait('@checkout').its('response.body').should('deep.equal', {result: 'OK'});
    });

});
