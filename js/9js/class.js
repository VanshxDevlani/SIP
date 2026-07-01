class person {
    constructor(name) {
        this.name = name;
    }
     
greet(){
    console.log('hello ${this.name}');
}    
}

class student extends person {
    constructor(name, course){
        super(name);
        this.course = course;
    }

study(){
    console.log('${this.name} studies ${this.course}');
}    
}

const details = new student (
    "vansh", "mern"
);

// student.greet();
// student.study();