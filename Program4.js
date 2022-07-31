function calculateEMI(interest,principle,tenure)
{
    let result=((1+interest)**tenure)/((1+interest)**tenure)-1
    let finalResult=result*principle*interest
    return finalResult
}
console.log(calculateEMI(7,4000000,300));