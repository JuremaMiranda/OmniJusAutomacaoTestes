/// <reference types="cypress" />
var faker = require ('faker');


describe('AdmAtividade', () => {
 


    before (()=> {
      cy.LoginAdm ('Admin', 'Pa$$word123') 
       
})
                             
 
       it('Adicionar Atividade', () => {
  
               cy.visit ('https://administrativo-qa.omnijus.net.br/atividades/criar')
             cy.get('.adicionar-atividade_formulario__38hsH > :nth-child(1) > .input').type (faker.name.title(S))
              cy.get(':nth-child(2) > .css-2b097c-container > .css-yk16xz-control').type ("Entrevista Guiada")
             cy.get ('#react-select-2-option-4').click ()
             cy.get ('.omnijus-checkbox-areas_opcoes__1G2V0 > :nth-child(1) > label').click()
             cy.get (':nth-child(5) > .input').type ("120") 
             cy.get (':nth-child(6) > .input').type ("2")
             cy.get (':nth-child(7) > .input').type ("48")
             cy.get (':nth-child(1) > .omnijus-card_body__3p3qr > .adicionar-atividade_formulario__38hsH > .omnijus-field-qualificacao-tempo_omnijusFieldQualificacao__3fhWN > .omnijus-field-qualificacao-tempo_selects__yS36e > :nth-child(1) > .field_field-control__3zwl7 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ("Advogado")
             cy.get ('#react-select-3-option-0').click ()
             cy.get (':nth-child(1) > .omnijus-card_body__3p3qr > .adicionar-atividade_formulario__38hsH > .omnijus-field-qualificacao-tempo_omnijusFieldQualificacao__3fhWN > .omnijus-field-qualificacao-tempo_selects__yS36e > .omnijus-field-qualificacao-tempo_tempoEAdd__2g6dN > .omnijus-field-qualificacao-tempo_tempo__2c504 > .form-field-control > .input').type ("120")
             cy.get (':nth-child(1) > .omnijus-card_body__3p3qr > .adicionar-atividade_formulario__38hsH > .omnijus-field-qualificacao-tempo_omnijusFieldQualificacao__3fhWN > .omnijus-field-qualificacao-tempo_selects__yS36e > .omnijus-field-qualificacao-tempo_tempoEAdd__2g6dN > .omnijus-field-qualificacao-tempo_iconeAdd__3e-RZ > svg').click ()
             cy.get (':nth-child(2) > .omnijus-card_body__3p3qr > .adicionar-atividade_formulario__38hsH > :nth-child(1) > .input').type ("230")
             cy.get (':nth-child(3) > .input').type ("60")
             cy.get (':nth-child(2) > .omnijus-card_body__3p3qr > .adicionar-atividade_formulario__38hsH > .omnijus-field-qualificacao-tempo_omnijusFieldQualificacao__3fhWN > .omnijus-field-qualificacao-tempo_selects__yS36e > :nth-child(1) > .field_field-control__3zwl7 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ("Advogado")
             cy.get ('#react-select-4-option-0').click()
             cy.get (':nth-child(2) > .omnijus-card_body__3p3qr > .adicionar-atividade_formulario__38hsH > .omnijus-field-qualificacao-tempo_omnijusFieldQualificacao__3fhWN > .omnijus-field-qualificacao-tempo_selects__yS36e > .omnijus-field-qualificacao-tempo_tempoEAdd__2g6dN > .omnijus-field-qualificacao-tempo_tempo__2c504 > .form-field-control > .input').type ("36")
             cy.get (':nth-child(2) > .omnijus-card_body__3p3qr > .adicionar-atividade_formulario__38hsH > .omnijus-field-qualificacao-tempo_omnijusFieldQualificacao__3fhWN > .omnijus-field-qualificacao-tempo_selects__yS36e > .omnijus-field-qualificacao-tempo_tempoEAdd__2g6dN > .omnijus-field-qualificacao-tempo_iconeAdd__3e-RZ > svg').click ()
             cy.get ('.button-primary_btn-primary__3Wm9a').click () 
             cy.get ('#swal2-title').contains ("Atividade Adicionada")
      })
    })