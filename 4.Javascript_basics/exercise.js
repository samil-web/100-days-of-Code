let name = 'Academind';
let price = '12.99$';
let goals = ['Learn  Js basics','Learn DOM structure','Build application with JS'];

alert(name);
alert(price);
alert(goals);

let groupObject = {'name':name,
                  'price':price,
                  'goals':goals};

console.log(groupObject.name,groupObject.price,groupObject.goals);
console.log(goals[1]);


function myGoals(arr,ident){
    return arr[ident];
}
alert(`Output from fumction myGoals is ${myGoals(goals,1)}`)