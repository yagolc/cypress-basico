Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
       
        cy.get('#firstName').type('yago')
        cy.get('#lastName').type('capistra')
        cy.get('#email').type('yagafga@gmail.com')
        cy.get('#phone').type('985642')
        cy.get('#open-text-area').type('teste')
        cy.contains('.button', 'Enviar').click()
})