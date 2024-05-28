/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
// function reverseString(str) {
//     const strArray = str.split("");
//     const revArray = strArray.reverse();
//     const revString = revArray.join("");
//     return revString;
//   }
  
//   function reverseString2(str) {
//     return str.split("").reverse().join("");
//   }
  
//   function reverseString3(str) {
//     let revString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       revString += str[i];
//     }
//     return revString;
//   }
  
//   function reverseString4(str) {
//     if (str === "") return "";
//     else return reverseString4(str.substr(1)) + str.charAt(0);
//   }
  
//   function reverseString5(str) {
//     return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
//   }
  
//   console.log(reverseString("!dlroW olleH"))
//   console.log(reverseString2("!dlroW olleH"))
//   console.log(reverseString3("!dlroW olleH"))
//   console.log(reverseString4("!dlroW olleH"))
//   console.log(reverseString5("!dlroW olleH"))

//take an array of numbers and return the sum

let numArray = [2, 5 ,8 ,55 ,12 , 30];
// let sum=0;
// for (let i=0;i<numArray.length;i++) {
// sum+=numArray[i]} 
// console.log(sum)
//This is the way I would do this if I didn't have to turn it into a function

function grandTotal(){
newSum=0;
for (let i=0;i<numArray.length;i++) {
        newSum+=numArray[i];
    } 
    console.log(newSum);
}
grandTotal();

//take an array of numbers and return the average
function average(){
    console.log(newSum/numArray.length);
}
average();

let itemArray= ["Apple", "Peach", "Strawberry", "Banana", "Plum"]
//take an array of strings and return the longest item

// function longestItem (str) {
//     let longest = "";
//     for(key in str) {
//         if(str[key] ===undefined) break;
//         else if(str[key].length>str[key-1].length){
//         longest=str[key];
//         } ;
// } console.log(longest);

// }

function longestItem(str){
    let arrayExample =[];
    for(let element of str) {
      arrayExample.push(element.length);
    }
    return Math.max(...arrayExample);
   
}
console.log(longestItem(itemArray)) //this came up as 10, which is item 3
console.log(itemArray[2])

//take an array of strings and a number, return if the sting is greater than the number

newArrayItems=['blue', 'green', 'orange', 'red', 'black', 'crimson']
function longItems (str){
 let arrayExample=[];
 let randomNum=4;
 for (let element of str) {
    if(element.length > randomNum)
        {arrayExample.push(element);}
 } console.log(arrayExample);
}
longItems(newArrayItems);

//find out how to count down with recusrion
n=17;
function recursion (startNum) {
    console.log(startNum);
    let nextNum = startNum -1;
    if(nextNum >0){
        recursion(nextNum);
    }

}
recursion(n);



