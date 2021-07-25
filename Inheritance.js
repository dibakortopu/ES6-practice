class Parent{
    constructor(){
        this.FatherName = "Dinesh";
    }
}
class Child extends Parent{
    constructor (Name){
        super();
        this.Name = Name;

    }
    getFullName(){
        return this.Name +" "+ this.FatherName;
    }
}
const baby = new Child("Topu")
const baby2 = new Child("Toma")
console.log(baby.getFullName());
console.log(baby2.getFullName());