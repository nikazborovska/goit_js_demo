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


//Нормалізація з методом toLowerCase
let brand = prompt('Введіть бренд');
brand = brand.toLowerCase();
console.log(brand);

//методи .toLowerCase(), .toUpperCase(), .slice()
let mainBrand = 'samSunG';
console.log(mainBrand[4]);
console.log(mainBrand.slice(1).toLowerCase());
console.log(mainBrand[0].toUpperCase() + mainBrand.slice(1).toLowerCase());


//Пошук в рядку за допомогою методу includes(), який повертає значення true або false
//тобто чи включає в себе даний рядок таке то значення:true-включає, false-ні.
const blackListedWord1 = 'спам';
const blackListedWord2 = 'розпродаж';

const string1 = "Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна компанія #fatlivesmatter";

console.log(string1.toLowerCase().includes(blackListedWord1));
console.log(string1.toLowerCase().includes(blackListedWord2));

console.log(string2.toLowerCase().includes(blackListedWord1));
console.log(string2.toLowerCase().includes(blackListedWord2));

console.log(string3.toLowerCase().includes(blackListedWord1));
console.log(string3.toLowerCase().includes(blackListedWord2));

//Оператори порівняння. Оператор - це знак порівняння;
//операнд - це значення зліва та справа від знаку порівняння;
//операнд при порівнюванні завжди приводить усі значення до типу даних Number;
const x = '5' >= 5;
console.log(x);

//при застосуванні операторів строгої рівності (===) та
//строгої нерівності(!==) операнди не змінюють свій тип даних
//тобто рядок вже не буде прирівнюватись до числа і тд, так як при ()==) і (!=)

//Лише 6 значень приводяться до false:
//(0, NaN, null, undefined, false, пустий рядок '' або "")
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(""));


//Оператор  І (AND) (&&)
//Запинається на false
//Повертає значення, на якому запнулося або останній операнд
const isChecked = true; 
const isOn = false; 
console.log(isChecked && isOn);


//Оператор АБО (OR) (||)
//Запинається на true
//Повертає значення, на якому запнулося або останній операнд
const num65 = 65;
const num36 = 36;
const numOfNull = null;
console.log(num65 || numOfNull || num36);

//Оператор заперечення (!)
//обертає значення в протилежне 
console.log(!0); //буде true, тому що 0 - це false,
//а оператор заперечення(!) обертає значення на протижне - тобто на true.



//Задачка: написати скрипт, який зможе визначити чи лежить дане число
//на відрізку який обмежується значеннями x1 та x2
const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Чи потрапляє число ${number} у відрізок до ${x1}?`, number < x1);
console.log(`Чи потрапляє число ${number} у відрізок після ${x2}?`, number > x2);
console.log(`Чи потрапляє число ${number} у відрізок від ${x1} до ${x2}?`, x1 < number && number < x2);
console.log(`Чи потрапляє число ${number} у відрізок до ${x1} або після ${x2}?`, number < x1 || number > x2);


//Задачка:написати скрипт, який провіряє можливість розпочати чат з користувачем.
//Для цього користувач повинен бути:
// - другом
// - онлайн
// - без режиму не турбувати
const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Чи можу я розпочати чат?', canOpenChat);

//Задачка: перевірка підписки користувача, для отримання доступу
//Є три типи підписки: free, pro, vip
//Отримати доступ можуть тільки користувачі pro та vip
const subscription = 'pro';
const canAccesContent = subscription === 'pro' || subscription === 'vip';
console.log('Чи можу я отримати доступ до контенту?', canAccesContent);


//Оператор розгалуження if
//складається з умови(виразу)() та тіла {}. Якщо умова = true, то тіло виконується
//а якщо умова = false, то тіло ігнорується 
if (5 < 30) {
    console.log('Вираз приводиться до true - тому й був виведений у консоль');
}


//Оператор розгалуження if...else
if (50 > 10) {
    console.log('x > y');
} else {
    console.log('x < y');
}


//Оператор розгалуження else...if
//Використовується там, де є декілька умов, але виконатися має лише одна з них.
const salary = 5000;
if (salary <= 500) {
    console.log('Низький рівень');
} else if (salary > 500 && salary <= 1500) {
    console.log('Середній рівень');
} else if (salary > 1500 && salary < 3000) {
    console.log('Високий рівень');
} else {
    console.log('Максимальний рівень');
}


//Тернарний оператор
const balance = -1000;
// let message;
// if (balance >= 0) {
//     message = "Додатний баланс";
// } else {
//     message = "Від'ємний баланс";
// }
const message = (balance >= 0) ? console.log("Додатний баланс") : console.log("Від'ємний баланс");
// console.log(message);


//Блочна (локальна) область видимості змінних
//працює принципом "матрьошки": те що всередині - не видно ззовні;
//а те, що ззовні видно всередині
const b = 10;
if (true) {
    console.log(b);
    const a = 5;
    console.log(a);
}
console.log(a); //a не знайдено, бо змінна а була об'явлена всередині області видимості
console.log(b);


//Задача: написати скрипт обробки покупки в магазині
let balanceOfUser = 10000; //баланс користувача
const payment = 10000; //сума покупки
console.log(`Загальна сума замовлення ${payment}. Перевіряємо чи доступні кошти на вашому рахунку...`);

const messageError = 'На рахунку недостатньо коштів для проведення даної операції!';

if (payment <= balanceOfUser) {
    balanceOfUser = balanceOfUser - payment;
    console.log('Все ок, знімаємо кошти. Дякуємо за покупку!');
    console.log(`На рахунку залишилось ${balanceOfUser}.`);
} else {
    console.log(messageError);
}
console.log('Операція завершена!');
