describe('End To End flow Test', function() {

    before(function()  {
        cy.fixture("example").then(function(jsonData){
            this.jsonData=jsonData;
        })
    })

    it('Validate the E2E workflow Test', function() {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.login("ineuron@ineuron.ai","ineuron")
        cy.get('.submit-btn').should("be.enabled").click()
        cy.contains("Manage").realHover()
        cy.wait(2000)
        cy.contains("Manage Categories").invoke("removeAttr","target").click({force:true})
        cy.wait(5000)
        cy.window().then(function (win) {
            cy.contains("Add New Category").click({force:true})
            cy.stub(win, "prompt").returns("Cypress-Raghav")

        })
        cy.contains("Cypress-Raghav").should("be.visible")
        cy.contains("Manage").realHover()
        cy.wait(2000)
        cy.contains("Manage Courses").click()
        cy.xpath("//button[text()='Add New Course ']").click({ force: true })
        cy.get("#thumbnail").attachFile("logo.png")
        cy.get("#name").type(this.jsonData.courseName)
        cy.xpath("//textarea[@id='description']").type(this.jsonData.courseDescription)
        cy.get("#instructorNameId").type(this.jsonData.instructorName, { delay: 300 })
        cy.xpath("//div[@class='intructorsList']//p").each(function (ele) {
            cy.log(ele.text())
            if (ele.text().includes("Mukesh")) {
                cy.wrap(ele).click({ force: true })
            }
        })
        cy.get('#price').type(this.jsonData.price)
        cy.xpath("//input[@name='startDate']").click()
        cy.xpath("//div[contains(@aria-label,'September 24th, 2022')]").click()
        cy.xpath("//input[@name='endDate']").click()
        cy.xpath("//div[contains(@aria-label,'September 30th, 2022')]").click()
        cy.xpath("//div[text()='Select Category']").click()
        cy.xpath("//button[text()='Cypress-Raghav']").click()
        cy.xpath("//button[text()='Save']").click()

    });
});