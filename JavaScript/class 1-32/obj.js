
// ----------Objects----------

// var MyInfo = {
//     MyName:"Omar Faruk",
//     MyAddress: "mirpur1",
//     MyPh: 01768838715
// }
// console.log(MyInfo)
// console.log(MyInfo.MyPh)

// var MyInfo = {
//     MyName:"Omar Faruk",
//     MyAddress: "mirpur1",
//     MyPh: 01768838715
// }
// var home = MyInfo["MyAddress"]
// console.log(home)

function Info(name,address,phone,){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.showme = function(){
        console.log(this.name)
        console.log(this.address)
        console.log(this.phone)
    }
}
//  var omar = new Info("omar","gaibandha",01775000687)
//  var babu = new Info("babu","bn",01775000687)
//  console.log(omar)
//  console.log(omar.phone)
//  omar.showme();
//  babu.showme();
//  babu.showme();