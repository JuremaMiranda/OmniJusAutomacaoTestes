/// <reference types="cypress" />
var faker = require ('faker');


describe('Lsitar Prestador', () => {
 


    before (()=> {
      cy.LoginAdm ('Admin', 'Pa$$word123') 

       
})
                             
 
       it('Listar PF Ativo', () => {

        cy.visit ('cadastro-legal-ops')
        cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control').type ('Pessoa Fisica')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Advogado')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(3) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('TIM CELULAR S.A.')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Prestador 1')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.input').type ('Jurema')
        cy.get ('#Cpf').type ('21993948830')
        cy.get ('.listagem-cadastro-prestadores_filtroStatus__TKsVR > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Ativo')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click ()


           
    })

    it('Listar PF Inativo', () => {

        cy.visit ('cadastro-legal-ops')
        cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control').type ('Pessoa Fisica')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Advogado')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(3) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('TIM CELULAR S.A.')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Prestador 1')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.input').type ('Jurema')
        cy.get ('#Cpf').type ('21993948830')
        cy.get ('.listagem-cadastro-prestadores_filtroStatus__TKsVR > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Inativo')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click ()


           
    })

    it('Listar PJ Ativo', () => {

        cy.visit ('cadastro-legal-ops')
        cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control').type ('Pessoa jurídica')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Advogado')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(3) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('TIM CELULAR S.A.')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Prestador 1')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(5) > .input').type (colocar nome empresa)
        cy.get (':nth-child(6) > .input').type (color razao social)
        cy.get (':nth-child(6) > .input').type (colocar nome fantasia)
        cy.get (':nth-child(7) > .input').type (colocar cnpj)
        cy.get ('.listagem-cadastro-prestadores_filtroStatus__TKsVR > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Ativo')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click ()


           
    })

    it('Listar PJ inativo', () => {

        cy.visit ('cadastro-legal-ops')
        cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control').type ('Pessoa jurídica')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Advogado')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(3) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('TIM CELULAR S.A.')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Prestador 1')
        cy.get ('.css-11unzgr').click ()
        cy.get (':nth-child(5) > .input').type (colocar nome empresa)
        cy.get (':nth-child(6) > .input').type (color razao social)
        cy.get (':nth-child(6) > .input').type (colocar nome fantasia)
        cy.get (':nth-child(7) > .input').type (colocar cnpj)
        cy.get ('.listagem-cadastro-prestadores_filtroStatus__TKsVR > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Inativo')
        cy.get ('.css-11unzgr').click ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click ()




})

it('Validar Msg "Nenhum registro encontrado!"', () => {

    cy.visit ('cadastro-legal-ops')
    cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control').type ('Pessoa jurídica')
    cy.get ('.css-11unzgr').click ()
    cy.get (':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Revisor')
    cy.get ('.css-11unzgr').click ()
    cy.get ('.button-primary_btn-primary__3Wm9a').click ()
    cy.get ('p').contains ('Nenhum registro encontrado!')

})

it('Validar colunas da lista de resultados"', () => {

    cy.visit ('cadastro-legal-ops')
    cy.get ('#column-function\(e\)\{return\ e\.nomeOuRazaoSocial\} > div').contains ('Nome/Razão Social')
    cy.get ('#column-function\(e\)\{return\ e\.cpfCnpj\} > div').contains ('CPF/CNPJ')
    cy.get ('#column-function\(e\)\{return\ vn\(e\.idTipo\)\} > div').contains ('Vínculo')
    cy.get ('#column-function\(e\)\{var\ a\;return\ null\=\=\=\(a\=e\.qualificacoes\)\|\|void\ 0\=\=\=a\?void\ 0\:a\.join\(\"\,\ \"\)\} > div').contains ('Perfil')
    cy.get ('#column-function\(e\)\{return\ function\(e\)\{switch\(e\)\{case\ 0\:return\"Pessoa\ f\\xedsica\"\;case\ 1\:return\"Pessoa\ jur\\xeddica\"\;default\:return\"Desconhecido\"\}\}\(e\.tipoCadastro\)\} > div').contains ('Tipo de Cadastro')
    

})

})

