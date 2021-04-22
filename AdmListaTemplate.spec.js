/// <reference types="cypress" />
var faker = require ('faker');


describe('Lsitar Template', () => {
 


    before (()=> {
      cy.LoginAdm ('Admin', 'Pa$$word123') 

       
})
                             
 
       it('Listar Template da área Trabalhista', () => {

        cy.visit ('templates')
        cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Trabalhista')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Automação de testes')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(5) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type  ('Entrevista Guiada')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(6) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ( 'Cadastro')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Ativo')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click ()




    }) 

    it('Listar Template da área Cível', () => {

        cy.visit ('templates')
        cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Cível')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('area civel')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(5) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type  ('Entrevista Guiada')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(6) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ( 'Cadastro')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Ativo')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click ()

    })
    it('Listar Template da área JEC', () => {

        cy.visit ('templates')
        cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('JEC')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Revisao teste 19')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(5) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type  ('Entrevista Guiada')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(6) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ( 'Cadastro')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Ativo')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click ()

    
})
it('Listar template Inativo', () => {

    
    cy.get (':nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Inativo')
    cy.get ('.css-11unzgr').click ()
    cy.get ('.button-primary_btn-primary__3Wm9a').click ()


})
it('validar a msg > Nenhum registro encontrado!', () => {

    
    cy.get (':nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Inativo')
    cy.get ('.css-11unzgr').click ()
    cy.get ('.button-primary_btn-primary__3Wm9a').click ()
    cy.get ('p').contains ('Nenhum registro encontrado!')


})

it('validar colunas da lista de resultado', () => {
    cy.visit ('templates')
    cy.get (':nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('ativo')
    cy.get ('.css-11unzgr').click ()
    cy.get ('.button-primary_btn-primary__3Wm9a').click () 
    cy.wait (3000)
    cy.get ('.sc-dlfnbm > :nth-child(1)').contains ('Atividades')
    cy.get ('.sc-dlfnbm > :nth-child(2)').contains ('Template')
    cy.get ('.sc-dlfnbm > :nth-child(3)').contains ('Áreas')
    cy.get ('.sc-dlfnbm > :nth-child(4)').contains ('Ritos')
    cy.get ('.sc-dlfnbm > :nth-child(5)').contains ('Tipos de ação')
    cy.get ('.sc-dlfnbm > :nth-child(6)').contains ('Assuntos')
    cy.get ('.sc-dlfnbm > :nth-child(7)').contains ('Status')




})
})

