// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

//const a = 7,
//	b = 9;
//console.log(a * b)


// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

//const c = 7,
//	d = 9;
//document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

//const e = 3,
//	f = 5;
//document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
//const e1 = '3',
//	f1 = 5;
//document.querySelector('.out-4').textContent = e1 + f1; // 35 конкантинация

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
//const e2 = 3,
//	f2 = 0;
//document.querySelector('.out-5').textContent = e2 / f2; // infinity

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
//const e3 = 3,
//f3 = 'Hello';
//document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

//const e4 = 3,
// f4 = 'Hello';
//document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

//const input8 = document.querySelector('.input8');

//document.querySelector('.b-8').addEventListener('click', function () {
//	document.querySelector(".out-8").innerHTML = input8.value;
//	input8.value = "";
//})



// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

//const btn = document.querySelector('.b-9');
//const input9 = document.querySelector('.i-9');
//
//btn.addEventListener('click', function () {
//	document.querySelector('.out-9').innerHTML = input9.value;
//	input9.value = "";
//})

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

//const inp10 = document.querySelector('.i-10');
//
//function t10() {
//	document.querySelector('.out-10').innerHTML = inp10.value * 10;
//	inp10.value = "";
//}

//document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

//const inp11 = document.querySelector('.i-11');
//
//function t11() {
//	document.querySelector('.out-11').innerHTML = +inp11.value + 10;
//	inp11.value = "";
//}
//
//document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

//const a = document.querySelector('.i-12_1'),
//	b = document.querySelector('.i-12_2');

//function t12() {
//	let name = a.value;
//	let surname = b.value;
//	document.querySelector('.out-12').innerHTML = `Hello ${name} ${surname}`;
//	a.value = "";
//	b.value = ""
//}

//document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

//const a = document.querySelector('.i-13_1'),
//	b = document.querySelector('.i-13_2');
//
//function t13() {
//document.querySelector('.out-13').innerHTML = +a.value + +b.value;
//
//}
//
//document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

//document.querySelector('.i-14').value = 'Hello';

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

// let y =
// y.style.border =

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

//function t16() {
//
//}
//
//document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

//function t17() {
//
//
//}
//
//document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

//function t18() {
//
//}
//
//document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

//function t19() {
//
//}
//
//document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

//function t20() {
//
//}
//
//document.querySelector('.b-20').onclick = t20;