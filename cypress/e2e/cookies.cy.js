Cypress.session

after( ()=>{
    cy.clearCookie('nombre')
})

describe('Cookies',function (){

    it('obtener cookies',function (){
        cy.visit('/')
        cy.getCookies().should('be.empty')
    })
    it('agregar cookies',function (){
        cy.setCookie('nombre','Javier')
        cy.getCookies().should('have.length',1)

    })
    it.only('obtener una cookie en específico',function (){

        cy.getCookie('nombre').should('have.a.property','Javier')

    })

})