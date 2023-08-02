<<<<<<< HEAD
Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
       
        cy.get('#firstName').type('yago')
        cy.get('#lastName').type('capistra')
        cy.get('#email').type('yagafga@gmail.com')
        cy.get('#phone').type('985642')
        cy.get('#open-text-area').type('teste')
        cy.contains('.button', 'Enviar').click()
})
=======
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
>>>>>>> fbdf76131f0d4b32f239d9b1317a129bdb309acd
