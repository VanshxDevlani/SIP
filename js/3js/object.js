let student = {
    name : "vansh",
    age: 21,
    course: "BCA",
    sem:5,
    skills:"learner ,good humen"
}
//print object
console.log(student);

//get value
console.log(student.name);
//or
console.log(student["age"]);

// //update values
student.skills="intutive,progresive";
console.log(student);

// //adding new value to object
student.city="indore"
console.log(student);

//add a function to object 
student.greet=function(){
    console.log("hello")
}
console.log(student.greet());



// let resume={
//     name:"vansh",
//     age:20,
//     city:"indore"
// }
// // console.log(resume);

// resume.course=function(){
//     console.log("bca")
// }
// console.log(resume.course());

// const products= [
//     {
//         id=1,
//         name=laptop,
//         price=50000
//     }
//     {
//         id=2,
//         name=watch,
//         price=1500
//     }
//     {
//         id=3,
//         name=shirt,
//         price=1000
//     }
// ];
