//globsal scope
var name = "omar faruk babu"
console.log(name)

//local scope
function me(){
    var num = "omar faruk 21221";
    console.log(num)
}
me()
// console.log(num) //ata kaj korbe na


//block scope
{
    let u = 'name ki'
    console.log(u)
}
// console.log(u)//ata kaj korbe na