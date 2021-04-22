var faker = require ('faker');
var CPF = require ('cpf_cnpj').CPF


describe('Criar Guia de Pagamento', () => {
 


    before (()=> {
      cy.LoginAdm ('Admin', 'Pa$$word123')
    }) 

    it('Criar Pendência', () => {
  
        cy.visit ('https://administrativo-qa.omnijus.net.br/pendencias/gerar-pendencia-pagamento')
        cy.get ('#NumeroProcesso').type ('1500772-97.2020.8.26.0288');
        cy.get ('.react-datepicker__input-container > .field_input__19A2R').type ('30/08/2045')
        cy.get ('.input').type (faker.name.title())
        const fixturefile = "arquivo.json";
     cy.xpath ('//*[@id="root"]/div/div/form/div/div/div/div[5]/label[2]').attachFile ()
        cy.get ('.button-primary_btn-primary__3Wm9a').click (fixturefile)
       

})
})