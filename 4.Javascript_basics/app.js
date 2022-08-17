alert('Hi I\'m Shamil');
let age = 21;
alert(`My age is ${age}`);
age =32;
alert(`My age will be ${age} in 2033`); 

const firstName = 'shamil';
const lastName = 'aliyev';

const output = `name: ${firstName}, surname: ${lastName}`;1

let username = `This 
type of
quotes lets us
divide one statement into lines`;

let hobbies = ['Swimming','Boxing','Reading'];

let myPersonalInfo = {
name:'Shamil',
age:'21',
profession:'Student'};

alert(hobbies[1]);
alert(myPersonalInfo.profession);

let adultYears = age-18;
alert(`I have turned into adult since ${adultYears} years`)

let afterChildhoodYears;

function calculateYears(userAge){
    let result;
    result = userAge - 13;
    return result;
}

afterChildhoodYears = calculateYears(age);
alert(afterChildhoodYears);
