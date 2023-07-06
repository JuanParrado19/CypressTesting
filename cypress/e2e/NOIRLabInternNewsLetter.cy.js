describe('NOIRLab Internal NewsLetter',()=>{

    beforeEach(function (){
        cy.visit('https://us4.campaign-archive.com/?u=5faf5cfc1d62a8a307b4370d9&id=cd67ec8214')
    })

    it('Given_images_When_pageIsLoading_Then_all_visible',function (){

        cy.get('img').should('be.visible').each(($img)=>{
            expect($img[0].naturalWidth).to.be.gt(0)

        })
    })

    it('Given_image(6)_When_clicking_Then_redirect_to_website',function (){

        cy.get(':nth-child(6) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){

                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })
    })

    it('Given_image(7)_When_clicking_Then_redirect_to_website',function (){

        cy.get(':nth-child(7) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){

                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })
    })

    it('Given_image(8)_When_clicking_Then_redirect_to_website',function (){

        cy.get(':nth-child(8) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){

                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })
    })

    it('Given_image(9)_When_clicking_Then_redirect_to_website',function (){

        cy.get(':nth-child(9) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){

                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })
    })

    it('Given_image(10)_When_clicking_Then_redirect_to_website',function (){

        cy.get(':nth-child(10) > .mcnCaptionBlockOuter > :nth-child(1) > .mcnCaptionBlockInner > .mcnCaptionLeftContentOuter > :nth-child(1) > :nth-child(1) > .mcnCaptionLeftContentInner > .mcnCaptionLeftImageContentContainer > tbody > tr > .mcnCaptionLeftImageContent > a > .mcnImage')
            .parent('a')
            .should('have.attr','href')
            .then(function (href){

                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })
    })


    it('Given_content_When_invoke_page_Then_page_is_visible',function(){

        cy.get('.sidebarContent').should('be.visible')
        cy.get('.footerContent').should('be.visible')
        cy.get('.mcnTextContentContainer').should('be.visible')

    })

    it('Given_text_When_invoke_page_Then_expect_language', function () {
        cy.get('.mcnTextContentContainer').each(($p)=>{
            const text = $p.text()
            cy.log(text)
            cy.detectLanguage(text).then((detectedLanguage)=>{
                if(detectedLanguage === 'fra' || detectedLanguage === 'und'){
                    cy.log('date')
                }else{
                    expect(detectedLanguage).to.eq('eng')
                }
            })
        })
        cy.get('.mcnTextContentContainer p').each(($p)=>{
            const text = $p.text()
            cy.log(text)
            cy.detectLanguage(text).then((detectedLanguage)=>{
                if(detectedLanguage === 'fra' || detectedLanguage === 'und'){
                    cy.log('date')
                }else{
                    expect(detectedLanguage).to.eq('eng')
                }
            })
        })
    });


})