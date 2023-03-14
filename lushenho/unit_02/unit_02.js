'use strict'
// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7,
	b = 9;
console.log(a * b);


// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7,
	d = 9;

document.querySelector('.out-2').textContent = c / d;


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3, f = 5;
document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3',
	f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3, f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3,
	f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3,
	f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

const inp1 = document.querySelector('.input1'),
	btn1 = document.querySelector('.b-8'),
	div1 = document.querySelector('.out-8');
inp1.style.marginBottom = '20px';

btn1.addEventListener('click', function t8() {
	console.log(inp1.value);
	inp1.value = "";
})


// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

const inpu = document.querySelector('.i-9'),
	btn = document.querySelector('.b-9'),
	div = document.querySelector('.out-9');

btn.addEventListener('click', function t9() {
	div.textContent = inpu.value;
	inpu.value = " ";
})


// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
const inp10 = document.querySelector('.i-10'),
	btn10 = document.querySelector('.b-10'),
	div10 = document.querySelector('.out-10');

btn10.addEventListener('click', () => {
	div10.textContent = inp10.value * 10;
})

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

const inp11 = document.querySelector('.i-11'),
	btn11 = document.querySelector('.b-11'),
	div11 = document.querySelector('.out-11');

btn11.addEventListener('click', () => {
	div11.textContent = +inp11.value + 10;
})

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

const inp121 = document.querySelector('.i-12_1'),
	inp122 = document.querySelector('.i-12_2'),
	btn12 = document.querySelector('.b-12'),
	div12 = document.querySelector('.out-12');

btn12.addEventListener('click', () => {
	div12.textContent = "Hello" + ' ' + inp121.value + ' ' + inp122.value + '!';
})


// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

function t13() {
	const i131 = document.querySelector('.i-13_1');
	const i132 = document.querySelector('.i-13_2');
	document.querySelector('.out-13').textContent = +i131.value + +i132.value

}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('.i-14').value = 77

document.querySelector('.b-14').addEventListener('click', () => {
	document.querySelector('.i-14').value = "Hello";
})

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
/*
let y = document.querySelector('.i-15');
y.style.outline = '2px solid red';
*/
// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

const btn16 = document.querySelector('.b-16'),
	inp161 = document.querySelector('.i-16_1'),
	inp162 = document.querySelector('.i-16_2'),
	div16 = document.querySelector('.out-16');

btn16.addEventListener("click", function () {
	console.log("Клик");
	div16.innerHTML = inp161.value + inp162.value;
})


// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

const btn7 = document.querySelector('.b-17'),
	inp17 = document.querySelector('.i-17'),
	div17 = document.querySelector('.out-17');

btn7.addEventListener('click', () => {
	let t = inp17.value;
	t = parseInt(t);
	div17.textContent = t;
})

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

const btn8 = document.querySelector('.b-18'),
	inp18 = document.querySelector('.i-18'),
	div18 = document.querySelector('.out-18');

btn8.addEventListener('click', () => {
	let t = inp18.value;
	t = parseFloat(t);
	div18.textContent = t;
})

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

const btn19 = document.querySelector('.b-19'),
	inp191 = document.querySelector('.i-19-1'),
	inp192 = document.querySelector('.i-19-2'),
	div19 = document.querySelector('.out-19');

btn19.addEventListener("click", function () {
	console.log("Клик");

	div19.innerHTML = +inp191.value + +inp192.value;
})

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

const btn20 = document.querySelector('.b-20'),
	inp201 = document.querySelector('.i120_1'),
	inp202 = document.querySelector('.i120_2'),
	inp203 = document.querySelector('.i120_3'),
	inp204 = document.querySelector('.i120_4'),
	div20 = document.querySelector('.out-20');

btn20.addEventListener('click', () => {
	let p = inp201.value,
		o = inp202.value,
		m = inp203.value,
		l = inp204.value;
	div20.textContent = `Уважаемый ${p}, ${o}, ваш возраст ${m} года, по професси вы ${l}`;
	inp201.value = "";
	inp202.value = "";
	inp203.value = "";
	inp204.value = "";
})

