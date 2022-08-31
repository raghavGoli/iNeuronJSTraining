class Courses{

constructor(CourseName,Price,Validity,TrainerName,PhoneNumber)
{
    this.CourseName=CourseName
    this.Price=Price
    this.Validity=Validity
    this.TrainerName=TrainerName
    this.PhoneNumber=PhoneNumber
}
    get showDetails()
    {
       return `Thank you for showing interest in ${this.CourseName}` +`- Current Price is  ${this.Price}` + ` and validity of course is till ${this.Validity}` + ` If you have any query then reach out to ${this.TrainerName}` +`mobile - ${this.PhoneNumber}`
    }

    set setShowDetails(CourseName)
    {
        this.CourseName=CourseName
    }

}
let coursesObj1= new Courses("Cypress","$16","3Months","Mukesh",8769564531)
console.log(coursesObj1.showDetails)
coursesObj1.setShowDetails="WebDriverIO"
console.log(coursesObj1.showDetails)