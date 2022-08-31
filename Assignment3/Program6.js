export class Courses{

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

export let coursesObj1= new Courses("Cypress",'$12.45',"3Months","Mukesh","8769564531")

export let coursesObj2= new Courses("WebDriverIO",'$12.45',"3Months","Mukesh","8769564531")
console.log(coursesObj2.showDetails);
export let coursesObj3= new Courses("PlayWright",'$15.45',"LifeTime","Mukesh","8769564531")

