describe('NOIRLab Internal NewsLetter',()=>{

    beforeEach(function (){
        cy.visit('https://us4.campaign-archive.com/?e=%5BUNIQID%5D&u=5faf5cfc1d62a8a307b4370d9&id=603db8215c')
    })

    it('Given_images_When_pageIsLoading_Then_all_visible',function (){

        cy.get('img').should('be.visible').each(($img)=>{
            expect($img[0].naturalWidth).to.be.gt(0)

        })
    })

    it.only('Given_topContentBar_images_When_cliking_Then_redirect_to_website', function () {
        cy.get('#templateHeader')
            .children().children('tr').children('td').children('table').children().children('tr').children('td').children('a')
            .each((a)=>{
                const href = a.attr('href')
                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })
    });

    it('Given_principal_images_When_clicking_Then_redirect_to_website',function (){

        cy.get('.mcnTextContent img')
            .parent('a')
            .each((a)=>{
                const href = a.attr('href')
                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })


        cy.get('.headerContent a')
            .each((a)=>{
                const href = a.attr('href')
                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    if (response.status === 999){
                        cy.log('socialmedia bot corrector')
                    }else{
                        expect(response.status).to.eq(200)
                    }

                })
            })
    })

    it('Given_sidecontentBar_images_When_cliking_Then_redirect_to_website', function () {
        cy.get('.sidebarContent img')
            .parent('a')
            .each((a)=>{
                const href = a.attr('href')
                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    expect(response.status).to.eq(200)

                })
            })
    });

    it('Given_footerContent_images_When_cliking_Then_redirect_to_website', function () {

        cy.get('.footerContent img')
            .parent('a')
            .each((a)=>{
                const href = a.attr('href')
                cy.request({url:href , failOnStatusCode:false}).then(function(response){
                    if (response.status === 999){
                        cy.log('socialmedia bot corrector')
                    }else{
                        expect(response.status).to.eq(200)
                    }

                })
            })

    });



    it('Given_content_When_invoke_page_Then_page_is_visible',function(){

        cy.get('.sidebarContent').should('be.visible').and('exist')
        cy.get('.footerContent').should('be.visible').and('exist')
        cy.get('.mcnTextContentContainer').should('be.visible').and('exist')

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