//que 1
function one(){
    console.log("hello sammer")
}
one()

//que 2 
let price = 500;
let qty = 3;
let totalprice = price*qty;
console.log ("total price=",totalprice);

//que 3
function calculatedeliveryfee(fee=40){
    console.log("delivery fee = ₹"+fee)
}
calculatedeliveryfee()

//Que 4
function checkvoteeligiblity(age){
    if (age>=18){
        console.log("you are eligible to vote");
    }else{
        console.log("you are not eligible to vote");
    }
}
checkvoteeligiblity(21)

//Que 5
let discountcalculator = function(price,discount){
    let finalprice = price - discount;
console.log("final price=₹",finalprice);
}
discountcalculator(2000,500)

//Que 6
const converttodollars = (rupee)=>{
    let dollars = rupee/90;
    console.log("$"+ dollars);
}
converttodollars(8300)