let count = 8
let time = setInterval(() => {
    console.log("bomb is about to blast")
    console.log(count)
    count--;
    if(count<1){
        clearInterval(time)
        setTimeout(()=>{
            console.log("bomb blasted")
        },1000)
    }
}, 1000)