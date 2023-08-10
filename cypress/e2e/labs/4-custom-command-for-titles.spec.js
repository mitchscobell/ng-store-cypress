describe('License plate store home page', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    /*
        Then write a custom command that validates the page title, font size, font weight, in one place
        Then use that command in all three tests that check the current page title (home page / cart page / checkout page)
    */
    const fontWeight = '300';
    const fontSize = '72px';
    const fontName = /Segoe UI/;


    it('displays the right main title', () => {

        // home page
        cy.validateTitleAndFonts('Home', 'Welcome to our store', fontWeight, fontSize, fontName);

        // My cart page
        cy.validateTitleAndFonts('My cart', 'My Cart', fontWeight, fontSize, fontName);

        // Checkout page
        cy.validateTitleAndFonts('Checkout', 'Checkout', fontWeight, fontSize, fontName);
    });

    it('can navigate to the cart page', () => {
        cy.validateTitleAndFonts('My cart', 'My Cart');
        cy.contains('Your current cart contents').should('be.visible');
    });

    it('can navigate to the checkout page', () => {
        cy.validateTitleAndFonts('Checkout', 'Checkout');
        cy.contains('Enter your personal information to complete your order').should('be.visible');
    });

    it('displays 8 license plates', () => {
        cy.get('app-license-plate').should('have.length', 8);
        cy.checkLicensePlateAt(1, '2008 Georgia license plate', '$8');
        cy.checkLicensePlateAt(2, '2015 New Jersey license plate', '$11');
        cy.checkLicensePlateAt(3, '2013 California My Tahoe license plate', '$9');
        cy.checkLicensePlateAt(4, '2010 Colorado license plate', '$5');
        cy.checkLicensePlateAt(5, '2017 Florida license plate', '$10');
        cy.checkLicensePlateAt(6, '2014 Utah license plate', '$10');
        cy.checkLicensePlateAt(7, '2016 New York license plate', '$9');
        cy.checkLicensePlateAt(8, '2007 Pennsylvania license plate', '$11');
    });

    it('supports multiple currencies', () => {
        cy.get('app-currency-switcher').click();
        cy.contains('EUR').click();
        cy.checkLicensePlateAt(1, '2008 Georgia license plate', '€9.12');
        cy.checkLicensePlateAt(2, '2015 New Jersey license plate', '€12.54');
        cy.checkLicensePlateAt(3, '2013 California My Tahoe license plate', '€10.26');
        cy.checkLicensePlateAt(4, '2010 Colorado license plate', '€5.7');
        cy.checkLicensePlateAt(5, '2017 Florida license plate', '€11.4');
        cy.checkLicensePlateAt(6, '2014 Utah license plate', '€11.4');
        cy.checkLicensePlateAt(7, '2016 New York license plate', '€10.26');
        cy.checkLicensePlateAt(8, '2007 Pennsylvania license plate', '€12.54');
    });
});
