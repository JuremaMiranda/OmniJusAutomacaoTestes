/// <reference types="cypress" />

describe('Movimentação Manual', () => {


    before (()=> {
      cy.LoginCliente ('Admin', 'Pa$$word123') 
       
})
      it('Pesquisar tipo movimentação = "Citação"', () => {
   
                cy.visit ('/movimentacoes-manuais-processo')
                cy.get(':nth-child(1) > .omni-select').select ("Citação")
                cy.get ('.btn-primary').click ()
                       
                })
                it('Pesquisar tipo movimentação = "Intimação"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get(':nth-child(1) > .omni-select').select ("Intimação")
                  cy.get ('.btn-primary').click ()
                         
                }) 
                
                it('Pesquisar tipo movimentação = "Liminar"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get(':nth-child(1) > .omni-select').select ("Intimação")
                  cy.get ('.btn-primary').click ()
                         
                }) 
                
                it('Pesquisar tipo movimentação = "Ofício"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get(':nth-child(1) > .omni-select').select ("Intimação")
                  cy.get ('.btn-primary').click ()
                         
                }) 
                it('Realizar filtro por data de solicitação', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(2) > .field-wrapper > :nth-child(1) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input'). type ("05/01/2021")
                  cy.get (':nth-child(2) > .field-wrapper > :nth-child(2) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("24/02/2021")
                  cy.get ('.btn-primary').click ()       
                }) 


                
                it('Realizar filtro por data de solicitação', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(3) > .field-wrapper > :nth-child(1) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input'). type ("05/01/2021")
                  cy.get (':nth-child(3) > .field-wrapper > :nth-child(2) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("24/02/2021")
                  cy.get ('.btn-primary').click ()       
                }) 


    
                it('Realizar filtro Status = "Em Andamento"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(4) > .omni-select').select ("Em Andamento")
                  cy.get ('.btn-primary').click ()       
                }) 

                it('Realizar filtro Status = "Liberado"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(4) > .omni-select').select ("Liberado")
                  cy.get ('.btn-primary').click ()       
                }) 

                it('Realizar filtro Status = "Rejeitado"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(4) > .omni-select').select ("Rejeitado")
                  cy.get ('.btn-primary').click ()       
                }) 


                it('Realizar filtro pelo número do processo', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get ('#numeroProcesso').type ("1500772-97.2020.8.26.0288")
                  cy.get ('.btn-primary').click ()       
                }) 

                it('Realizar seleção por área  "Trabalhista"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(6) > .omni-select').select ("Trabalhista")
                  cy.get ('.btn-primary').click ()       
                }) 

                it('Realizar seleção por área  "Cível"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(6) > .omni-select').select ("Cível")
                  cy.get ('.btn-primary').click ()       
                }) 
                
                it('Realizar seleção por área  "JEC"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(6) > .omni-select').select ("JEC")
                  cy.get ('.btn-primary').click ()       
                }) 

                it('Realizar filtro por "Parte Contrária" ', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(8) > .input').type ("PREFEITURA MUNICIPAL DE ITUVERAVA")
                  cy.get ('.btn-primary').click ()       
                }) 

                it('Validar por "Data de Recebimento da Intimação"', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(9) > .field-wrapper > :nth-child(1) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("05/01/2021")
                  cy.get (':nth-child(9) > .field-wrapper > :nth-child(2) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("24/02/2021")
                  cy.get ('.btn-primary').click ()       
                }) 

                it('Validar MSG quando sistema não encontrar dados" ', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get (':nth-child(8) > .input').type ("MACARRÃO")
                  cy.get ('.btn-primary').click ()
                  cy.get ('p')       .contains ("Nenhum registro encontrado!")
                }) 
              
                it('Validar Colunas da grid ', () => {
   
                  cy.visit ('/movimentacoes-manuais-processo')
                  cy.get(':nth-child(1) > .omni-select').select ("Citação")
                  cy.get ('.btn-primary').click ()
                  cy.get ('#column-numeroProcesso > div').contains ("Processo")
                  cy.get('#column-tipoMovimentacao > div').contains ("Tipo de movimentação")
                  cy.get ('#column-dataRecebimentoIntimacao > div').contains ("Data de recebimento da intimação")
                  cy.get ('#column-undefined > div').contains ("Prazo de execução")
                  cy.get ('#column-status > div').contains ("Status")


                }) 

    })
