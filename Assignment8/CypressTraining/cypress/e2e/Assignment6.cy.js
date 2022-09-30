describe('Task 1- Create course using cypress with data from fixture', function() {

    before(function()  {
        cy.fixture("CourseData").then(function(jsonfixtureData){
            this.jsonfixtureData=jsonfixtureData;
        })
    })

    it('Create course using cypress with data from fixture', function() {
        cy.visit(this.jsonfixtureData.url)
        cy.login(this.jsonfixtureData.username,this.jsonfixtureData.password)
        cy.get('.submit-btn').should("be.enabled").click()
        cy.contains("Manage").realHover()
        cy.wait(2000)
        cy.contains("Manage Courses").click({force:true})
        cy.xpath("//button[text()='Add New Course ']").click({ force: true })
        cy.xpath("//button[text()='Save']").click()
        cy.xpath("//h2[normalize-space()='Please select a thumbnail!']//*[name()='svg']").should('be.visible')
        cy.get("#thumbnail").attachFile("logo.png")
        cy.get("#name").type(this.jsonfixtureData.courseName)
        cy.xpath("//textarea[@id='description']").type(this.jsonfixtureData.courseDescription)
        cy.get("#instructorNameId").type(this.jsonfixtureData.instructorName, { delay: 1000 })
        cy.xpath("//div[@class='intructorsList']//p").each(function (ele) {
            if (ele.text().includes(this.jsonfixtureData.instructorName)) {
                cy.wrap(ele).click({ force: true })
            }
        })
        cy.get('#price').type(this.jsonfixtureData.price)
        cy.xpath("//input[@name='startDate']").click()
        cy.xpath("//div[contains(@aria-label,'September 24th, 2022')]").click()
        cy.xpath("//input[@name='endDate']").click()
        cy.xpath("//div[contains(@aria-label,'September 30th, 2022')]").click()
        cy.xpath("//div[text()='Select Category']").click()
        cy.xpath("//button[text()='Testing']").click()
        cy.xpath("//button[text()='Save']").click()
        cy.contains("JSAutomationTools").should('be.visible')
        cy.xpath("//td[text()='JSAutomationTools']/preceding-sibling::td/input").click({force:true})
        cy.xpath("//td[text()='JSAutomationTools']/parent::tr//button").click()
        cy.wait(2000)
        cy.xpath("//td[text()='JSAutomationTools']/preceding-sibling::td/input").should('not.exist')       
    })
})