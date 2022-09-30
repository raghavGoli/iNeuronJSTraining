describe('ineuronCoursesAddition', function()  {

    beforeEach(function()  {
        cy.fixture("example").then(function(jsonData){
            this.jsonData=jsonData;
        })
    })

    it('Go to ineuron site and add new new courses', function()  {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input#email1").type(this.jsonData.username).should("have.value", this.jsonData.username)
        cy.get("input#password1").type(this.jsonData.password).should("have.value", this.jsonData.password)
        cy.get("button.submit-btn").should("be.visible").should("be.enabled").click()
        cy.contains("Sign out").should("be.visible").should("be.enabled")
        cy.contains("Manage").realHover()
        cy.wait(2000)
        cy.contains("Manage Courses").click()
        cy.xpath("//table[contains(@class,'courses-table')]//tbody//tr").should("have.length", 1)
        cy.xpath("//button[text()='Add New Course ']").click({ force: true })
        cy.get("#thumbnail").attachFile("samplepark.jpg")
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
        cy.xpath("//button[text()='Testing']").click()
        cy.xpath("//button[text()='Save']").click()
        cy.xpath("//table[contains(@class,'courses-table')]//tbody//tr").should("have.length", 2)
        cy.xpath("//td[normalize-space()='RaghavCourse234']//following::button[@class='action-btn delete-btn'][normalize-space()='Delete']").click();
        cy.wait(12000)
        cy.xpath("//table[contains(@class,'courses-table')]//tbody//tr").should("have.length", 1)
    })
})