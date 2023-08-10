const axios = require('axios').default;

let plates = [];

describe('License plate store home page', () => {

    /*
    The 8 license plates are displayed in the right order
    Both title and price show up with right values for those 8 license plates
    */
    beforeEach(() => {
        cy.visit('/');
        axios.get('https://lp-store-server.vercel.app/data')
            .then(function (response) {
                plates = response.data;
            });
    });

    it('displays the right main title', () => {
        cy.contains('Welcome to our store')
            .should('be.visible')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-size', '72px')
            .and('have.css', 'font-family').and('match', /Segoe UI/);
    });

    it('should display plates in order', () => {

        const amountOfLicensePlates = 8;
        cy.get('app-license-plate').should('have.length', amountOfLicensePlates);
        cy.get(`app-license-plate`).each(($el) => {
            cy.wrap($el).get('h2').should('contain.text', 'license plate').and('be.visible');
            cy.wrap($el).get('h2').should('contain.text', '20').and('be.visible');
            cy.wrap($el).get('h2').should('contain.text', '$').and('be.visible');
        });
    })

    it('displays 8 license plates prices', () => {
        const amountOfLicensePlates = 8;
        cy.get('app-license-plate').should('have.length', amountOfLicensePlates);
        for (let i = 1; i <= amountOfLicensePlates; i++) {
            cy.get(`.row > :nth-child(${i}) > div > .float-left`)
                .should('be.visible')

        }
    });

    it('displays 8 license plates prices in array', () => {

        plates.forEach((plate, index) => {
            cy.get(`app-license-plate:nth-of-type(${index + 1})`).contains('h2', plate.title).scrollIntoView().should('be.visible');
            cy.get(`app-license-plate:nth-of-type(${index + 1})`).contains('h2', `$${plate.price}`).scrollIntoView().should('be.visible');
        })
    });
});
