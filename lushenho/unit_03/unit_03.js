// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.


function f1() {
	let input = document.querySelector('.i-1'),
		div = document.querySelector('.out-1'),
		btn = document.querySelector('.b-1');

	let value = +input.value;

	if (value == 4) {
		return div.textContent = true;
	} else {
		return div.textContent = false;
	}
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;

function f2() {
	let div = document.querySelector('.out-2'),
		btn = document.querySelector('.b-2');
	if (a21 > a22) {
		return div.textContent = a21;
	} else {
		return div.textContent = a22;
	}
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

function f3() {
	let input1 = document.querySelector('.i-31'),
		input2 = document.querySelector('.i-32'),
		div = document.querySelector('.out-3'),
		btn = document.querySelector('.b-3');

	let a = +input1.value,
		b = +input2.value;

	if (a > b) {
		return div.textContent = a;
	} else {
		return div.textContent = b;
	}
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

function f4() {
	let inp = document.querySelector('.i-4'),
		div = document.querySelector('.out-4'),
		btn = document.querySelector('.b-4'),
		a = +inp.value,
		date = new Date(),
		year = date.getFullYear(),
		result = year - a;

	if (result >= 18) {
		return div.textContent = 1;
	} else {
		return div.textContent = 0;
	}
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

function f5() {
	let inp = document.querySelector('.i-5'),
		div = document.querySelector('.out-5'),
		btn = document.querySelector('.b-5'),
		a = +inp.value;

	if (a < 0) {
		return div.textContent = "m";
	} else if (a == 0) {
		return div.textContent = 0;
	} else {
		return div.textContent = 1;
	}
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

function f6() {
	let inp = document.querySelector('.i-6'),
		div = document.querySelector('.out-6'),
		btn = document.querySelector('.b-6'),
		a = +inp.value;

	if (a % 2 == 0) {
		return div.textContent = "even";
	} else {
		return div.textContent = "odd";
	}

}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

function f7() {

	let inp1 = document.querySelector('.i-71'),
		inp2 = document.querySelector('.i-72'),
		div = document.querySelector('.out-7'),
		btn = document.querySelector('.b-7'),
		a = +inp1.value,
		b = +inp2.value;
	div.textContent = Math.pow(a, b);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

function f8() {
	let select = document.querySelector('.s-8'),
		div = document.querySelector('.out-8'),
		btn = document.querySelector('.b-8'),
		value = select.options[select.selectedIndex].value;


	if (value == 1) {
		div.textContent = "one";
	} else if (value == 2) {
		div.textContent = "two";
	} else if (value == 3) {
		div.textContent = "three";
	} else {
		div.textContent = "error";
	}


	/*switch (value) {
		case 1:
			div.textContent = "one";
			break;
		case 2:
			div.textContent = "two";
			break;

		case 3:
			div.textContent = "three";
			break;
	}*/
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

function f9() {
	let inp = document.querySelector('.i-9'),
		div = document.querySelector('.out-9'),
		btn = document.querySelector('.b-9'),
		a = +inp.value;

	if (a >= 1 && a <= 32) {
		div.textContent = 1;
	} else if (a >= 33 && a <= 44) {
		div.textContent = 2;
	} else if (a >= 44 && a <= 64) {
		div.textContent = 3;
	} else {
		div.textContent = 0;
	}
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

function f10() {
	let select = document.querySelector('.s-100'),
		div = document.querySelector('.out-10'),
		btn = document.querySelector('.b-10'),
		value = select.options[select.selectedIndex].value;

	if (value == 6) {
		div.textContent = "six";
	} else if (value == 7) {
		div.textContent = "seven";
	} else if (value == 11) {
		div.textContent = "eleven";
	} else if (value == 9) {
		div.textContent = "nine";
	} else {
		div.textContent = "";
	}
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

function f11() {
	let select = document.querySelector('.s-110'),
		div = document.querySelector('.out-11'),
		btn = document.querySelector('.b-11'),
		value = select.options[select.selectedIndex].value;

	if (value == 6) {
		div.textContent = "six";
	} else if (value == 7) {
		div.textContent = "seven";
	} else if (value == 11) {
		div.textContent = "eleven";
	} else if (value == 9) {
		div.textContent = "nine";
	} else {
		div.textContent = "";
	}
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
	let v = i120.value;
	document.querySelector('.out-12').innerHTML = (typeof v);
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
let i130 = document.querySelector('.i-130');
function f13() {
	let a = i130.value;
	document.querySelector('.out-13').textContent = (typeof a);
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

// c помощью оператора if, else
/*
function f14() {
	let input1 = document.querySelector('.i-141').value;
	let input2 = document.querySelector('.i-142').value;
	let select = document.querySelector('.s-143').value;
	let result;

	if (select === '+') {
		result = Number(input1) + Number(input2);
	} else if (select === '-') {
		result = Number(input1) - Number(input2);
	} else if (select === '*') {
		result = Number(input1) * Number(input2);
	} else if (select === '/') {
		result = Number(input1) / Number(input2);
	}

	document.querySelector('.out-14').innerHTML = result;
}
*/
// c помощью оператора switch

function f14() {
	let input1 = document.querySelector('.i-141').value;
	let input2 = document.querySelector('.i-142').value;
	let select = document.querySelector('.s-143').value;
	let result;

	switch (select) {
		case '+':
			result = Number(input1) + Number(input2);
			break;
		case '-':
			result = Number(input1) - Number(input2);
			break;
		case '*':
			result = Number(input1) * Number(input2);
			break;
		case '/':
			result = Number(input1) / Number(input2);
			break;
		default:
			result = 'Invalid operation';
	}

	document.querySelector('.out-14').innerHTML = result;
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

function f15() {
	// Получаем значения выбранных элементов
	let s151Value = document.querySelector(".s-151").value;
	let s152Value = document.querySelector(".s-152").value;
	let s153Value = document.querySelector(".s-153").value;

	// Преобразуем значения строковых элементов в числовые
	let s151Num = parseInt(s151Value);
	let s152Num = parseInt(s152Value);

	// Выполняем логическую операцию
	let result;
	if (s153Value === "&&") {
		result = s151Num && s152Num;
	} else {
		result = s151Num || s152Num;
	}

	// Выводим результат в элемент out-15
	document.querySelector(".out-15").innerHTML = result;
}

document.querySelector('.b-15').onclick = f15;



