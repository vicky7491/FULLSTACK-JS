// the filter method is built in array method in javascript that allows us to create new array containing elements that pass a certain condition.
// it provide a clean and concise  way to filter out elements form an array based in a specified criteria.

const songs = [
    {
      songName: "Tum Hi Ho",
      duration: 4.22 
    },
    {
      songName: "Love Story",
      duration: 3.55 
    },
    {
      songName: "Shape of You",
      duration: 4.24 
    },
    {
      songName: "Sun Saathiya",
      duration: 3.45 
    },
    {
      songName: "Hello",
      duration: 4.55 
    }
  ];
 console.log(songs.filter((song) => song.duration > 4))


//challenge
 const computers = [
    {ram: 4, hdd: 500},
    {ram: 8, hdd: 40000},
    {ram: 12, hdd: 1000},
    {ram: 32, hdd: 50000},
 ]
 console.log(computers.filter(comp => comp.ram>11));


 //challenge
 const ages = [32,17,22,19,18,50,90]
//solution
 function checkAdults(age) {
    return(age>18)
 }
 const verification = ages.filter(checkAdults)
 console.log(verification);
//  console.log(ages.filter(verify=> verify>=18));


//challange
//1. iterate over "words" array
//2. Prints only those words which length is greater than 6
const words = ["hello", "world", "javascript", "coding", "array", "strings", "example", "learning", "fun", "create"];

const result = words.filter((word)=> word.length >6)

console.log(result);


 
 