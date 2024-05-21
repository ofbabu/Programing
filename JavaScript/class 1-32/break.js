

for(var i = 0; i<=10; i++){
    if(i==5){
        console.log("break Now")
    }
    console.log(i)
}

for(var i = 0; i<=10; i++){
    if(i==5){
        console.log("break Now")
        break
    }
    console.log(i)
}

for(var i = 0; i<=10; i++){
    if(i==5){
        console.log("Five")
        continue
    }
    console.log(i)
}