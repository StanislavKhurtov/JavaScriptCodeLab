//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

// let out = "";
// function t1() {
// 	for (let i = 0; i < 3; i++) {
// 		for (let k = 0; k < 3; k++) {
// 			out += "*";
// 		}
// 		out += "_";
// 	}
// 	document.querySelector('.out-1').innerHTML = out;
// }
// document.querySelector('.b-1').onclick = t1;

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

//  let out = "";
//  function t2() {
//  	for (let i = 1; i <= 3; i++) {
//  		out += i + "<br>";
//  		for (let k = 0; k < 3; k++) {
//  			out += "*_"
//  		}
//  		out += "<br>";
//  	}
//  	document.querySelector('.out-2').innerHTML = out;
//  }
//  document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>

//  let out = "";
//  function t3() {
//  	for (let i = 0; i < 4; i++) {
//  		for (let k = 0; k < 3; k++) {
//  			out += "*_"
//  		}
//  		out += "<br>"
//  	}
//  	document.querySelector('.out-3').innerHTML = out;
//  }
//  document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>

//  let out = "";
//  function t4() {
//  	for (let i = 1; i < 4; i++) {
//  		out += i + "_";
//  		for (let k = 1; k < 6; k++) {
//  			out += k + " ";
//  		}
//  		out += " ";
//  	}
//  	document.querySelector('.out-4').innerHTML = out;
//  }
//  document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
//let out = "";
//function t5() {
//	for (let i = 0; i < 3; i++) {
//		for (let k = 0; k < 6; k++) {
//			if (k % 2 == 0) {
//				out += 1;
//			} else {
//				out += 0;
//			}
//		}
//		out += "<br>";
//	}
//	document.querySelector('.out-5').innerHTML = out;
//
//}
//
//document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

//  let out = "";
//  function t6() {
//  	for (let i = 0; i < 3; i++) {
//  		for (let k = 0; k < 6; k++) {
//  			if (k == 2 || k == 5) {
//  				out += 'x';
//  			} else if (k % 2 == 0) {
//  				out += 1;
//  			} else {
//  				out += 0;
//  			}
//  		}
//  		out += "<br>";
//  	}
//  	document.querySelector('.out-6').innerHTML = out;
//  }
//
//  document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

//  let out = "";
//  function t7() {
//  	for (let i = 1; i < 6; i++) {
//  		for (let k = 1; k < i; k++) {
//  			out += "*";
//  		}
//  		out += "<br>"
//  	}
//  	document.querySelector('.out-7').innerHTML = out;
//  }
//  document.querySelector('.b-7').onclick = t7;


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

//  let out = "";
//  function t8() {
//  	for (let i = 6; i > 0 ; i--) {
//  		for (let k = 1; k < i; k++) {
//  			out += "*";
//  		}
//  		out += "<br>"
//  	}
//  	document.querySelector('.out-8').innerHTML = out;
//  }
//  document.querySelector('.b-8').onclick = t8;


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
//let out = "";
//function t9() {
//	for (let i = 0; i < 7; i++) {
//		for (let k = 1; k < i; k++) {
//			out += k +" ";
//		}
//		out += "<br>"
//	}
//	document.querySelector('.out-9').innerHTML = out;
//}
//document.querySelector('.b-9').onclick = t9;


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

//  let out = "";
//  function t10() {
//  	for (let i = 0; i < 5; i++) {
//  		out += "<br>"
//  		for (let k = 0; k <= 10; k++) {
//  			let number = i * 10 + k + 1;
//  			if (number < 10) {
//  				out += "0";
//  			}
//  			out += number + " ";
//  		}
//  	}
//  	document.querySelector('.out-10').innerHTML = out;
//  }
//  document.querySelector('.b-10').onclick = t10;