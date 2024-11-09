/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            .contains('Atomic Endurance Running Tee (Crew-Neck)')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});