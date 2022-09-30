describe('Facebook Test', () => {
    it('validate the facebook', () => {
        cy.visit("https://www.facebook.com")
        cy.viewport(1920, 1080)
        cy.contains("Sign up").should("be.disabled")
        cy.get("input#name").type("raghavgoliCypress").should("have.value", "raghavgoliCypress")
        cy.get("input#email").type("raghavgoli59989@gmail.com").should("be.enabled").should("have.value", "raghavgoli59989@gmail.com")
    })
});