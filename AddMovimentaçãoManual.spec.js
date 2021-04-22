/// <reference types="cypress" />

describe('Add Movimentação Manual', () => {


    before (()=> {
      cy.LoginCliente ('Admin', 'Pa$$word123') 
       
})
      it('Clicar na opção "Adicionar Movimentação"', () => {
   
                cy.visit ('/movimentacoes-manuais-processo')
                cy.get ('.button-outlined_btn-outlined__2CepR').click ()
               
                
                       
                })
            })