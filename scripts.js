/* 
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
 - Do not use numbers to reference the last element, find it programmatically.
 - ages[7] - ages[0] is not allowed!
b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
c. Use a loop to iterate through the array and calculate the average age.
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// -1 is the last number, 0 is the first
console.log(ages[ages.length -1] - ages[0]);

ages.push(96);

console.log(ages);

// making sure math still works
console.log(ages[ages.length -1] - ages[0]);

// loop to find average of array
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
  }
  const average = sum / ages.length;

  console.log(average);

/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
a. Use a loop to iterate through the array and calculate the average number of letters per name.
b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names.length);

//need to determine total of letters, then divide by number of names

let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;

console.log(averageLetters);   

/* 
3. How do you access the last element of any array? 
   Use the length property of the array and subtract 1 from it. (i.e., names.length(-1)
*/

/* 
4. How do you access the first element of any array?
  Use the name of the array followed by [0]. (i.e., names[0])
*/

/*
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/


let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/

let nameTotals = 0;

for (let i = 0; i < names.length; i++) {
    nameTotals += names[i].length;
}
console.log(nameTotals);

/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/

function repeatedWord(word, n) {
    return word.repeat(n);
}

let string = repeatedWord("Beetlejuice", 3);
console.log(string);

/*
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/

function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Misty", "Klein"));

/*
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/

let numbersArray = [20, 30, 40, 50];

// finding the sum of the array first

let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}
console.log(sum);

// then setting up the function. .reduce is new for me, but was included in so many searches I found.
function isGreaterThan100 (numbers) {
 return numbers.reduce((sum, current) => sum + current, 0) > 100;
}

let result = isGreaterThan100(numbersArray);
console.log(result);

/*
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/

function calculateAverage(numbers) {

    // The reduce() method returns a single value: the function's accumulated result.
    // Accumulator: This contains the value calculated from the previous iteration. On the first iteration, if an initialValue will be provided, the accumulator will be set to the value of initialValue . CurrentValue: The current value of the element is processed in the array.
    
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
      const average = sum / numbers.length;
    
      return average;
    }
    
    const averageResult = calculateAverage(numbersArray);
    console.log(averageResult);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let array1 = [10, 20, 30, 40]
let array2 = [12, 22, 32, 42]

//function
function isAverageGreaterThan(array1, array2) {
   let calculateAverage = (arr) => {
   let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
   return sum / arr.length;
   }

//calculate average of each array 
let average1 = calculateAverage(array1);
let average2 = calculateAverage(array2);

return average1 > average2;
}
let answer = isAverageGreaterThan(array1, array2);
console.log(answer);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let hotOutside = true;
let moneyAvailable = 12;

function willBuyDrink (isHotOutside, moneyInPocket) {
   return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(hotOutside, moneyAvailable));

