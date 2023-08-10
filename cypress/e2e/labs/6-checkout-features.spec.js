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
        
        cy.get(`Submit`).should('not.exist');
        // TODO: Enter a 5-digit zipcode and a 16-digit number that starts with 4 as a credit card number
        //  TODO Then check that the submit button is showing up
    });

    it('displays an error message when an invalid zipcode is entered', () => {
        // TODO: Navigate to the checkout page and enter 123 as a zipcode then remove focus from that input (blur)
        // TODO:  Check that the ng-invalid css class is applied to the zipcode form input
        // TODO: Check that the message 'Please enter a 5-digit zipcode' is displayed
        // TODO: Enter 12345 as a  zipcode  then remove focus from that input (blur)
        // TODO: Check that the message 'Please enter a 5-digit zipcode' is NOT displayed anymore
        // TODO:  Check that the ng-valid css class is applied to the zipcode form input
    });

    it('makes a request to the server upon form submission', () => {
        // TODO: Navigate to the checkout page and fill out the form with data
        // TODO: Click the submit button and make sure that a HTTP POST request to /checkout was made and that the response was successful
    });

});
