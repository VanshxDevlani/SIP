setInterval(() => {
    console.log("come 121n") 
    
}, 500);


let count = 5;
const timer = setInterval(()=>{
    console.log(count);
    count--;
    if(count < 0){
        clearInterval(timer);
    }
},1000);


//digital clock 
setInterval(()=>{
    let time = new Date();
console.log(time.toLocaleTimeString())
},10000)

