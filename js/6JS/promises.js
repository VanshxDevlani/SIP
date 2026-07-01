// // creating a promise 
// const orderfood = new Promise((res , rej) =>{
//     const delivered= false;

//     if(delivered){
//         res("food delivered");
//     }else{
//         rej("order cancelled");
//     }
// });

// //consuming a promise 
// orderfood
// .then((result)=>{
//     console.log(result);
// })
// .catch((error) =>{
//     console.log(error);
// });


//example 1
// let connection = new Promise((re,rej)=>{
//     console.log("connect ho raha hai ...")
//         console.log("wait ...")
//         setTimeout(()=>{
//             console.log("connect ho gaya")
//             re()
//         }, 3200)
// })

// connection 
// .then(()=>{
//     console.log("promise fullfilled");
// })
// .catch(()=>{
//     console.log("promise rejected");
// })

//or 3nd way 
function connection (){
    return new Promise ((res,rej)=>{
        console.log("connecting")
        console.log("wait")
        setTimeout(()=>{
            res("connect ho gaya,")
        },3000)
    })
}
connection()
.then((msg)=>{
    console.log(msg,"promise fullfilled")
})
.catch((msg)=>{
    console.log(msg,"promise not fullfilled")
})