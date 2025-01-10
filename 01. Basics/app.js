// (reserved  keyword) ( variable name) (type of value)
// declared variale
// let name;
//  //assign value
//  let banana;
// banana = "mango"

// console.log(banana);

// let vickyKumar = "variable";
// console.log(vickyKumar);
// console.log(typeof vickyKumar);

//----------------------------------------

// Basic math

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(4 ** 2);

//--------------------------------------

// let counter = 10;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter--;
// counter--;
// console.log(counter);

//----------------------------------------------

// let firstFavNum = 21;
// let secondFavNum = 7;
// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum - secondFavNum);
// console.log(firstFavNum * secondFavNum);
// console.log(firstFavNum / secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum ** secondFavNum);

//------------------------------------------------

//Boolean -> true // false

// let isTrue1 = false;
// console.log(isTrue1);
// let isTrue2 = true;
// console.log(isTrue2);
// let isTrue3 = NaN;
// console.log(isTrue3);

//-----------------------------------

//falsy values

//-> false
// -> null
// -> undefined
// -> 0
// -> -0
// -> NaN
// -> '', "", (empty quotes)

//--------------------------------------------

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 21;
// console.log(isJsProgrammingLanguage);
// console.log(isJsHard);
// console.log(favNumb + undefined);

//-------------------------------------------
//comparison operators
// -> Relational operators
// < Less than
// >= Greater than or equal to
// <= Less than or equal to

// console.log(10 > 10 ); // true || false?
// console.log(10 < 10 ); // true || false?
// console.log(10 <= 10 ); // true || false?
// console.log(10 >= 10 ); // true || false?

//-------------------------------------------------

//Equality operator
// === strict equality (type + value)
//  strict non-equality (type + value)
// loose equality operator (value)
// loose not equality operator (value)

// console.log(10===10);
// console.log(10===20);
// console.log(10!==20);
// console.log(10==10);
// console.log(10=="10");
// console.log(10!=10);

//------------------------------------------------

// Strings
let firstName = "     Vicky     ";
let secondName = "yadav";
// let fullName = firstName + " " + secondName;
// console.log(fullName);

//1. Concatination
// let fullName = firstName.concat(secondName);
// console.log(fullName);

//2. Append
// firstName += "soemthing else";
// console.log(firstName);

//3. Length
// console.log(firstName.length);

//4. Cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

//5. Slice
// console.log(firstName.slice(0,3));

//6. Split & join
// console.log(firstName.split('').join("-"));

//7. Include
// console.log(firstName.includes("c"));

//8. Trim
// console.log(firstName.trim());

// let favActorFirstName = "danarys";
// let favActorLastName = "targerian";
// let fullName = favActorFirstName + " " + favActorLastName;
// let uppercase = fullName.toUpperCase();
// let message = `My favourite actor is ${uppercase}, `;
// message += `his best tv show is game of thrones`;
// console.log(message);

//------------------------------------------------------------------

//Type conversion
// let money = "50";

// - Convert number to string
// money = money.toString();
// money = String(money);

// console.log(money);
// console.log(typeof money);


let money = '50.245';
// - Convert string to decimal
money = parseFloat(money);

console.log(money);
console.log(typeof money);