describe('Task1-Verify URL and title', () => {
    it('Validate URL and Title in ineuron web application', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.title().should('include','Courses')
        cy.url().should('include','login')
    })
})


describe('Task2-Verify Login and Logout', () => {
    it('Validate Login & Logout in ineuron web application', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('input#email1').type('ineuron@ineuron.ai')
        cy.get('input#password1').type('ineuron')
        cy.contains('Sign in').click({force:true})
        cy.get('h4.welcomeMessage').should("be.visible")
        cy.contains('Sign out').click()
        cy.contains('Sign in').should('be.enabled')
    })
})

describe('Task3-Write 4 test in same suite for verifying error message', () => {
    it('Verify error message should contains Email and Password is required', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.contains('Sign in').click()
        cy.xpath("//h2[text()='Email and Password is required']").should('be.visible')
    })

    it('Verify error message should contains Password is required', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('input#email1').type('ineuron@ineuron.ai')
        cy.contains('Sign in').click()
        cy.xpath("//h2[text()='Password is required']").should('be.visible')
      
    })
    it('Verify error message should contains Email is required', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('input#password1').type('ineuron')
        cy.contains('Sign in').click()
        cy.xpath("//h2[text()='Email is required']").should('be.visible')
      
    })
    
    it('Verify error message should contains USER Email Doesnot Exist', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('input#email1').type('ineuron@ineuron1.ai')
        cy.get('input#password1').type('ineuron1')
        cy.contains('Sign in').click()
        cy.xpath('//h2[text()="USER Email Doesn\'t Exist"]').should('be.visible')
        
    })
})