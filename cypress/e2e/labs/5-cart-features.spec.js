describe('Cart features', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('get an appropriate message on the cart page when cart is empty', () => {
        // TODO: Navigate to the cart page and check that a message saying "Your cart is empty" shows up
        cy.contains("My cart").click();
        cy.get('.alert').contains('Your cart is empty').should('be.visible');
    });

    it('can add a plate to the cart', () => {
        // TODO: On the home page click on the "Add to cart" button of the California license plate
        cy.contains("Home").click();
        cy.get(':nth-child(3) > div > .btn').click();
        // TODO: Then navigate to the cart page, make sure that the "empty cart"  message is not displayed anymore
        cy.contains("My cart").click();
        cy.get(`app-license-plate`).contains('2013 California My Tahoe license plate').should('be.visible');
        // TODO: Make sure that the California license plate shows up on that page, and that its button now reads "Remove from cart"
        cy.get('app-license-plate').get('.btn').contains('Remove from cart').should('be.visible');
    });

    it('can remove a plate from the cart', () => {
        // TODO: On the home page click on the "Add to cart" button of the California license plate
        cy.contains("Home").click();
        cy.get(':nth-child(3) > div > .btn').click();
       // TODO: Go to the cart page and  click the "Remove from cart" button of the California license plate
       cy.contains("My cart").click();
       cy.get(`app-license-plate`).contains('2013 California My Tahoe license plate').should('be.visible');
       cy.get('app-license-plate').get('.btn').contains('Remove from cart').should('be.visible');
       cy.get('app-license-plate').get('.btn').contains('Remove from cart').click();
       // TODO: Make sure the license plate is gone from the cart (it does not show up anymore)
       cy.get(`app-license-plate`).should('not.exist');
       // TODO: Check that the message saying "Your cart is empty" shows up again
       cy.get('.alert').contains('Your cart is empty').should('be.visible');
    });

});
