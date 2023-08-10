// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("checkLicensePlateAt", (index, ...stringsToCheck) => {
    for (const str of stringsToCheck) {
        cy.get(`app-license-plate:nth-of-type(${index})`).contains(str).should('be.visible');
    }
});

// Example of a login command
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('.login').type(email);
    cy.get('.password').type(password);
    cy.get('button[type="submit"]').click();
 });
 
 /// A custom command that validates the page title, font size, font weight, in one place
 Cypress.Commands.add('validateTitleAndFonts', (pageNav, titleText, fontWeight = '300', fontSize = '72px', fontName = /Segoe UI/) => {
    cy.contains(pageNav).click();
    cy.get('.display-3')
    .contains(titleText)
    .should('be.visible')
    .should('have.css', 'font-weight', fontWeight)
    .should('have.css', 'font-size', fontSize)
    .and('have.css', 'font-family').and('match', fontName);
 })
