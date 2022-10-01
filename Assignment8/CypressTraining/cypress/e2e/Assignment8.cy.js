describe('Task 1- Task 1- Create category using cypress with data from fixture', function() {

    before(function()  {
        cy.fixture("CourseCategor").then(function(jsonfixtureData){
            this.jsonfixtureData=jsonfixtureData;
        })
    })

    it('Create course using cypress with data from fixture', function() {
        cy.visit(this.jsonfixtureData.url)
        cy.login(this.jsonfixtureData.username,this.jsonfixtureData.password)
        cy.get('.submit-btn').should("be.enabled").click()
        cy.contains("Manage").realHover()
        cy.wait(2000)
        cy.contains("Manage Categories").invoke("removeAttr","target").click({force:true})
        cy.wait(5000)
        cy.window().then(function (win) {
            cy.contains("Add New Category").click({force:true})
            cy.stub(win, "prompt").returns(this.jsonfixtureData.categoryName)
            
        })
        cy.contains(this.jsonfixtureData.categoryName).should("be.visible")
        cy.logout("Sign out")
    })
})