describe('guardando elementos',()=>{
    before(()=>{
        cy.visit('/automation-practice-form')
    })

    after(()=>{
        //Estos hooks se pueden utilizar incluso por fuera de los describe para que antes de las pruebas
        //pueda tener informacion de la base de datos cargada.
    })
    it('Asercion',()=> {


        cy.url().should('include','demoqa.com')

        cy.get('#firstName').should('be.visible').and('have.attr','placeholder','First Name')
    })

    it('Asercion 2',()=> {
        //cy.visit('/automation-practice-form')

        cy.url().should('include','demoqa.com')

        cy.get('#firstName').then((element)=>{
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder','First Name')
        })
    })

    it('Asercion 3',()=> {
        //cy.visit('/automation-practice-form')

        cy.url().should('include','demoqa.com')

        cy.get('#firstName').then((element)=>{
            assert.equal(element.attr('placeholder'),'First Name')
        })
    })

})