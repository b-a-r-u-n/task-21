// Given an array of numbers, use the map function with an arrow function to square each element of the array.

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// let newArr = arr.map((number) => {
//     return number * number;
// })

// console.log(newArr);

// Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// let marks = prompt("Enter the total marks out of 600");
// let percentage = (marks/600) * 100;
// let grade = (percentage >= 90) ? "A" : (percentage >= 80 && percentage < 90) ? "B" : (percentage >= 70 && percentage < 80) ? "C" : (percentage >= 50 && percentage < 70) ? "D" : "F";

// console.log(`${grade} Grade`);

// Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

let car = {
    name: "Toyota",
    model: "Supra",
    year: 2002
}
console.log(`Name = ${car.name}`);
console.log(`Model = ${car.model}`);
console.log(`Year = ${car.year}`);



changeYear = ((car) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            car.year = 2024;
            resolve("Success");
        } , 3000);
        
    })
});

(async function functionCall(){
    await changeYear(car);
    console.log("After changing Year");
    console.log(`Name = ${car.name}`);
    console.log(`Model = ${car.model}`);
    console.log(`Year = ${car.year}`);

    let {model , year} = car;
    console.log(`Model = ${model}`);
    console.log(`Year = ${year}`);
})();



