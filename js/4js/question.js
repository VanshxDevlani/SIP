// let arr = [-2,3,5,4,-90]
// const ans = arr.map(i => i+2).filter(i => i>0).reduce((sum,item)=>sum+item ,0);
// console.log(ans)

// //Que 1 
// const prices = [1000 , 2000, 3000];
// const discountedprice =prices.map(prices=> prices-prices*0.1);
// console.log(discountedprice)

// //Que 2
// const users = [
//  { id: 1, name: "Sameer" },
//  { id: 2, name: "Rahul" },
//  { id: 3, name: "Amit" }
// ];
// const names = users.map(users=>users.name);
// console.log(names)

// //Que3
// const products = [
//  { name: "Laptop", price: 50000 },
//  { name: "Phone", price: 30000 }
// ];
// const summary = products.map(products=>`${products.name} -  ${products.price}`);
// //or
// // const summary= products.map(products=>({name :products.name , price: products.price}));
// console.log(summary)

// //Que4 
// const Products = [
//  { name: "Laptop", price: 50000 },
//  { name: "Mouse", price: 500 },
//  { name: "Phone", price: 30000 }
// ];
// const expensive = Products.filter(products =>products.price>20000 );
// console.log(expensive)

//Que5
const Users = [
 { name: "Sameer", active: true },
 { name: "Rahul", active: false },
 { name: "Amit", active: true }
];
const activeuser = Users.filter(Users =>Users.active>=1);
console.log(activeuser)

//Que 6
const products = [
 "iPhone",
 "HeadPhone",
 "Laptop",
 "Phone Case"
];
const search = products.filter(products => products.includes("Phone"));
console.log(search)

//que 7
const prices = [1000, 2000, 3000];
const total = prices.reduce((sum,item)=>sum+item);
console.log(total)