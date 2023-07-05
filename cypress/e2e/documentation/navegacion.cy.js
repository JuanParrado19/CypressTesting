describe('primer prueba',()=>{
    it('navegar a nuestra primer pagina',()=>{
        cy.visit('https://www.platzi.com/')
    })
    it('Recargar pagina', ()=>{
        cy.reload()
    })

    it('Recargar pagina forzada', ()=>{
        cy.visit('https://www.platzi.com/')
        cy.reload(true)
    })

    it('Navegar hacia atras', ()=>{
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sxsrf=APwXEddhcModC9OtFJzKlCSigSfahqBTxQ%3A1686858150486&source=hp&ei=pmmLZMmBG7e1qtsPqYe44A4&iflsig=AOEireoAAAAAZIt3ttiyQV5FjFEHwiTVZyjNjxhpxHRB&ved=0ahUKEwjJ7N-mhMb_AhW3mmoFHakDDuwQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEIoFECcyDgguEIAEEMcBENEDEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywE6BwgjEOoCECc6BQgAEIAEOgUILhCABDoLCC4QgAQQxwEQ0QM6DgguEIAEEMcBENEDENQCOggIABCKBRCRAjoMCCMQigUQExCABBAnOggILhCABBDUAlCRBFjvCmCaE2gBcAB4AIABvgGIAdMGkgEDMC42mAEAoAEBsAEK&sclient=gws-wiz')
        cy.go('back')
    })
    it('Navegar hacia atras', ()=>{
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sxsrf=APwXEddhcModC9OtFJzKlCSigSfahqBTxQ%3A1686858150486&source=hp&ei=pmmLZMmBG7e1qtsPqYe44A4&iflsig=AOEireoAAAAAZIt3ttiyQV5FjFEHwiTVZyjNjxhpxHRB&ved=0ahUKEwjJ7N-mhMb_AhW3mmoFHakDDuwQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEIoFECcyDgguEIAEEMcBENEDEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywE6BwgjEOoCECc6BQgAEIAEOgUILhCABDoLCC4QgAQQxwEQ0QM6DgguEIAEEMcBENEDENQCOggIABCKBRCRAjoMCCMQigUQExCABBAnOggILhCABBDUAlCRBFjvCmCaE2gBcAB4AIABvgGIAdMGkgEDMC42mAEAoAEBsAEK&sclient=gws-wiz')
        cy.go('back')
        cy.go('forward')
        // tambien se puede ir hacia adelante o atras con -1 o 1

    })

})