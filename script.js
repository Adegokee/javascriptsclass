// Introduction
// Adding javascript HTML
// variables
// var, let, const

// var firstName = "Wale";

// var firstName ="Ade"
// console.log(firstName)


// let age = 18
// age = 7
// console.log(age)
// console.log(2 + 2)

// const country = "Nigeria"
// const country = "Canada"
// console.log(country)
//output data
// alert("hello world")
// document.write(firstName)
// console.log(firstName)

//variable rules
//1. cannot start with symbol or number
// _numbers2 = 3 + 5;
// cannot keywords or reserved words
// use meaningful name eg. LoingUser
// case sensitive

// data types
//strings - storing alpha numeric data
// let address = '70c Allen Avenue, Ikeja';
// let fullName = 'Wale Ola';
// console.log(address.length)
//string methods
// console.log(address[0])
//console.log(address[address.length -10])
// console.log(address.slice(10))
//console.log(address.replace('Ikeja', 'Dubai'))
// console.log(address.indexOf('e'))
// console.log(address.lastIndexOf('e'))
// console.log(address.trim())
// console.log(address.split(' '))
// console.log(address.includes('e'))
// console.log(address.toLocaleUpperCase())
// console.log(address.concat(fullName))

//numbers
// let age = 15;
// let salary =  500.123456

// console.log(salary.toFixed(3))
// console.log(salary.toPrecision(3))

//boolean
// let isAdmin =  false;
// console.log(4 < 5)

//array
// let color1 =  'red';
// let color2 = 'green';
// let color3 = 'yellow'

// let new_color= ['blue', 'white']
//  let colors = ['green', 'yellow', 'black']
//  colors.includes('Blue', 3)
//  console.log(colors)
//  for (let i of colors){
//     new_color.includes(i)
//     console.log(i)
//  }
 
//  colors.includes(new_color)
//  console.log(colors)
 //console.log(colors[2])
//colors.pop()
//console.log(colors)
// colors.push("orange")
// console.log(colors);
// colors.reverse()
// console.log(colors);
// colors.sort()
// console.log(colors);

// console.log(colors.join(' '));
// colors.unshift("pink")
// console.log(colors);
// colors.shift()
// console.log(colors);
// colors.splice(1,0, "brown", "purple")
// console.log(colors)

//object
// let employees = {
//     name: "wale",
//     age: 18,
//     state: "Lagos",
//     gender: {
//         option1: "male",
//         option2: "female",
//         LGA:{
//             option1:'Alimosho',
//             option2:'Akoka',

//         }
//     }
    
// };
// console.log(employees.gender.LGA['option2']);
// console.log(employees["age"])
// console.log(employees.state)
// console.log(employees.gender.option2)

//null
// let retirement = null
//undefined
// let visa;
// console.log()

// operators x == y
// x = 15;
// y = 4;
// arithmetic +, -, *, /, %
// console.log(x + y)
// console.log(x - y)
// console.log(x / y)
// console.log(x * y)
// console.log(x % y)

// assignment
 //x -= y
// console.log(x)

// comparison
//console.log(x === y);
// console.log(x)
// console.log(y)
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x === y);
// console.log(x != y);
// console.log(x !== y);

// logical &&, ||, !
// console.log(! (4 > 5))

// console.log((2 > 3) && (5 > 2))
// console.log((3 > 1) || (1 > 2))

// ternary

// let score = 49
// score > 50 ? console.log("You passed") : console.log("Try again")

//increment
// let num = 5
// num++;
// console.log(num)

// console.log(++num)

// conditionals / control structure
// smoker = true
// if(smoker === false){
//     console.log("Not allowed")
// }else{
//     console.log("You are welcome")
// }

// age = 17
// country = 'Nigeria'
// if(age >= 18 || country === 'Nigeria'){
//     console.log("You can vote")
// }else{
//     console.log("Not eligible")
// }

// Loops - iterations (repeating a task until a condition is met)

// let n = 0
// if (n > 0){
//     console.log("positive")
// }else if (n > 0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }

// switch statement

// let grade = "b"
// grade = grade.toUpperCase()

// switch (grade) {
//   case 'A':
//     console.log('Excellent');
//     break;
//   case 'B':
//     console.log('Good');
//     break;
//   case 'C':
//     console.log('Average');
//     break;
//   default:
//     console.log('Unknown grade');
// }

// let grade= parseInt(prompt('Enter grade'))
// switch (grade) {
//     case 'grade': if (grade < 100 && grade <= 80){
//         console.log('grade is higher than 80');
//     }

// }
 

//while loop
// let num = 1; //initialization
// while (num <= 10) {  // condition
//   console.log(num);
//   num++; // increment
// }

// console.log(num2)

// for
// let data = [5, 10, 15, 20, 25, 30];
// for (let i of data){
//   if (i % 5 ==0){
//     console.log('fizz')
//   }else{
//     console.log('hi')
//   }
//   console.log(i)
// }
// for (i of data){
//     console.log(i)
// }

// for(let i=0; i < data.length; i++){
//     console.log(data[i])
// }
// console.log(data)


// go through the numbers one by one
// check if they have reminder when divided by 2
// bring put the ones that meet the condition

// for (i of data){
//    if (i % 2 == 0) {
//         console.log(i)
//    }
// }

// let record = [1,1, 3,2,3,4, 1, 3, 2,1,4,2,1,2,4, 3]
// let uniqueNumbers = []
// for (let i of record){
    
//     if(!(uniqueNumbers.includes(i))){
//         uniqueNumbers.push(i)

//     }

// }
// console.log(uniqueNumbers);

// functions - reusable block of code that returns a value
// function greet(){
//     console.log("Good morning")
// }

// greet()

// function parameter
// function greet(time, name){
//     console.log("Good " + time + ' '+  name)

// }
// greet("Morning", "Wale")
// greet("Evening", "Tobi")
// greet("Afternoon", "Michael")

// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// console.log(addTwoNumbers(3,4))
// console.log(addTwoNumbers(5,4))
// console.log(addTwoNumbers(8,3))

// arrow function - anonymous function

// function greet(){
//     console.log("Good morning")
// }

// let greet = () => console.log("Good morning")

// greet()

// let test = (x, y) => console.log(x + y)
// test(2,3)

// callback
// higher other function


// for (let i=0; i<info.length; i++) {
//     console.log(i)
// }


// go though the numbers
// you add the first with the second
// store the answer and add it to next number
// consle log the answer
// let answer = 0
// for (i of info){
//     answer = answer + i
// }
// console.log(answer)
 
// function test(x){
//     return x * x
// }
// console.log(test(2))

// console.log(info.map(test))
// console.log(info.map((x)=> x * x))
// console.log(info.filter((x)=> x % 2 == 0))
// console.log(info.reduce((prev, next)=> prev + next))
// console.log(info.find((x)=> x > 3))

// map - when same number of item that goes in comes out
// filer
// reduce
// find

// events

// DOM document object model
// let root = document.getElementById("root")
// console.log(root)
// root.innerHTML = "Hello world!";
// root.style.color = "red"
// const plus = document.getElementById('plus')
// const minus= document.getElementById('minus')
// const display = document.getElementById('display')
// let count=0
// plus.addEventListener('click', () => {

//     display.innerHTML=count++
//     if (count > 0){
//         display.style.color='green'
//     }

    
// })



// let box = document.getElementsByClassName('box')
// console.log(box)
// box[2].style.color = 'red'

// for(let i of box){
//     i.style.color = "red"
// }

// box.style.backgroundColor='blue'

// let p = document.getElementsByTagName('p')
// p[0].style.textDecoration = "underline"

// let div = document.querySelector('div')
// div.style.color = "orange"

// let h1 = document.createElement('h1')
// h1.innerText = "Hello world!"
// document.body.appendChild(h1)

// let plus = document.getElementById('plus')
// let minus = document.getElementById('minus')
// let display = document.getElementById('display')
// console.log(plus, display, minus)
// let count = 1
// plus.addEventListener('click', increase)

// function increase() {
//     display.innerHTML = ++count
// }

// minus.addEventListener('click', ()=>{
//     if(count > 1){
//         display.innerHTML = --count;
//     }else{
//         display.innerHTML = 1
//     }
// })

// let on = document.getElementById('on');
// let off = document.getElementById('off');
// let display = document.getElementById('display');

// console.log(on, off, display)
// on.addEventListener('click', switchOn);
// off.addEventListener('click', switchOff);

// function switchOn() {
//   display.innerHTML = '<img src="./pic_bulbon.gif" alt="">';
// }
// function switchOff() {
//   display.innerHTML = '<img src="./pic_bulboff.gif" alt="">';
// }




// let info= [10, 5, 6, 9, 4]
// function tosin(x) {
//     return x % 2== 0
// }
// let x=0
// console.log(info.map(tosin))
// console.log(info.map((x)=> x + 5))
// console.log(info.filter((x)=> x % 2 == 0))
// console.log(info.reduce((x, y)=> x + y))



// ES6
// promises
// Async await
// localStorage
// project


// alert("welcome to Tech365")

// localStorage.setItem("name", "wale")
// let firstName = localStorage.getItem("name")
// console.log(firstName)


// localStorage.setItem("payment", 5000)
// console.log(localStorage.getItem("payment"))

// localStorage.removeItem("payment")
// localStorage.clear()

// let theme = {
//     color: "green",
//     backgroundColor: "red",
//     fontSize: "20px"
// }

// localStorage.setItem("settings", JSON.stringify(theme))

// console.log(JSON.parse(localStorage.getItem("settings")))

// let info2 = JSON.parse(localStorage.getItem("settings"))

// document.write(info2.color)






//promise

// let products = {
//     bag: 10,
//     shoe: 0,
//     shirt: 5
// }

// let order = (resolve, rej) => {
//     if (products.bag > 0){
//         resolve(console.log("order completed"))
//     }else{
//         rej(console.log("out of stock"))
//     }
// }

// order()
// let transaction = new Promise(order)
// transaction.then((x)=> {return x})
// .catch((error)=> {return error})
// console.log(transaction)


// const url = 'https://api.github.com/users';

// const getUsers = () => {
//     fetch(url)
//       .then((data)=> data.json())
//       .then((users)=> console.log(users))

// }
// getUsers()

// console.log("hello world")

// async await 
//  const url = 'https://api.github.com/users';

// let getUsers = async () => {
//     let data = await fetch(url)
//     let response = await data.json()
// 

// let x=prompt('Enter Name')

// function greetings(x) {
//     setTimeout(()=>{
//         return `${x} welcome `
//     }, 4000)
// }
// console.log(greetings())





// document.write(response[1]["login"])


const storageInput= document.querySelector('.storage')
const text= document.querySelector('.text')
const button= document.querySelector('.button')


const storedInput = localStorage.getItem('textInput')



storageInput.addEventListener('input', letter => {
    text.textContent= letter.target.value
})
if(storageInput){
    text.textContent = storedInput
}

const saveToLocalStorage = () => {
    localStorage.setItem('textInput', text.textContent )
}

button.addEventListener('click', saveToLocalStorage)





// getUsers()









//ES6
// destructuring
// spread operator

// let person = {
//     first_name: 'John',
//     age: 10,
//     email: "wale@gmail.com"
// }
// console.log(person.first_name)
// let {first_name, age, email} = person
// console.log(first_name)
// console.log(age)
// console.log(email)
// console.log(person.first_name)

// function test(x,...z){
//     console.log(x + z)
// }

// test("wale ", "ola", 1, 2, 3, 4, 5, 6, 7, 8, 9)

// class - a blueprint for an object
// object - is an instance of a class

class Car{
    constructor(name, color, model){
        this.name = name
        this.color = color
        this.model = model
    }

    greet(){
        return "My name is " + this.name+ ' ' +"the color is " + this.color + " which is  " + this.model + ' ' +"prodoct"
    }
}

let car1 = new Car("Toyota", "red", 2022)
let car2 = new Car("Honda", "silver", 2021)
console.log(car2.color)
console.log(car2.greet())








// define a base class called Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

let tunde= new Animal('Folashade');
console.log(tunde);


// define a subclass called Cat that inherits from Animal
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  meow() {
    console.log(`${this.name} says meow.`);
  }

  // override the sleep method of Animal
  sleep() {
    console.log(`${this.name} is taking a cat nap.`);
  }
}
console.log(new Cat('Naski'))
// define another subclass called Dog that also inherits from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log(`${this.name} says woof.`);
  }

  // override the eat method of Animal
  eat() {
    console.log(`${this.name} is eating from a bowl.`);
  }
}




// create an array of animals
let animals = [
  new Cat("Mumu"),
  new Dog("Laltu"),
  new Cat("Miaow"),
  new Dog("Boltu")
];

// loop through the array and call methods on each animal
for (let animal of animals) {
  animal.eat();
  animal.sleep();

  // check if the animal is a cat and call the meow method if it is
  if (animal instanceof Cat) {
    animal.meow();
  }

  // check if the animal is a dog and call the bark method if it is
  if (animal instanceof Dog) {
    animal.bark();
  }
}







class Shape {
  draw() {
    console.log('Drawing shape...');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing circle...');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing square...');
  }
}

function drawShapes(shapes) {
  shapes.forEach(shape => {
    shape.draw();
  });
}

const shapes = [
  new Circle(),
  new Square(),
  new Circle(),
  new Square()
];

drawShapes(shapes);









function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // Output: 0
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.decrement();
console.log(counter.getCount()); // Output: 0














class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is a ${this.grade} in JavaScript.`);
  }
}




const student = new Student('Sumit', 38, 'beginner');

student.greet(); // Output: 'Hello, my name is Sumit and I am 38 years old.'
student.study(); // Output: 'Sumit is a beginner in JavaScript.'



//import add_numbers from './test.js';

//console.log(add_numbers(7, 6));
//console.log(add_numbers(2, 4));









// questions
// let words = "JavaScript is simple"
// console.log(words.replace('simple', 'easy'));
// console.log(words.length);
// console.log(words.split(' '))
// for (let i of words) {
//     console.log(i)
// }




// for ( let i of words) {
//     console.log(i)
// }



// 1. let words = "JavaScript is simple"
// change the string above to "JavaScript is Easy" and show it in the console.
// 2. Find out how many character are in words above and print to console
// 3. what are the ways to declare variable and the differences between them?
// 4. How do I know the position of "s" in simple
// 5. create a program that get 3 numbers from users and multiply the 3 numbers together and show the answer in the console
// Wale
// Wale Olajumoke
// 1. What are the 2 ways to index an object?
// 1. bring out Wale from the following code

// let person = [
//   {
//     firstName: 'Lola',
//     gender: 'female',
//     age: 18,
//   },
//   {
//     firstName: 'Segun',
//     gender: 'male',
//     age: 19,
//   },
//   {
//     firstName: 'Wale',
//     gender: 'male',
//     age: 20,
//   },
// ];
// console.log(person[2].gender)

// 3. let greeting = ["hi", "welcome", "to", "javascript"]

// change javascript to python
// and bring out "Welcome to python" without the comma, square bracket or quote



// reverse the word stored in message to read "Tech365 to welcome"
// Wale
// Wale Olajumoke
// 1. create a program that display a multiplication table
// eg. 2 x 1 = 2
//     2 x 2 = 4
// up to 2 x 12 = 24

// NB: Do not write out the table one by one. Use loop.


// 2. create a program that find the largest of 3 numbers

// 3.  create a program that take a score and show the grade using switch case:
// 90 - 100 ("Grade A")
// 70 - 89  ("Grade B")
// 50 - 69 ("Grade c")
// 30 - 49 ("Grade E")
// 0 - 29  ("Grade E")

// switch (grade){
//     case :
// }

// so if i enter any number as score it show show the corresponding grade

// 3. Create a program that accept 2 numbers and operator eg. 5 6, +
// then perform operation based on what the userr enter eg 5 + 6
// if user enter 2, 8, * it should return 2 * 8
// and show the answer in console

// 4. create a program that print only even numbers from 1 to 10
// let num = 0;







// 5. write a program the check if a number is 0. it should return zero.
// if it is greater it should return positive
// if less than zero it should return negative

// 6. let words = [1,2,3,4,5,6,7,8,9]
// bring out only even numbers from the above and sum them together


// 7. 
// let message = ["I", "want", "to", "test" , "the", "training"]
// bring out only words that start with t
// for( let i of message){
//     if (i[0]=='t'){
//         console.log(i)
//     }
// }

// 1. create a program that takes your name and gae and return.
// eg. My name is Wale. I am 18 years old

// 2. create an arrow function that takes 4 parameters and return the sum of the two values.

// 3. create a program that removes a duplicate from an array
// eg. numbers = [2,1,3,1,4,6,1,8,2,1,3,4]

// 4. create a guesing game. Create a number that is tored in variable and let user guess the numbwer.
// If they guess correctly, tell tell they are correct. if higher than the number tell them it is higher. if lower tell them their guess is lower.

// 5. Find the largest number in an array.
// eg. myList = [3,5,1,8,2,7,9,4]
// 6. const students = [
//   { name: "Wale", grade: 10 },
//   { name: "Mary", grade: 15 },
//   { name: "John", grade: 19 },
//   { name: "Audu", grade: 9 },
// ];

// from the above, get all the names of the students

// Add all the score for students with grades 10 or above
// Wale
// Wale Olajumoke
// 1. const user = {
//     id: 42,
//     is_loggedin: true
// }
//  console.log 42 using destructuring in the code above

// 2. Given the following object
// const person = {
//     firstName: "Wale",
//     lastName: "Ola",
//     age : 18
// }
// let {firstName, lastName, age} = person


// create a function called fullname that returns the firstname and lastname inside the person object above. Using destructuring

// create a function called fullname that returns the firstname and lastname using templats literials

// 3. const myObj = {
//     x: 100,
//     y: 90,
//     a:50,
//     b:40,
//     c:80
// }
// bring out a:50, b:40 and c:80 from the above


// const person = ["wale", "Ola", 90, 100, 80]
// let total=person.splice(2, 3)
// console.log(total)
// console.log(total.reduce((x, y) => x + y))
// let x= person[2][3][4]
// console.log(x)

// console.log the sum of the numbers inside person above

// 5. Split the code into modules (different files) and confirm it is working even though the code has been separated into different files

// 5. create a program that check if a word is polidrone
// ie. it is same when you spell it backward
// eg. malam, ododo, owo


// let words = [ 1, 2 ,3, 4, 5, 6, 7, 8, 9]
// let num=0
// for( let i of words) {
    
//   if (i % 2 == 0) {
     
//       num += i
//       console.log(num)
//   } 
// }


// python Assignment

// 1. Bring out "python" from the code below
// greeting = "Welcome to python"

// 2.  Create 2 variables. one for storing your name and the
// other for storing your age. print it out to say eg. My
// name is wale. I am 18 years old. Where wale is your
// name. NB: You can use any number to represent your age

// 3. Save the first_name and last_name in a variable called
// full_name and print it in the terminal with space in
// between them

// 4. words = "I am here"
// 4.print out the word in reverse to read "here am I"
// words = "I am here"

// 5. Bring out only the digits in the data below


// Eg. 12345678

// 1. Create a function that extracts the last four digit from the input entered by the user
// 2. create a mini calculator that takes two inputs from the users and operator. it should return the evaluation of the values entered.
// Eg. If the user enters 2, 4, *, it should return the value of 2 * 4.
// The same should apply if the user enters 10, 2, /. It should return 10/2
// 3. Find how much users should pay as tax if they enter their name and income.
// The tax rate is 7%
// let name = 'Naski Nero'
// let income = 1000

// console.log(`My name is ${name}, my income is $${income} and my tax rate is $${7/100 * income}`)

// 4. record = "this is the time to attend python training"
// bring out the words that start from 't'

// 5. print out tech365 from the record below
// record = {'k1':[{'nest_key'🙁'this is deep',['tech365']]}]}

// 6. bring out python from the info below
// info = {'k1':[1,2,{'k2'🙁'this is tricky',{'tough':[1,2,['python']]}]}]}

// 7. Write a program that prints the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number, and the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// 8. Write a Python function that accepts a string and calculates the number of upper case letters and lower case letters.

//     Sample String: 'Hello Mr Rogers, how are you this fine Tuesday?'
//     Expected Output :
//     No. of Upper case characters: 4
//     No. of Lower case Characters: 33
// 9. Write a Python function that takes a list and returns a new list with unique elements of the first list.

//     Sample List : [1,1,1,1,2,2,3,3,3,3,4,5]
//     Unique List : [1, 2, 3, 4, 5]

// 10. create a program that stores value. Users are expected to guess the number.
// if the user guesses correctly, return "You win", else, return "try again"









