
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


//The following is the code copied from the previous lab to get the array needed for part 2 of this lab
const data ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let array = data.split(`\n`)
let newArray1 = array[0].split(',');
let newArray2 = array[1].split(',');
let newArray3 = array[2].split(',');
let newArray4 = array[3].split(',');
let newArray5 = array[4].split(',');
combinedArray = [newArray1, newArray2, newArray3, newArray4, newArray5];
obj1 = {};
for(const key in newArray1) {
    obj1[newArray1[key]] = `${newArray2[key]}`;
}
obj2 = {};
for(const key in newArray1) {
    obj2[newArray1[key]] = `${newArray3[key]}`;
}
obj3 = {};
for(const key in newArray1) {
    obj3[newArray1[key]] = `${newArray4[key]}`;
}
obj4 = {};
for(const key in newArray1) {
    obj4[newArray1[key]] = `${newArray5[key]}`;
}
arrayObjects =[obj1,obj2,obj3,obj4];
arrayObjects.pop();
newObj4 = {
    ID: '7', 
    Name: 'Bilbo', 
    Occupation: 'None', 
    Age: '111'};

    arrayObjects.push(newObj4);
console.log(arrayObjects);

//Part 2: sort by age
arrayObjects.sort((a, b) => a.Age -b.Age);
console.log(arrayObjects);

//filter the array to remove entries with an age greater than 50

let youngArray = arrayObjects.filter(element=>element.Age <50);
console.log(youngArray);

//change the section for occupation to read job using map
//Also adding the age by 1
function keySwitch() {
jobArray = youngArray.map(function (obj) {
    obj['Job'] =obj['Occupation'];
    delete obj['Occupation'];
    obj.Age =Number(obj.Age) +1;
    return obj;
});
console.log(jobArray);
}
keySwitch();

//use the reduce methode to calulate the sum of the ages, calculate the average.

let initialValue =0;
let totalAge = jobArray.reduce((accumulator, currentValue) => accumulator +currentValue.Age, initialValue,);
console.log('Total age is: '+totalAge);
console.log('Average age is: '+(totalAge/jobArray.length))

//Part 3:
//take an object and increment its age field with a function

function oneMoreYear(arr) {
    arr.map(function(obj) {
        obj.Age =obj.Age +1;
        return obj;
    });
console.log(arr)
}
oneMoreYear(jobArray);

//make a copy of an object, make a copy then increment the age field by one.

let jobArrayCopy = JSON.parse(JSON.stringify(jobArray));
//increment the new array by one, I'm using the function I already wrote
oneMoreYear(jobArrayCopy);
console.log('below is the original array before copy and age increment')
console.log(jobArray);