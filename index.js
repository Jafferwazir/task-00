// ####################### Task 01: sum of all digits of a number. For example, 123 -> 1+2+3=6

// let userInput = prompt("Enter any Number Please!")

// let sum = 0;
// for (let i = userInput.length - 1; i >= 0; i--){

//    sum = Number(userInput[i]) + sum;
// }
// console.log(sum)


// ###################### Task 02 : Sum of the range of 2 numbers. For example, num1=2, num2=5 -> 2+3+4+5=14

// var firstNumber = +prompt("Enter First Number for Range Value!");
// var secondNumber = +prompt("Enter Second Number for Range Value!");

// var diff = secondNumber - firstNumber;

// console.log(diff);
// var arr = []; 

// for(var i = firstNumber; i<= diff+1; i++){

// let arr = [i];
// console.log(arr);
// }

// let sum = 0;

// for(var j= 0; j<=arr.length; j++){
//     sum = arr[i];
//     console.log(sum);
// }

// ###################### Taks 03 : Calculate the average of numbers given in an array.


// let arrayAverage = [10,20,30,40,50];

//    var sum= (arrayAverage[0] + arrayAverage[1] + arrayAverage[2] + arrayAverage[3] + arrayAverage[4])/5;

//    console.log(sum);


// ###################### Taks 04 : Compare strings by count of characters. For example, car and bat are equal. car and care are not.

// var numberOne = prompt("Enter Frist Number to Compare!")
// var numberTwo = prompt("Enter Second Number to Compare!")

// if(numberOne.length === numberTwo.length){

//    alert("First Number is of Equal Length as Second");
// }
// else{
//    alert("Sorry ! the numbres are of not equal Length.")
// }



// ###################### Taks 05 : Swap the string's first and last character. For example, name -> eamn


let firstString = prompt("Enter Any String you want to be Reversed!");

reverseString = "";

for(let i=firstString.length-1; i>=0 ; i--)


{

reverseString = firstString[i];

console.log(reverseString);
    
}

