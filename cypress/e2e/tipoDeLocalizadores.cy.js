describe('tipos de localizadores',()=>{
    it('Obtenerlo por medio de un tag',()=>{
        cy.visit('/automation-practice-form')
        cy.get("input")
    })
    it('Obtenerlo por medio de un atributo',()=>{
        //cy.visit('/automation-practice-form')
        cy.get("[placeholder='First Name']")
    })
    it('Obtenerlo por medio de un atributo y un tag',()=>{
        //cy.visit('/automation-practice-form')
        cy.get("input[placeholder='First Name']")
    })
    it('Obtenerlo por medio de un id',()=>{
        //cy.visit('/automation-practice-form')
        cy.get('#firstName')
    })
    it('Obtenerlo por medio de un class',()=>{
        //cy.visit('/automation-practice-form')
        cy.get('#firstName')
    })

})