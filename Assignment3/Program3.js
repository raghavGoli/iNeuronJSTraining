class Courses{

constructor(CourseName,Price,Validity,TrainerName,PhoneNumber)
{
    this.CourseName=CourseName
    this.Price=Price
    this.Validity=Validity
    this.TrainerName=TrainerName
    this.PhoneNumber=PhoneNumber
}
    showDetails()
    {
        console.log(`Thank you for showing interest in ${this.CourseName}` +`- Current Price is  ${this.Price}` + ` and validity of course is till ${this.Validity}` + ` If you have any query then reach out to ${this.TrainerName}` +`mobile - ${this.PhoneNumber}`);
    }


}
let coursesObj1= new Courses("Cypress",'$12.45',"3Months","Mukesh","8769564531")
coursesObj1.showDetails()
let coursesObj2= new Courses("",'$12.45',"3Months","Mukesh","8769564531")
coursesObj2.showDetails()
let coursesObj3= new Courses("Selenium",'$15.45',"","Mukesh","8769564531")
coursesObj3.showDetails()
