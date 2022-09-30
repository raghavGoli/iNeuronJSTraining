
describe('registration form test', () => {
    it('validate the registration form in ineuron', () => {
        cy.visit("https://ineuron-courses.vercel.app/signup")
        cy.viewport(1920, 1080)
        cy.contains("Sign up").should("be.disabled")
        cy.get("input#name").type("raghavgoliCypress").should("have.value", "raghavgoliCypress")
        cy.get("input#email").type("raghavgoli59989@gmail.com").should("be.enabled").should("have.value", "raghavgoli59989@gmail.com")
        cy.get("input#password").type("password@123")
        cy.xpath("//label[text()='Data Science']/preceding-sibling::input").click()
        cy.get("input[type='radio']").first().click()
        cy.get("select[name='state']").select("Telangana")
        cy.contains("Sign up").should("be.enabled").click()
        cy.get('[name="email1"]').type("raghavgoli59989@gmail.com").should("have.value", "raghavgoli59989@gmail.com")
        cy.get('[name="password1"]').type("password@123").should("have.value", "password@123")
        cy.get('.submit-btn').should("be.enabled").click()
        cy.get('.navbar-menu-links > button').click()
        cy.get('.header').should("be.visible")
    })
});

describe('Enroll Feature', () => {
    it('makes the courses enrolled and identify the count of courses', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input#email1").type("raghavgoli59989@gmail.com").should("have.value", "raghavgoli59989@gmail.com")
        cy.get("input#password1").type("password@123").should("have.value", "password@123")
        cy.get("button.submit-btn").should("be.visible").should("be.enabled").click()
        cy.contains("Sign out").should("be.visible").should("be.enabled")
        cy.get("div.home-container").children().should("have.length", 4)
        cy.xpath("//h2[normalize-space()='Course2']/../../..//button[contains(text(),'Enroll')]").click()
        cy.wait(4000)
        cy.xpath("//h2[normalize-space()='Course2']//following::button[normalize-space()='ENROLLED']").should("have.text", "ENROLLED")
        cy.xpath("//h2[normalize-space()='web development']/../../..//button[contains(text(),'Enroll')]").click()
        cy.wait(4000)
        cy.xpath("//h2[normalize-space()='web development']//following::button[normalize-space()='ENROLLED']").should("have.text", "ENROLLED")
        cy.wait(4000)
        cy.xpath("//h2[normalize-space()='dfshgb']/../../..//button[contains(text(),'Enroll')]").click()
        cy.xpath("//h2[normalize-space()='dfshgb']//following::button[normalize-space()='ENROLLED']").should("have.text", "ENROLLED")
        cy.wait(4000)
        cy.xpath("//h2[normalize-space()='bcfbn xvcfdbn']/../../..//button[contains(text(),'Enroll')]").click()
        cy.xpath("//h2[normalize-space()='bcfbn xvcfdbn']//following::button[normalize-space()='ENROLLED']").should("have.text", "ENROLLED")

    })
});