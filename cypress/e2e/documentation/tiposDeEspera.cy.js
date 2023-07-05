describe('guardando elementos',()=>{

   beforeEach(()=>{
       cy.visit('https://www.platzi.com/')
   })
    it('Esperar por un tiempo definido', ()=>{
        cy.wait(5000)
    })
    it('Esperar por un elemento', ()=>{
        cy.get('.Hero-content-subtitle',{timeout:6000})
    })
    it('Esperar por un elemento y hacer una asercion', ()=>{
        cy.get('.Hero-content-subtitle',{timeout:6000}).should('be.visible')
    })
    it('Deshabilitar el retry', ()=>{
        cy.get('.Hero-content-subtitle',{timeout:0})
    })
})