// 1. Given an array of numbers, use the map function with an arrow function to square each element of the array.

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// let newArr = arr.map((number) => {
//     return number * number;
// })

// console.log(newArr);

// 2. Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// let marks = prompt("Enter the total marks out of 600");
// let percentage = (marks/600) * 100;
// let grade = (percentage >= 90) ? "A" : (percentage >= 80 && percentage < 90) ? "B" : (percentage >= 70 && percentage < 80) ? "C" : (percentage >= 50 && percentage < 70) ? "D" : "F";

// console.log(`${grade} Grade`);

// 3. Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// let car = {
//     name: "Toyota",
//     model: "Supra",
//     year: 2002
// }
// console.log(`Name = ${car.name}`);
// console.log(`Model = ${car.model}`);
// console.log(`Year = ${car.year}`);



// changeYear = ((car) => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             car.year = 2024;
//             resolve("Success");
//         } , 3000);
        
//     })
// });

// (async function functionCall(){
//     await changeYear(car);
//     console.log("After changing Year");
//     console.log(`Name = ${car.name}`);
//     console.log(`Model = ${car.model}`);
//     console.log(`Year = ${car.year}`);

//     let {model , year} = car;
//     console.log(`Model = ${model}`);
//     console.log(`Year = ${year}`);
// })();


// 4. Given an array of numbers, use the filter function to create a new array containing only the prime numbers.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// let count = 0;
// let primeNumbers = arr.filter((num) => {
//     for(let i = 2; i<num ; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     if(num == 1){
//         return false;
//     }
//     return true;

// })

// console.log(primeNumbers);


// 5. State different use cases of map, filter and reduce functions.


// let arr = [10, 24, 37, 40, 50, 60, 75, 80, 97, 100];
// // Map Function
// let mapArray = arr.map((num) => {
//     return num + num;
// })
// console.log("Using map.....");
// console.log(mapArray);

// //filter function
// let filterArray = arr.filter((num) => {
//     return num % 10 == 0;
// })
// console.log("Using filter.....");
// console.log(filterArray);

// //reduce function
// let reduceNumber = arr.reduce((prev , aft) => {
//     return prev + aft;
// })
// console.log("Using reduce.....");
// console.log(reduceNumber);


// 6. Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

let url = "https://jsonplaceholder.typicode.com/posts/1";

const getData = (async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    console.log(data);
    console.log(`USER ID: ${data.userId}`);
    console.log(`TITLE: ${data.title}`);
    console.log();
})();

