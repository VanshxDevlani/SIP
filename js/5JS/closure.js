// function outer(){
//     let x = 1;
//     function inner(){
//         x++;
//         console.log(x);
//     }
//     inner();
// }
// outer();
// outer();
// outer();


// //after using closure
// function outer(){
//     let x = 1;
//     function inner(){
//         x++;
//         console.log(x);
//     }
//     return inner();
// }
// const ans = outer();
// ans ();
// ans ();
// ans ();

//example
function grandfather(){
    var  x = 1;
    return function parent(){
        x++
    return function child(){
        x++
    return function baby(){
        x++
        console.log(x);
     }    
    }    
 }
}
const ans = grandfather();
const ans1 = ans();
const ans2 = ans1();

ans2();
ans2();
ans2();