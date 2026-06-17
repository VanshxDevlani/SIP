function greet(){
    console.log("hello");
}
function processuser(callback){
    callback();
}
processuser(greet);

// function(greet){
//     console.log("hello")
// }
// function processuser(callback, name){
//     callback();
//     return name;
// }
// processuser(greet, "vansh");
// console.log(processuser (greet,"vansh"))

function paymentsuccess(){
    console.log("payment successfull");
}

function paymentprocessing(amount,msg){
    console.log(`${amount}amt deducted from your account`);
    msg()
}
paymentprocessing(12000,paymentsuccess);