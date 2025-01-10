// the map method create a new array populated with  the results of calling a prvided function on 
// every element in the calling array

let Numbers = [1,2,3,4,5]
let double = Numbers.map((num) => num*2);
console.log(double);

let peoples = [ 
    {firstName: "vicky", lastName: "kumar"},
    {firstName: "amar", lastName: "kumar"},
    {firstName: "rajesh", lastName: "kumar"},
]

const results = peoples.map(person=>{
    return[person.firstName,person.lastName]
}) 
    console.log(results);

    //1. Create array with random numbers.
    //2.Map over each item in that array, & multiply each item by 10

    let arr = [1,2,3,43,4,2]

    let newArr = arr.map(num=>(num*10))
    console.log(newArr);
        