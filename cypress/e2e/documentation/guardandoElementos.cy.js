describe('guardando elementos',()=>{

    it('repeticion',()=>{
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]').parents('form').then((form)=>{

            const inputs = form.find('input')
            const divs = form.find('div')
            const labels = form.find('label')

            expect(inputs.length).to.eq(15)
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)

        })


    })

    it('Evitar la repeticion',()=>{
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]').parents('form').then((form)=>{

            const inputs = form.find('input')
            const divs = form.find('div')
            const labels = form.find('label')

            expect(inputs.length).to.eq(15)
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)

            //console.log('soy la longitud',inputs.length)
            //debugger
            // cy.pause() sirve para pausar la prueba

            //
            cy.task('log',inputs.length)

            cy.log('soy la longitud',inputs.length)

            cy.get('input[placeholder="First Name"]').debug()
        })


    })

})