<<<<<<< HEAD
//!  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let res1 = "";
let out1 = document.querySelector('.out-1');

function t1() {
	let p = "";
	while (p <= 50) {
		res1 += p + " ";
		p++;
	}
	out1.innerHTML = res1;
}

document.querySelector('.b-1').onclick = t1;

//!  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

let res2 = "";
let out2 = document.querySelector('.out-2');

function t2() {
	let p1 = 2;
	while (p1 <= 122) {
		res2 += p1 + " ";
		p1 = p1 + 2;
	}
	out2.innerHTML = res2;

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

let res3 = "";
let out3 = document.querySelector('.out-3');

function t3() {
	let p3 = 25;
	while (p3 >= 7) {
		res3 += p3 + " ";
		p3--;
	}
	out3.innerHTML = res3;
}

document.querySelector('.b-3').onclick = t3;

//!  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.


let res4 = "";
let out4 = document.querySelector('.out-4');

function t4() {
	let p4 = 77;
	while (p4 >= 35) {
		res4 += p4 + "_";
		p4 = p4 - 3;
	}
	out4.innerHTML = res4;
}

document.querySelector('.b-4').onclick = t4;


//!  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let res5 = "";
let out5 = document.querySelector('.out-5');

function t5() {

	let p5 = 1;
	while (p5 < 18) {
		if (p5 % 2 == 0) {
			res5 += p5 + "_**"
		} else {
			res5 += p5 + "_*"
		}
		p5++;
	}
	out5.innerHTML = res5;

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.


let res6 = "";
let out6 = document.querySelector('.out-6');
let inp6 = document.querySelector('.i-6');


function t6() {
	let p6 = 0;
	while (p6 < inp6.value) {
		let p61 = 0;
		while (p61 < 6) {
			res6 += '*';
			p61++
		}
		res6 += "<br>";
		p6++;
	}
	out6.innerHTML = res6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

let res7 = "";
let out7 = document.querySelector('.out-7');
let inp7 = document.querySelector('.i-7');

function t7() {
	let p7 = inp7.value;
	while (p7 >= 0) {
		res7 += p7 + " ";
		p7--;
	}
	out7.innerHTML = res7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let res8 = "";
let out8 = document.querySelector('.out-8');
let inp81 = document.querySelector('.i-81');
let inp82 = document.querySelector('.i-82');

function t8() {
	let p8 = inp81.value;
	while (p8 <= inp82.value) {
		res8 += p8 + " ";
		p8++;
	}
	out8.innerHTML = res8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.
let res9 = "";
let out9 = document.querySelector('.out-9');
let inp91 = document.querySelector('.i-91');
let inp92 = document.querySelector('.i-92');

function t9() {
	let p9 = "";
	if (inp91.value > inp92.value) {
		p9 = inp92.value;
		while (p9 <= inp91.value) {
			res9 += p9 + " ";
			p9++;
		}
	} else {
		p9 = inp91.value;
		while (p9 <= inp92.value) {
			res9 += p9 + " ";
			p9++;
		}
	}
	out9.innerHTML = res9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let res10 = "";
let out10 = document.querySelector('.out-10');

function t10() {
	p10 = 1950;
	while (p10 <= 2000) {
		res10 += p10 + " ";
		p10 = p10 + 2;
	}
	out10.innerHTML = res10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


let res11 = "";

function t11() {
	let elem = document.querySelectorAll('.div-11');
	let i = 0;
	while (i < elem.length) {
		res11 += elem[i].innerHTML + " ";
		i++;
	}
	document.querySelector('.out-11').innerHTML = res11;

}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let res12 = "";

function t12() {
	let elem = document.querySelectorAll('.div-12');
	let i = 0;
	while (i < elem.length) {
		res12 += elem[i].style.backgroundColor = "orange";
		i++;
	}

}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

let res13 = "";

function t13() {
	let elem = document.querySelectorAll('.i-13');
	let i = 0;
	while (i < elem.length) {
		res13 += elem[i].value + " ";
		i++;
	}
	document.querySelector('.out-13').innerHTML = res13;
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

let res14 = "";

function t14() {
	let elem = document.querySelectorAll('input[type="radio"]');
	let i = 0;
	while (i < elem.length) {
		if (elem[i].checked) {
			res14 = elem[i].value;
		}
		i++;
	}
	document.querySelector('.out-14').innerHTML = res14;


}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let res15 = "";

function t15() {
	let i = 0;
	while (i <= 10) {
		res15 += (10 - i) + ' ' + i + ' ';
		i++;
	}

	document.querySelector('.out-15').innerHTML = res15;
}

document.querySelector('.b-15').onclick = t15;
=======
//!  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let res1 = "";
let out1 = document.querySelector('.out-1');

function t1() {
	let p = "";
	while (p <= 50) {
		res1 += p + " ";
		p++;
	}
	out1.innerHTML = res1;
}

document.querySelector('.b-1').onclick = t1;

//!  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

let res2 = "";
let out2 = document.querySelector('.out-2');

function t2() {
	let p1 = 2;
	while (p1 <= 122) {
		res2 += p1 + " ";
		p1 = p1 + 2;
	}
	out2.innerHTML = res2;

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

let res3 = "";
let out3 = document.querySelector('.out-3');

function t3() {
	let p3 = 25;
	while (p3 >= 7) {
		res3 += p3 + " ";
		p3--;
	}
	out3.innerHTML = res3;
}

document.querySelector('.b-3').onclick = t3;

//!  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.


let res4 = "";
let out4 = document.querySelector('.out-4');

function t4() {
	let p4 = 77;
	while (p4 >= 35) {
		res4 += p4 + "_";
		p4 = p4 - 3;
	}
	out4.innerHTML = res4;
}

document.querySelector('.b-4').onclick = t4;


//!  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let res5 = "";
let out5 = document.querySelector('.out-5');

function t5() {

	let p5 = 1;
	while (p5 < 18) {
		if (p5 % 2 == 0) {
			res5 += p5 + "_**"
		} else {
			res5 += p5 + "_*"
		}
		p5++;
	}
	out5.innerHTML = res5;

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.


let res6 = "";
let out6 = document.querySelector('.out-6');
let inp6 = document.querySelector('.i-6');


function t6() {
	let p6 = 0;
	while (p6 < inp6.value) {
		let p61 = 0;
		while (p61 < 6) {
			res6 += '*';
			p61++
		}
		res6 += "<br>";
		p6++;
	}
	out6.innerHTML = res6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

let res7 = "";
let out7 = document.querySelector('.out-7');
let inp7 = document.querySelector('.i-7');

function t7() {
	let p7 = inp7.value;
	while (p7 >= 0) {
		res7 += p7 + " ";
		p7--;
	}
	out7.innerHTML = res7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let res8 = "";
let out8 = document.querySelector('.out-8');
let inp81 = document.querySelector('.i-81');
let inp82 = document.querySelector('.i-82');

function t8() {
	let p8 = inp81.value;
	while (p8 <= inp82.value) {
		res8 += p8 + " ";
		p8++;
	}
	out8.innerHTML = res8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.
let res9 = "";
let out9 = document.querySelector('.out-9');
let inp91 = document.querySelector('.i-91');
let inp92 = document.querySelector('.i-92');

function t9() {
	let p9 = "";
	if (inp91.value > inp92.value) {
		p9 = inp92.value;
		while (p9 <= inp91.value) {
			res9 += p9 + " ";
			p9++;
		}
	} else {
		p9 = inp91.value;
		while (p9 <= inp92.value) {
			res9 += p9 + " ";
			p9++;
		}
	}
	out9.innerHTML = res9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let res10 = "";
let out10 = document.querySelector('.out-10');

function t10() {
	p10 = 1950;
	while (p10 <= 2000) {
		res10 += p10 + " ";
		p10 = p10 + 2;
	}
	out10.innerHTML = res10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


let res11 = "";

function t11() {
	let elem = document.querySelectorAll('.div-11');
	let i = 0;
	while (i < elem.length) {
		res11 += elem[i].innerHTML + " ";
		i++;
	}
	document.querySelector('.out-11').innerHTML = res11;

}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let res12 = "";

function t12() {
	let elem = document.querySelectorAll('.div-12');
	let i = 0;
	while (i < elem.length) {
		res12 += elem[i].style.backgroundColor = "orange";
		i++;
	}

}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

let res13 = "";

function t13() {
	let elem = document.querySelectorAll('.i-13');
	let i = 0;
	while (i < elem.length) {
		res13 += elem[i].value + " ";
		i++;
	}
	document.querySelector('.out-13').innerHTML = res13;
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

let res14 = "";

function t14() {
	let elem = document.querySelectorAll('input[type="radio"]');
	let i = 0;
	while (i < elem.length) {
		if (elem[i].checked) {
			res14 = elem[i].value;
		}
		i++;
	}
	document.querySelector('.out-14').innerHTML = res14;


}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let res15 = "";

function t15() {
	let i = 0;
	while (i <= 10) {
		res15 += (10 - i) + ' ' + i + ' ';
		i++;
	}

	document.querySelector('.out-15').innerHTML = res15;
}

document.querySelector('.b-15').onclick = t15;
>>>>>>> 1301609aa3ac1be36c401f786e09f59ae5be150d
