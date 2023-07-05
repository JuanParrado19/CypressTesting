describe('guardando elementos',()=>{

    it('click', ()=>{
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain','You have done a dynamic click')
    })
    it('double click', ()=>{
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain','You have done a double click')
    })
    it('right click', ()=>{
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')
    })
    it('Force click', ()=>{
        cy.visit('/dynamic-properties')
        cy.get('#enableAfter').click({timeout:0,force:true})
        //cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')
    })
    it('click por posicion', ()=>{
        cy.visit('/buttons')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('bottomLeft')
        cy.get('button').eq(3).parent().parent().click(5,60)
    })

    it('click por posicion', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Juan')
        cy.get('#LastName').type('Parrado')
        cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').type('OtroNombre')
        cy.get('#firstName').clear()
    })
    it('checkbox y radio botones', ()=>{
        cy.visit('/automation-practice-form')
        //cy.get('#gender-radio-1').click({force:true})
        cy.get('label[for="gender-radio-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').check()

    })

    it('extrayendo informacion', function(){
        cy.visit('/automation-practice-form')
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('javier')

        cy.get('@nombre').then(($nombre)=>{

            expect($nombre.val()).to.equal('javier')
        })

        cy.get('@nombre').invoke('val').should('equal','javier')
        cy.get('@nombre').invoke('val').as('nombreGlobal')

    })
    it('compartir informacion', function() {
        cy.visit('/automation-practice-form')
        cy.get('#lastName').as('nombre2')
        cy.get('@nombre2').type('juan')
        cy.get('#firstName').type(this.nombreGlobal)
    })

    it('Interactuando con los dropdown(select)', function() {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('custom-select').select(10)
        cy.get('custom-select').select('3').should('have.value','3')
        cy.get('custom-select').select('Greece').should('have.value','4')

    })

    it('Interactuando con los dropdown(select) dinamico', function() {
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(' ')
    // Esta forma ya esta deprecada pero igual es bueno por si no funciona la otra.
    //  cy.get('#react-select-6-listbox').children().children().each(($el,index,$list)=>{
    //
    //      if($el.text()==='Red'){
    //
                //$el.on('click')
    //          $el.click()
    //      }
    //  })

        cy.get('#react-select-6-option-3').click()
    })
    it('Interactuando con tablas', function() {

        cy.visit('https://www.w3schools.com/html/html_tables.asp')
        cy.get('#customers')
            .find('th')
            .each(($el)=>{

                cy.log($el.text())
        })

        cy.get('#customers')
            .find('th')
            .first()
            .invoke('text')
            .should('equal','Company')

        cy.get('#customers')
            .find('th')
            .eq(1)
            .invoke('text')
            .should('equal','Contact')

        cy.get('#customers')
            .find('th')
            .eq(2)
            .invoke('text')
            .should('equal','Country')

        cy.get('#customers')
            .find('tr')
            .should('have.length',7)

        cy.get('#customers')
            .find('tr')
            .eq(1)
            .find('td')
            .eq(1)
            .invoke('text')
            .should('equal','Maria Anders')

    })

    it('Interactuando con datepickers', function() {
        cy.visit('https://material.angular.io/components/datepicker/overview')
        cy.get('datepicker-overview-example')
            .find('label')
            .eq(0)
            .type('11/03/2022')
        cy.get('datepicker-overview-example').find('button').click()

    })

    it('Interactuando con modals', function() {
        cy.visit('/modal-dialogs')
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
    })

    it('Interactuando con modals', function() {
        cy.visit('/alerts')

        const stub = cy.stub()
        cy.on('window:confirm',stub)

        cy.get('#confirmButton').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        })

        cy.contains('You selected Ok').should("exist")
    })

    it('Interactuando con modals, confirmacion', function() {
        cy.visit('/alerts')

        cy.get('#confirmButton').click()

        cy.on('window:confirm',(confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
        })

        cy.contains('You selected Ok').should("exist")
    })

    it('Interactuando con modals, denegacion', function() {
        cy.visit('/alerts')

        cy.get('#confirmButton').click()

        cy.on('window:confirm',(confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
            return false
        })

        cy.contains('You selected Cancel').should("exist")
    })

    it('Interactuando con tooltips', function() {
        cy.visit('/tool-tips')

        cy.get('#toolTipButton').trigger('mouseover')

        cy.contains('You hovered over the Button').should('exist')

        cy.get('#toolTipButton').trigger('mouseout')

        cy.contains('You hovered over the Button').should('not.exist')
    })

    it.only('Interactuando con drag and drop', function() {
        cy.visit('/dragabble')

        cy.get('#dragBox').trigger('mousedown',{
            which:1,
            pageX:0,
            pageY:0,
        }).trigger('mousemove',{
            which:1,
            pageX:90,
            pageY:90
        }).trigger('mouseup')
    })





})