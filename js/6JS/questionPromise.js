// function login(email,passward){
//     return new Promise((res,rej)=> {
//         console.log("credientials are being verified");

//         setTimeout(()=>{
//             if (email=="test@gmail.com" && passward=="123"){
//                  res({
//                 id:1,
//                 Name:"vansh"
//             })
//         }
//         else{
//             rej("invalid credentials")
//         }
//     },3000)
//     })
// }

// login("test@gmail.com", "123")
// .then((userdata)=>{
//     console.log(userdata);
//     return userdata
// })
// .then((data)=>{
//     console.log(data)
//     return data.id
// })
// .then((info)=>{
//     console.log(info)
// })
// .catch((err)=>{
//     console.log(err)
// })


//example 2
function loginuser(profile){
    console.log("you are being logged in")

    setTimeout(()=>{
        console.log("you are loged in ")
    },1000)
    profile();
}

function getprofile(order){
    console.log("your profile is being fetched")

    setTimeout(()=>{
        console.log("your profile is fetched")
    },1000)
    order();
}
function getorder(pay){
    console.log("your order is being prepared")

    setTimeout(()=>{
        console.log("order is prepared")
    },1000)

}

function payment (){
    console.log("payment is under processing"  )

    setTimeout(()=>{
        console.log("patment successful")
    },1000)
}

loginuser(()=>{
    getprofile(()=>{
        getorder(()=>{
            payment();
        });
    })
})



// //question: 1] Create a promise that simulates food delivery.
// // - Delivery takes 2 seconds.
// // - If food is available, resolve with "Pizza delivered".
// // - Otherwise, reject with "Order cancelled".

// function delivery(food){
//     return new Promise((res,rej)=>{
//         console .log("food is being prepared");

//         setTimeout(()=>{
//             if(food==available){
//                 res(
//                     console.log = ("pizza delivered")
//                 )
             
//             }else{
//                 rej(
//                     console.log=("order cancelled")
//                 )
//             }
//         },2000)
//     })
// }

// delivery(available)
// .then( (successfull)=>{
//     console.log (successfull);
// })
// .catch((fail)=>{
//     console.log(fail);
// })

