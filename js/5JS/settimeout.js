
// setTimeout(()=>{

// console.log("you are the best")
// },5000)

// setTimeout(() => {
//     console.log("kahi chale kya!")
// }, 1000);
// setTimeout(() => {
//     console.log("kaha  !")
// }, 2000);
// setTimeout(() => {
//     console.log("jaha aap bolo!")
// }, 3000);

//pyramid way 
setTimeout(() => {
      console.log("kahi chale kya!")
  setTimeout(()=>{
        console.log("kaha  !")
   setTimeout(()=>{
        console.log("jaha aap bolo!")
setTimeout(()=>{
    console.log("manali")
},1000)
   },1000)
  },1000)
}, 1000);