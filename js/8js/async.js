// //print good morning 
// function morning (){
//     return new Promise ((res ,rej) => {
//        let greet = false;
//        if (greet){
//         res("good morning");
//     }else{
//         rej("bad morning");
//     }
//     })
// }
// morning()
// .then((result)=>{
//     console.log("good morning");
// })
// .catch((err)=>{
//     console.log("bad morning");
// })

// async function print (){
//     try{
//         const msg = await morning();
//         console.log(msg);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// print()


// example 1
// let connection = new Promise((res ,rej ) => {
//     console.log("connecting to database..")
//     console.log("wait for a while")
//     setTimeout(() => {
//         console.log("connected");
//         res()
//         res ()
//     },2000)
// })
// async function output (){
//     try{
//         const msg = await connection;
//         console.log = (msg);
//     }
//     catch(err){
//         console.log = (err);
//     }
// }output()

//example 2

// function login(email, passward){
//     return new Promise((res,rej)=> {
//         console.log("credientials are being verified");

//         setTimeout(()=>{
//             if (email=="test@gmail.com" && passward=="123"){
//                  res("vansh")
//         }
//         else{
//             rej("invalid credentials")
//         }
//     },3000)
//     })
// }
// async function output(){
//     try{
//         const msg = await login("test@gmail.com", "123");
//         console.log(msg);
//     }
//     catch(err){
//         console.log =(err);
//     }
// }
// output()

//example 3
// function loginuser(){
//     console.log("you are being logged in")

//     setTimeout(()=>{

//         console.log("you are loged in ")
//     },4000)
// }

// function getprofile(){
//     console.log("your profile is being fetched")

//     setTimeout(()=>{
//         console.log("your profile is fetched")
//     },3000)
// }
// function getorder(pay){
//     console.log("your order is being prepared")

//     setTimeout(()=>{
//         console.log("order is prepared")
//     },2000)

// }

// function payment (){
//     console.log("payment is under processing"  )

//     setTimeout(()=>{
//         console.log("patment successful")
//     },1000)
// }

// async function output(){
//     try{
//         await loginuser() ;
//         await getprofile();
//         await getorder();
//         await payment();

//     }
//     catch{
//       console.log("smt went wrong")
//     }
// }
// output()

//example 4
// function movieselection() {
//     return new Promise((res, rej) => {
//         console.log("you are selecting a movie")

//         setTimeout(() => {
//             console.log("your movie is selected")
//             res("your movie is selected")
//         }, 1000)
//     })
// }

// function seatselection() {
//     return new Promise((res, rej) => {
//         console.log("you are selecting seats")

//         setTimeout(() => {
//             console.log("your seats are selected")
//             res()
//         }, 2000)
//     })
// }
// function payment() {
//     return new Promise((res, rej) => {
//         console.log("your payment is in progress")

//         setTimeout(() => {
//             console.log("payment successfull")
//             res()
//         }, 3000)
//     })
// }

// function ticket() {
//     return new Promise((res, rej) => {
//         console.log("generating tickects")

//         setTimeout(() => {
//             console.log("tickects generated😊👍🎶 ")
//             res()
//         }, 3000)
//     })
// }

// async function output(){
//     try{
//         const data = await movieselection()
//         await seatselection()
//         await payment()
//         await ticket()
//         console.log (data)
//     }
//     catch {
//         console.log("an unknown error occured");
//     }
// }
// example 5 OTP verification
function verifynumber(num){
    return new Promise((res,rej) =>{
        console.log("your number is under verification");
        setTimeout(() => {
            if (num == 7987355885){
                console.log("your no.is verified")
                res();
            }
            else{
                rej("you are galat")
            }
        },2000)
    })
}

function verifyOTP(userOTP ,actualOTP){
    return new Promise ((res , rej) =>{
        console.log("otp under verification");
        setTimeout(() => {
            if (userOTP == actualOTP){
                console.log("otp verified")
                res();
            }
            else{
                rej("invalid otp entered")
            }
        }, 3000)
    })
}

async function login() {
    try {
        const otp = await verifynumber(7987355885)
        const welcome = await verifyOTP(1895,otp);
    }
    catch(err){
        console.log(err)
    }
}
login()