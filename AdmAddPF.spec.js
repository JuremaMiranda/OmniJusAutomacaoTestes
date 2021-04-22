/// <reference types="cypress" />

var faker = require ('faker');
var CPF = require ('cpf_cnpj').CPF


describe('AddPF', () => {
 


    before (()=> {
      cy.LoginAdm ('Admin', 'Pa$$word123')
    }) 

      it('Adicionar Prestador PF', () => {
      cy.visit ('https://administrativo-qa.omnijus.net.br/cadastro-legal-ops/criar')
      cy.wait(5000)
      cy.get (':nth-child(1) > .css-2b097c-container > .css-yk16xz-control').type ("Advogado")
      cy.get ('.css-11unzgr').click ()
      cy.get (':nth-child(2) > .input').type (faker.name.firstName())
      cy.get ('#cpf').type (CPF.generate())
      cy.get (':nth-child(5) > .input').type (faker.name.lastName())
      cy.get (':nth-child(6) > .input').type ("105239")
      cy.get (':nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('OAB - Ordem dos Advogados do Brasil')
      cy.get ('.css-11unzgr').click ()
      cy.get (':nth-child(8) > .react-datepicker-wrapper > .react-datepicker__input-container > .field_input__19A2R').type ("15/08/1995")
      cy.get (':nth-child(9) > .input').type ('408564696')
      cy.get (':nth-child(10) > .input').type ('SSP')
      cy.get (':nth-child(11) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('SP')
      cy.get (':nth-child(12) > .react-datepicker-wrapper > .react-datepicker__input-container > .field_input__19A2R').type ('15/09/1078')
      cy.get (':nth-child(3) > .omnijus-card_body__3p3qr > .cadastro-prestadores_botaoIcone__epWfM').click ()
      cy.get ('#cep').type ('04385040')
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(2) > .input').type ('Rua Vicente Leite')
      cy.get (':nth-child(3) > .input').type ('34556')
      cy.get (':nth-child(4) > .input').type (' S/C')
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(5) > .input').type ('Lapa')
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(6) > .input').type ('São Paulo')
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(7) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('SP')
      cy.get ('.css-13uk1mm').click ()
      cy.get (':nth-child(8) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Comercial')
      cy.get ('.css-11unzgr').click()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > .cadastro-prestadores_linhaSubmit__SoO8F > .button-primary_btn-primary__3Wm9a').click ()
      cy.get (':nth-child(4) > .omnijus-card_body__3p3qr > .cadastro-prestadores_botaoIcone__epWfM').click()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > .field_field-control__3zwl7 > .css-2b097c-container > .css-yk16xz-control').type ('Email')
      cy.get ('.css-11unzgr').click()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(2) > .input').type ("testes@automação.com")
      cy.get (':nth-child(3) > .omni-radio-check > :nth-child(1) > label > .input').click ()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > .cadastro-prestadores_linhaSubmit__SoO8F > .button-primary_btn-primary__3Wm9a').click ()
      cy.get (':nth-child(6) > .omnijus-card_body__3p3qr > .cadastro-prestadores_botaoIcone__epWfM').click ()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(1) > .input').type ('Ticket Beneficios')
      cy.get('.cadastro-prestadores_modalForm__2VDAg > :nth-child(2) > .input').type ('Analista de qualidade senior')
      cy.get (':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .field_input__19A2R').type ('15/09/2020')
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(5) > .input').type ('Testes de qualidade')
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > .cadastro-prestadores_linhaSubmit__SoO8F > .button-primary_btn-primary__3Wm9a').click ()
      cy.get (':nth-child(9) > .omnijus-card_body__3p3qr > .cadastro-prestadores_botaoIcone__epWfM').click ()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Nubank')
      cy.get ('.css-11unzgr').click ()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(2) > .input').type ('256')
      cy.get (':nth-child(3) > .input').type('288456')
      cy.get (':nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Conta Corrente')
      cy.get ('.css-11unzgr').click ()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > .cadastro-prestadores_linhaSubmit__SoO8F > .button-primary_btn-primary__3Wm9a').click ()
      cy.get (':nth-child(5) > .omnijus-card_body__3p3qr > .cadastro-prestadores_botaoIcone__epWfM').click()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Técnico')
      cy.get ('.css-11unzgr').click ()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(2) > .input').type ('UNIB')
      cy.get (':nth-child(3) > .input').type ('Gestão TI')
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > :nth-child(6) > .input').type ('6')
      cy.get (':nth-child(7) > .react-datepicker-wrapper > .react-datepicker__input-container > .field_input__19A2R').type ('01/04/2020')
      cy.get (':nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Cursando')
      cy.get ('.css-11unzgr').click ()
      cy.get (':nth-child(5) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type ('Anual')
      cy.get ('.css-11unzgr').click ()
      const fileimplement = ':nth-child(9) > .omnijus-file-field_loadFileLabel__28OJT';
      const fixturefile = "arquivo.json";
      cy.get (fileimplement).attachFile (fixturefile)
      cy.get ('.button-primary_btn-primary__3Wm9a').click ()
      cy.get ('.cadastro-prestadores_modalForm__2VDAg > .cadastro-prestadores_linhaSubmit__SoO8F > .button-primary_btn-primary__3Wm9a').click ()
      cy.get ('.button-primary_btn-primary__3Wm9a').click ()
      





  
  
})
})