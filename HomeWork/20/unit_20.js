
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
	document.querySelector('.out-1').innerHTML = event.key;
	return event.key;
}
document.querySelector('.i-1').onkeypress = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
	document.querySelector('.out-2').innerHTML = event.keyCode;
	return event.keyCode;
}
document.querySelector('.i-2').onkeypress = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
	if (event.keyCode >= 48 && event.keyCode <= 57) {
		document.querySelector('.out-3').innerHTML = false;
	}
	else {
		document.querySelector('.out-3').innerHTML = true;
	}
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
let out4 = "";
function t4(event) {
	out4 += event.key;
	document.querySelector('.out-4').innerHTML = out4.toLowerCase();
}
document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let out5 = "";
function t5(event) {
	out5 += event.key;
	document.querySelector('.out-5').innerHTML = out5.toUpperCase();
}

document.querySelector('.i-5').onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
	console.log(event)
	document.querySelector('.out-6').innerHTML += event.key.toLowerCase();
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
	const a7 = ["a", "z", "x", "w", "y", "t"];
	let rdm = Math.floor(Math.random() * a7.length);
	document.querySelector(".out-7").innerHTML += `${a7[rdm]}`;
}

document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
	const a8 = {
		i: 1,
		o: 0,
		l: 7
	}
	document.querySelector('.i-8').value = a8[event.key];
	document.querySelector('.out-8').innerHTML += event.key;
	return false;

}

document.querySelector('.i-8').onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let out = 0;
function t9(event) {
	if (event.keyCode == 40) {
		out++;
	}
	document.querySelector(".out-9").innerHTML = out;
}
document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let w10 = 75,
	h10 = 75;

function t10(event) {
	if (event.keyCode === 37 || event.keyCode === 39) {
		document.querySelector('.div-10').style.width = `${w10}px`;
		w10++;
	}
	else if (event.keyCode === 38 || event.keyCode === 40) {
		document.querySelector('.div-10').style.height = `${h10}px`;
		h10++;
	}
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект.
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {


}

// ваше событие здесь!!!

