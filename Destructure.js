const person = {name:'Dibakor', age: 25, job: 'faceBooking', gfName: 'NoGirlFriend', address:'SultanBuilding', phoneNumber:'01729967530', friends: ['rakib','manik','miner','topu']};
/* const age = person.age;
const gfName = person.gfName; */
const {gfName, age, job, address, salary} = person;
/* console.log(age, gfName, salary);
console.log(gfName, age, salary); */
 

const friend = ['sakib Khan', 'Imran Khan', 'Amir Khan', 'Sharuk Khan','Salman Khan'];
const [First, last, ...RestFriend] = friend;
//console.log(RestFriend);


const complexObject = {
    name : 'abc',
    info : {
        address : 'Chittagong',
        Leader : 'Tiger'

    }
}
const Leader = complexObject.info;
console.log(Leader);