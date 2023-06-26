describe('NOIRLab NewsLetter',()=>{

    it('Given_images_When_pageIsLoading_Then_all_visible',function (){
        cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
        cy.get('.mcnImage').should('be.visible')
    })

    it('Given_image(6)_When_clicking_Then_redirect_to_website',function (){
        cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
        cy.get(':nth-child(6) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){
                cy.visit(href)
                cy.request(href).then(function(response){
                    expect(response.status).to.eq(200)
                    cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
                })
            })
    })

    it('Given_image(7)_When_clicking_Then_redirect_to_website',function (){
        cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
        cy.get(':nth-child(7) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){
                cy.visit(href)
                cy.request(href).then(function(response){
                    expect(response.status).to.eq(200)
                    cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
                })
            })
    })

    it('Given_image(8)_When_clicking_Then_redirect_to_website',function (){
        cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
        cy.get(':nth-child(8) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){
                cy.visit(href)
                cy.request(href).then(function(response){
                    expect(response.status).to.eq(200)
                    cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
                })
            })
    })

    it('Given_image(9)_When_clicking_Then_redirect_to_website',function (){
        cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
        cy.get(':nth-child(9) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){
                cy.visit(href)
                cy.request(href).then(function(response){
                    expect(response.status).to.eq(200)
                    cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
                })
            })
    })

    it('Given_image(10)_When_clicking_Then_redirect_to_website',function (){
        cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
        cy.get(':nth-child(10) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){
                cy.visit(href)
                cy.request(href).then(function(response){
                    expect(response.status).to.eq(200)
                    cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')
                })
            })
    })


    it('Given_content_When_invoke_page_Then_page_is_visible',function(){
        cy.visit('https://us4.campaign-archive.com/?e=__test_email__&u=5faf5cfc1d62a8a307b4370d9&id=d3894ae2df')

        cy.get('.sidebarContent').should('be.visible')

    })
})