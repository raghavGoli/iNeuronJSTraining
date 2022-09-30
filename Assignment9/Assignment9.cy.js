const testValueFixture = [

    {
        "name": "user1",
        "context": "1"
    },
    {
        "name": "user2",
        "context": "2"
    },
    {
        "name": "user3",
        "context": "3"
    },
    {
        "name": "user4",
        "context": "4"
    },
    {
        "name": "user5",
        "context": "5"
    }

]

describe('Create 5 user using data driven test in Cypress', function () {

    testValueFixture.forEach(function (fixtureData) {


        describe(fixtureData.context, function () {


            before(function () {

                cy.fixture(fixtureData.name).then(function (testData) {
                    this.testData = testData
                })
            })

            it("Login to application", function () {
                cy.visit("https://ineuron-courses.vercel.app")
                cy.contains("Log in").click()
                cy.contains("New user? Signup").click()
                cy.get('input#name').type(this.testData.name)
                cy.get('input#email').type(this.testData.email)
                cy.get('input#password').type(this.testData.pass)
                cy.contains(this.testData.interest).click({force:true})
                cy.contains(this.testData.gender).click({force:true})
                cy.get('select#state').select(this.testData.state).should('have.value', this.testData.state)
                cy.contains('Sign up').click()
                cy.wait(5000)
                cy.get('input#email1').type(this.testData.email)
                cy.get('input#password1').type(this.testData.pass)
                cy.contains('Sign in').click({force:true})
                cy.get('h4.welcomeMessage').should("be.visible")
            
            
            })

        })

    })



















});

