/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){

        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })
    it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()
    
    cy.contains('Talking About Testing').should('be.visible')

    })
  


  })