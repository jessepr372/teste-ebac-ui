/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('testando1@teste.com')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testando1 (não é testando1? Sair)')
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('testandfasd@teste.com')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('testando1@teste.com')
        cy.get('#password').type('teste0')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail testando1@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')

        
    });

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testando1 (não é testando1? Sair)') 
    });

    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, { log: false})
            cy.get('#password').type(dados.senha, { log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testando1 (não é testando1? Sair)')  
        })
    });

    it.only('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('testando1@teste.com', 'teste') 
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testando1 (não é testando1? Sair)')  
    });
})