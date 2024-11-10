/// <reference types="cypress"/>
import produtosPage from "../../support/page-objetics/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarURl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        produtosPage.addProdutoCarrinho('33', 'Blue', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Zeppelin Yoga Pant” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)
    
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        

    });
});