class Student {
    constructor(Id , Name){
        this.id = Id;
        this.name = Name;
        this.university = "Southern University Bangladesh";
    }

}


const student1 = new Student(31, "Topu");
const student2 = new Student(12, "Manik");
const student3 = new Student(14, "Miner");
console.log(student1.id,student2.name);