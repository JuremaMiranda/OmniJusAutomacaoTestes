/// <reference types="cypress" />

describe('AdmAtividade', () => {


    before (()=> {
      cy.LoginAdm ('Admin', 'Pa$$word123') 
       
})
                             
 
       it('Filtrar por Atividades', () => {
  
               cy.visit ('https://administrativo-qa.omnijus.net.br/atividades')
               cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control').type ("Dados Iniciais Processo")
               cy.get ('#react-select-5-option-1').click ()
               cy.get ('.button-primary_btn-primary__3Wm9a').click ()
              
      
      })

      it('validar colunas de grid', () => {
  
        cy.get ('#return e.descricaoAtividade').contains ("Atividade")
        cy.get ('#column-function\(e\)\{return\ e\.areaAtividades\.map\(\(function\(e\)\{return\ e\.descricaoArea\}\)\)\.join\(\"\,\ \"\)\} > div').contains ("Área")
        cy.get ('#column-function\(e\)\{return\ e\.descricaoTipoAtividade\} > div').contains ("Tipo de Atividade")
        cy.get ('#column-function\(e\)\{return\ e\.estaAtivo\?\"Ativa\"\:\"Inativa\"\} > div').contains ("Status")
       
   
       
      
       
    })
  })