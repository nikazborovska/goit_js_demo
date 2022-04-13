"use strict";

//виведення в консоль рядка
const nameOfUser = "Nika";
console.log("Hello", nameOfUser);


//запитання користувачу
const isUpdating = confirm("Is update this page?");
console.log(isUpdating);


//парсить ціле число, в даному випадку буде 18
let numb1 = 18.14666;
console.log(Number.parseInt(numb1));

//визначення типу даних
const type = typeof [59, 25];
console.log(type);


//запитання користувачу, де його відповідь відразу переводиться в число за допомогою методу Number
let qualityOfThings = prompt("How much things do you want to buy?");
qualityOfThings = Number(qualityOfThings);
console.log(qualityOfThings);
console.log(typeof (qualityOfThings));


//повертає значення true чи false, в залежності чи користувач підвердив запитання чи відхилив//
//confirm не буде знайдено у VSCode, а лише в браузері//
let questionStart = 'Can we start?';
const areWeStart = confirm(questionStart);
console.log(areWeStart);


//перетворює рядок в дробове число
//(тобто враховує ціле число, крапку, після крапки дробові числа),
//і зупиняється на першому знаку/букві після цього всього//
let elementWidth = '500.35px';

elementWidth = Number.parseFloat(elementWidth);
console.log(elementWidth);


//скорочення до певного знаку після коми, де (2) - кількість після коми//
let numzp = 155899.6945661;
console.log(Number(numzp.toFixed(2)));


//підняття числа в степень - Math.pow(основа, степень);//
console.log(Math.pow(8, 2));


//піднімаємо до степеня число, з даних (два запитання: основа і степень),
//які вводяться користувачем(і які відразу переводяться в тип даних - число)//
const answerForUserBase = prompt('Base?');
const answerForUserExponent = prompt('Exponent?');
const result = (Math.pow(Number(answerForUserBase), Number(answerForUserExponent)));
console.log(result);


// рандомно висвітлюється ціле число в проміжку між 30 та 100.//
const min = 30;
const max = 100;
console.log(Math.round(Math.random() * (max-min) + min));


// при перезагрузці сторінки, рандомно змінюється колір фону.//
const colors = ['orange', 'skyblue', 'tomato', 'pink', 'yellow', 'lightgreen', 'grey'];
const maxim = colors.length - 1;
const minim = 0;

const index = Math.round(Math.random() * (maxim - minim) + minim);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;


// Компіляція рядків. Є два способи: 1) через додавання рядків. 2) через шаблонні рядки.//
const firstName = 'Pavlo';
const lastName = 'Groshovyk';
const room = 743;
const typeOfRoom = 'Standart';

const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' поселяється в ' + typeOfRoom + ' номер ' + room + '.';
console.log(welcomeMsg);

const welcomeMsg2 = `Гість ${firstName} ${lastName} поселяється в ${typeOfRoom} номер ${room}.`;
console.log(welcomeMsg2);


//






