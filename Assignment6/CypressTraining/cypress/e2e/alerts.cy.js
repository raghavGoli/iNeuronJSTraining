
describe('Handling Different Alerts in Cypress', function () {
    it('Demo For JS Alerts', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Alert").click()
        cy.on("window:alert", function (message) {
            expect(message).to.be.equal("I am a JS Alert")
        })

    })

    it('Demo For JS Confirm Alerts : OK button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm", function (message) {
            expect(message).to.be.equal("I am a JS Confirm")
        })
        cy.contains("You clicked: Ok").should("be.visible")

    })

    it('Demo For JS Confirm Alerts : Cancel button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm", function (message) {
            expect(message).to.be.equal("I am a JS Confirm")
            return false
        })
        cy.contains("You clicked: Cancel").should("be.visible")

    })


    it('Demo For JS prompt Alerts', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then(function (win) {
            cy.contains("Click for JS Prompt").click()
            cy.stub(win, "prompt").returns("selenium")

        })
        cy.contains("You entered: selenium").should("be.visible")
    })
})