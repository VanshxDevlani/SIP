let arr=[1,2,4,5,6,9];
console.log(arr)


arr.push(20)
arr.push(21)
console.log("after push operation:" +arr)

arr.pop()
console.log("after pop operation:"+arr)

arr.unshift(30)
console.log("after unshift operation:"+arr)

arr.shift(25)
console.log("after shift operation:"+arr)

let arr2 = [11,20,,6,89];

arr.push(arr2);
console.log(arr);

let arr3 = [...arr,...arr2];
console.log(arr3)

let z= 5;
let b=4;
let o=9;
console.log(z,b,o)