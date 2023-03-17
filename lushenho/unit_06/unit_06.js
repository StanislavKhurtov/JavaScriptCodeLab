<<<<<<< HEAD
//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let res = "";

function t1() {
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 3; k++) {
			res += "*"
		}
		res += "_";
	}
	document.querySelector('.out-1').textContent = res;
}



document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

let res2 = "";

function t2() {
	for (let i = 1; i < 4; i++) {
		res2 += i + '<br>';
		for (let k = 0; k < 3; k++) {
			res2 += "*_";
		}
		res2 += '<br>';
	}
	document.querySelector('.out-2').innerHTML = res2;

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>

let res3 = "";

function t3() {
	for (let i = 0; i < 4; i++) {
		for (let k = 0; k < 3; k++) {
			res3 += "*_";
		}
		res3 += '<br>';
	}
	document.querySelector('.out-3').innerHTML = res3;

}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>

let res4 = "";
function t4() {
	for (let i = 1; i < 4; i++) {
		res4 += i + "_";
		for (let k = 1; k < 6; k++) {
			res4 += k + " ";
		}
		res4 += " ";
	}
	document.querySelector('.out-4').innerHTML = res4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>

let res5 = "";

function t5() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 6; j++) {
			if (j == 0 || j == 2 || j == 4) {
				res5 += "1";
			} else {
				res5 += "0";
			}
		}
		res5 += "<br>";
	}
	document.querySelector('.out-5').innerHTML = res5;

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

let out6 = document.querySelector('.out-6');

function t6() {
	for (let i = 0; i < 3; i++) {
		for (let j = 1; j <= 6; j++) {
			if (j == 3 || j == 6) {
				out6.innerHTML += 'x';
			}
			else if (j % 2 == 0) {
				out6.innerHTML += 0;
			}
			else {
				out6.innerHTML += 1;
			}
		}
		out6.innerHTML += '<br>';
	}

}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

let out7 = document.querySelector('.out-7');

function t7() {
	for (let i = 0; i < 5; i++) {
		for (let k = 0; k < i; k++) {
			out7.innerHTML += "*";
		}
		out7.innerHTML += "<br>";
	}
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

let out8 = document.querySelector('.out-8');

function t8() {

	for (let i = 5; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			out8.innerHTML += "*";
		}
		out8.innerHTML += "<br>";
	}

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
let out9 = document.querySelector('.out-9');

function t9() {
	for (let i = 1; i < 7; i++) {
		for (let k = 1; k < i; k++) {
			out9.innerHTML += k + " ";
		}
		out9.innerHTML += "<br>";
	}
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
let out10 = document.querySelector('.out-10');

function t10() {
	let row = "";
	for (let i = 0; i < 5; i++) {
		row += '<br>'
		for (let j = 0; j < 10; j++) {
			let number = i * 10 + j + 1;
			if (number < 10) {
				row += "0";
			}
			row += number + " ";
		}
		out10.innerHTML = row;
	}
}

=======
//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let res = "";

function t1() {
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 3; k++) {
			res += "*"
		}
		res += "_";
	}
	document.querySelector('.out-1').textContent = res;
}



document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

let res2 = "";

function t2() {
	for (let i = 1; i < 4; i++) {
		res2 += i + '<br>';
		for (let k = 0; k < 3; k++) {
			res2 += "*_";
		}
		res2 += '<br>';
	}
	document.querySelector('.out-2').innerHTML = res2;

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>

let res3 = "";

function t3() {
	for (let i = 0; i < 4; i++) {
		for (let k = 0; k < 3; k++) {
			res3 += "*_";
		}
		res3 += '<br>';
	}
	document.querySelector('.out-3').innerHTML = res3;

}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>

let res4 = "";
function t4() {
	for (let i = 1; i < 4; i++) {
		res4 += i + "_";
		for (let k = 1; k < 6; k++) {
			res4 += k + " ";
		}
		res4 += " ";
	}
	document.querySelector('.out-4').innerHTML = res4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>

let res5 = "";

function t5() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 6; j++) {
			if (j == 0 || j == 2 || j == 4) {
				res5 += "1";
			} else {
				res5 += "0";
			}
		}
		res5 += "<br>";
	}
	document.querySelector('.out-5').innerHTML = res5;

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

let out6 = document.querySelector('.out-6');

function t6() {
	for (let i = 0; i < 3; i++) {
		for (let j = 1; j <= 6; j++) {
			if (j == 3 || j == 6) {
				out6.innerHTML += 'x';
			}
			else if (j % 2 == 0) {
				out6.innerHTML += 0;
			}
			else {
				out6.innerHTML += 1;
			}
		}
		out6.innerHTML += '<br>';
	}

}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

let out7 = document.querySelector('.out-7');

function t7() {
	for (let i = 0; i < 5; i++) {
		for (let k = 0; k < i; k++) {
			out7.innerHTML += "*";
		}
		out7.innerHTML += "<br>";
	}
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

let out8 = document.querySelector('.out-8');

function t8() {

	for (let i = 5; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			out8.innerHTML += "*";
		}
		out8.innerHTML += "<br>";
	}

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
let out9 = document.querySelector('.out-9');

function t9() {
	for (let i = 1; i < 7; i++) {
		for (let k = 1; k < i; k++) {
			out9.innerHTML += k + " ";
		}
		out9.innerHTML += "<br>";
	}
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
let out10 = document.querySelector('.out-10');

function t10() {
	let row = "";
	for (let i = 0; i < 5; i++) {
		row += '<br>'
		for (let j = 0; j < 10; j++) {
			let number = i * 10 + j + 1;
			if (number < 10) {
				row += "0";
			}
			row += number + " ";
		}
		out10.innerHTML = row;
	}
}

>>>>>>> 1301609aa3ac1be36c401f786e09f59ae5be150d
document.querySelector('.b-10').onclick = t10;