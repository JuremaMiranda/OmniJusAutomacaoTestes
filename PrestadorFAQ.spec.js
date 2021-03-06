describe('PrestadorFAQ', () => {
   
    before (()=> {
        cy.LoginPrestador ('Admin', 'Pa$$word123')   
    })
    it('Visitar aba FAQ', () => {
        cy.visit ("https://prestador-qa.omnijus.net.br/faq")
        cy.viewport(1300, 1300) 
       })
     
     it('Realizar busca pela palavra "OmniJus"', () => {
        cy.visit ("https://prestador-qa.omnijus.net.br/faq")
        cy.viewport(1300, 1300) 
        cy.get ('.faq_input__W_JL9').type ("OmniJus")
        cy.wait(5000)
        cy.screenshot ()
    })


    it('Clicar no link do resultado', () => {
        cy.visit ("https://prestador-qa.omnijus.net.br/faq")
        cy.viewport(1300, 1300) 
        cy.get ('.faq_input__W_JL9').type ("OmniJus")
        cy.visit ("https://prestador-qa.omnijus.net.br/faq/a6d680d7f3b703384a6a97d5de936e25")
        cy.wait(5000)
        cy.screenshot ()
    })

    it('Realizar busca por categoria "Dúvidas Gerais"', () => {
        cy.visit ("https://prestador-qa.omnijus.net.br/faq")
        cy.viewport(1300, 1300) 
        cy.visit ("https://prestador-qa.omnijus.net.br/faq?categoria=1")
        cy.wait(5000)
        cy.screenshot ()
    })

    it('Realizar busca por categoria "Dúvidas sobre Pagamento"', () => {
        cy.visit ("https://prestador-qa.omnijus.net.br/faq")
        cy.viewport(1300, 1300) 
        cy.visit ("https://prestador-qa.omnijus.net.br/faq?categoria=2")
        cy.wait(5000)
        cy.screenshot ()
    })
    
    it('Realizar busca por categoria "Dúvidas de Funcionalidades e Sistema"', () => {
        cy.visit ("https://prestador-qa.omnijus.net.br/faq")
        cy.viewport(1300, 1300) 
        cy.visit ("https://prestador-qa.omnijus.net.br/faq?categoria=3")
        cy.wait(5000)
        cy.screenshot ()
    })
    
    it('Exibir MSG quando sistema não encontrar resultados"', () => {
        cy.visit ("https://prestador-qa.omnijus.net.br/faq")
        cy.viewport(1300, 1300) 
        cy.get ('.faq_input__W_JL9').type ("Macarrão")
        cy.get ('p').contains ("Nenhum registro encontrado!")
        cy.wait(5000)
        cy.screenshot ()
    })



})