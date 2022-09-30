describe('Frame Handling', () => {
    it('Handling Iframes without plugin', () => {
       
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get("iframe").its("0.contentDocument.body")
        .then(cy.wrap).clear()
        .type("ABCD")
    });
});