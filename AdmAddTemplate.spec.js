/// <reference types="cypress" />
var faker = require ('faker');

describe('AdmAtividade', () => {
 


    before (()=> {
      cy.LoginAdm ('Admin', 'Pa$$word123') 
       
})
it('Adicionar Template', () => {
    cy.visit ('https://administrativo-qa.omnijus.net.br/templates/criar')
    cy.get (':nth-child(1) > .input').type (faker.name.title())
    cy.get (':nth-child(2) > .input').type ("Templates Automatizados")
    cy.get (':nth-child(3) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ("Entrevista Guiada")
    cy.get ('#react-select-2-option-2').click ()
    cy.get (':nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ("Teste Automatização")
    cy.get ('#react-select-4-option-75').click ()
    cy.get (':nth-child(5) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ("testes de qualidade")
    cy.get ('#react-select-3-option-28').click ()
    cy.get (':nth-child(6) > .input').type ("10")
    cy.get ('.template-utilizacao-field_button__3tr-a').click ()
    cy.wait(3000)
    cy.get (':nth-child(1) > .css-yk16xz-control').type ("Trabalhista")
    cy.get ('.css-11unzgr').click ()
    cy.get ('.template-utilizacao-field_utilizacao__1wWhf > :nth-child(2) > .css-yk16xz-control').type ("Ordinário")
    cy.get ('#react-select-9-option-0').click ()
    cy.get (':nth-child(3) > .css-yk16xz-control > .css-1hwfws3').type ("Reclamação Trabalhista")
    cy.get ('.css-11unzgr').click ()
    cy.get (':nth-child(4) > .css-yk16xz-control > .css-1hwfws3').type ("Jornada de Trabalho")
    cy.get ('.css-11unzgr').click ()
    cy.get ('.button-primary_btn-primary__3Wm9a').click ()
})
})  