//find()

// the find() method is another built in array helper in javascript that allows  
// you to find  the first element  in an array that matches a specific condition.
//  It returns  the value of  the first  element that satisfies  the given  given 
// testing  or undefined  of no  element  is found. 


const computers = [
    {ram: 4, hdd: 500},
    {ram: 8, hdd: 40000},
    {ram: "shyam", hdd: 454540},
    {ram: "shyam", hdd: 10},
    {ram: 32, hdd: 50000},
    {ram: 12, hdd: 254500},
    
 ];

 const result = computers.find((parts)=> parts.ram =="shyam")
 console.log(result);

 const post = [
    {id:1, content: "good post"},
    {id:2, content: "funny post"},
    {id:3, content: "good post"},
    {id:4, content: "bad post"},
    {id:5, content: "funny post"},
 ]
 
 const postResult = post.find((output)=> output.content=="funny post")
 console.log(postResult);
 