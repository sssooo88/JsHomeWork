//01-task

console.log('01-task');

let name = "Герасим";
let age = 25;
let company = "NAYAX";
let position = "Frontend Developer \uD83D\uDE00"

let message = "Привет, меня зовут " + `${name}. Мне ${age} лет. Я работаю на должности ${position} \
в компании ${company}.`;

console.log(message);

//02-task

console.log('02-task');

const str = 'Каждый охотник желает знать';
const arr = str.split(' ');

console.log(arr);

//03-task

console.log('03-task');

const str1 = "Пример строки";
const result = `${str1.substring(0,1).toLowerCase()}${str1.substring(1)}`;

console.log(result);

//04-task

console.log('04-task');

const str2 = 'Каждый охотник желает знать';
const length = 7;
const result1 = str2.substr(7,length);

console.log(result1);

//05-task

console.log('05-task');

const str3 = "string not starting with capital";
const result2 = `${str3.substring(0,1).toUpperCase()}${str3.substring(1)}`;

console.log(result2);



