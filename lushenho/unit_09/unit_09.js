<<<<<<< HEAD
//  Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.

let btn = document.querySelector('.b-1');
let div = document.querySelector('.out-1');

btn.addEventListener('click', () => {
	div.style.height = "40px";
	div.style.width = "200px";
})


//  Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.

function f2() {
	document.querySelector('.out-2').classList.add('bg2');
}

document.querySelector('.b-2').onclick = f2;


//  Task 3
// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3.

function f3() {
	document.querySelector('.out-3').classList.remove('bg-3');

}

document.querySelector('.b-3').onclick = f3;

//  Task 4
// По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.


function f4() {
	document.querySelector('.out-4').classList.toggle('bg-4');

}

document.querySelector('.b-4').onclick = f4;


//  Task 5
// По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.

function f5() {
	let hasClass = document.querySelector('.out-4').classList.contains('bg-4');
	if (hasClass) {
		document.querySelector('.out-5').innerHTML = 'true';
	} else {
		document.querySelector('.out-5').innerHTML = 'false';
	}
}

document.querySelector('.b-5').onclick = f5;


//  Task 6
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.

function f6() {
	let lenghtParagraph = document.querySelectorAll('.p-6');
	document.querySelector('.out-6').innerHTML = lenghtParagraph.length;
}

document.querySelector('.b-6').onclick = f6;


//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7');
res7 = "";
function f7() {
	//внутри цикла blocks7[i].classList....
	let i = 0;
	while (i < blocks7.length) {
		res7 += blocks7[i].classList.toggle('bg-7'); // поменял с add на toggle, для проверки
		i++;
	}

	/*
	for (let i = 0; i < blocks7.length; i++) {
		blocks7[i].classList.toggle('bg-7');
	}
*/
}

document.querySelector('.b-7').onclick = f7;


//  Task 8
// По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks8 = document.querySelectorAll('.out-8');
let res8 = "";


function f8() {
	//внутри цикла blocks8[i].classList....
	let i = 0;
	while (i < blocks8.length) {
		res8 += blocks8[i].classList.toggle('bg-8');
		i++;
	}

}

document.querySelector('.b-8').onclick = f8;


//  Task 9
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.

function f9() {
	//this.classList...  // все решается одной строкой
	this.classList.add('bg-9');
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
	div9[i].onclick = f9;
}


//!  Task 10
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.

//let div10 = тут получите все out-10

function f10() {
	this.classList.toggle('bg-10')
}

// а тут цикл, похожий на предыдущее задание
let div10 = document.querySelectorAll('.out-10');

for (let i = 0; i < div10.length; i++) {
	div10[i].onclick = f10;
}


//!  Task 11
// Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.


function f11() {
	let newElem = document.createElement('div');
	let div = document.querySelector('.out-11');
	newElem.innerHTML = '25';
	newElem.classList.add('new')
	div.append(newElem);
}


document.querySelector('.b-11').onclick = f11;

//  Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.


function f12() {
	let newElem12 = document.createElement('div');
	let div12 = document.querySelector('.out-12');
	newElem12.innerHTML = '12';
	newElem12.classList.add('bg-12')
	div12.append(newElem12);
}

document.querySelector('.b-12').onclick = f12;

//  Task 13
// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.

function f13() {
	let new13 = document.createElement('div');
	let div13 = document.querySelector('.out-13');
	new13.innerHTML = "pushMe";
	new13.classList.add('bg-13');
	div13.append(new13);
	div13.onclick = f13_1;

}

function f13_1() {
	document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

//!   Task 14
// Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.


function f14() {
	let a = document.createElement('div');
	a.innerHTML = "14";
	a.classList.add('bg-14');
	document.querySelector('.out-14').prepend(a);

}

document.querySelector('.b-14').onclick = f14;

//  Task 15
// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.

function f15() {
	let a1 = document.createElement('div');
	a1.innerHTML = "15";
	a1.classList.add('bg-15');
	document.querySelector('.out-15').before(a1);
}

document.querySelector('.b-15').onclick = f15;

//  Task 16
// Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.

function f16() {
	let a2 = document.createElement('div');
	a2.innerHTML = "15";
	a2.classList.add('bg-16');
	document.querySelector('.out-16').after(a2);
}

document.querySelector('.b-16').onclick = f16;

//  Task 17
// Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет  out-17 с помощью replaceWith.

function f17() {
	let a3 = document.createElement('div');
	a3.innerHTML = "17";
	a3.classList.add('bg-17');
	document.querySelector('.out-17').replaceWith(a3);


}

document.querySelector('.b-17').onclick = f17;

//  Task 18
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.

function f18() {
	document.querySelector('.out-18').innerHTML = document.querySelector('.p-18').getAttribute('data-b');
}

document.querySelector('.b-18').onclick = f18;

//  Task 19
// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.

res19 = "";
function f19() {
	let elem = document.querySelectorAll('.p-19');
	let i = 0;
	while (i < elem.length) {
		res19 += elem[i].getAttribute("data-b") + " ";
		i++
	}
	document.querySelector('.out-19').innerHTML = res19;
}

document.querySelector('.b-19').onclick = f19;

//  Task 20
// Добавьте кнопку .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20.

function f20() {
	document.querySelector('.out-20').setAttribute('title', "go");
}

=======
//  Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.

let btn = document.querySelector('.b-1');
let div = document.querySelector('.out-1');

btn.addEventListener('click', () => {
	div.style.height = "40px";
	div.style.width = "200px";
})


//  Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.

function f2() {
	document.querySelector('.out-2').classList.add('bg2');
}

document.querySelector('.b-2').onclick = f2;


//  Task 3
// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3.

function f3() {
	document.querySelector('.out-3').classList.remove('bg-3');

}

document.querySelector('.b-3').onclick = f3;

//  Task 4
// По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.


function f4() {
	document.querySelector('.out-4').classList.toggle('bg-4');

}

document.querySelector('.b-4').onclick = f4;


//  Task 5
// По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.

function f5() {
	let hasClass = document.querySelector('.out-4').classList.contains('bg-4');
	if (hasClass) {
		document.querySelector('.out-5').innerHTML = 'true';
	} else {
		document.querySelector('.out-5').innerHTML = 'false';
	}
}

document.querySelector('.b-5').onclick = f5;


//  Task 6
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.

function f6() {
	let lenghtParagraph = document.querySelectorAll('.p-6');
	document.querySelector('.out-6').innerHTML = lenghtParagraph.length;
}

document.querySelector('.b-6').onclick = f6;


//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7');
res7 = "";
function f7() {
	//внутри цикла blocks7[i].classList....
	let i = 0;
	while (i < blocks7.length) {
		res7 += blocks7[i].classList.toggle('bg-7'); // поменял с add на toggle, для проверки
		i++;
	}

	/*
	for (let i = 0; i < blocks7.length; i++) {
		blocks7[i].classList.toggle('bg-7');
	}
*/
}

document.querySelector('.b-7').onclick = f7;


//  Task 8
// По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks8 = document.querySelectorAll('.out-8');
let res8 = "";


function f8() {
	//внутри цикла blocks8[i].classList....
	let i = 0;
	while (i < blocks8.length) {
		res8 += blocks8[i].classList.toggle('bg-8');
		i++;
	}

}

document.querySelector('.b-8').onclick = f8;


//  Task 9
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.

function f9() {
	//this.classList...  // все решается одной строкой
	this.classList.add('bg-9');
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
	div9[i].onclick = f9;
}


//!  Task 10
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.

//let div10 = тут получите все out-10

function f10() {
	this.classList.toggle('bg-10')
}

// а тут цикл, похожий на предыдущее задание
let div10 = document.querySelectorAll('.out-10');

for (let i = 0; i < div10.length; i++) {
	div10[i].onclick = f10;
}


//!  Task 11
// Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.


function f11() {
	let newElem = document.createElement('div');
	let div = document.querySelector('.out-11');
	newElem.innerHTML = '25';
	newElem.classList.add('new')
	div.append(newElem);
}


document.querySelector('.b-11').onclick = f11;

//  Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.


function f12() {
	let newElem12 = document.createElement('div');
	let div12 = document.querySelector('.out-12');
	newElem12.innerHTML = '12';
	newElem12.classList.add('bg-12')
	div12.append(newElem12);
}

document.querySelector('.b-12').onclick = f12;

//  Task 13
// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.

function f13() {
	let new13 = document.createElement('div');
	let div13 = document.querySelector('.out-13');
	new13.innerHTML = "pushMe";
	new13.classList.add('bg-13');
	div13.append(new13);
	div13.onclick = f13_1;

}

function f13_1() {
	document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

//!   Task 14
// Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.


function f14() {
	let a = document.createElement('div');
	a.innerHTML = "14";
	a.classList.add('bg-14');
	document.querySelector('.out-14').prepend(a);

}

document.querySelector('.b-14').onclick = f14;

//  Task 15
// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.

function f15() {
	let a1 = document.createElement('div');
	a1.innerHTML = "15";
	a1.classList.add('bg-15');
	document.querySelector('.out-15').before(a1);
}

document.querySelector('.b-15').onclick = f15;

//  Task 16
// Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.

function f16() {
	let a2 = document.createElement('div');
	a2.innerHTML = "15";
	a2.classList.add('bg-16');
	document.querySelector('.out-16').after(a2);
}

document.querySelector('.b-16').onclick = f16;

//  Task 17
// Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет  out-17 с помощью replaceWith.

function f17() {
	let a3 = document.createElement('div');
	a3.innerHTML = "17";
	a3.classList.add('bg-17');
	document.querySelector('.out-17').replaceWith(a3);


}

document.querySelector('.b-17').onclick = f17;

//  Task 18
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.

function f18() {
	document.querySelector('.out-18').innerHTML = document.querySelector('.p-18').getAttribute('data-b');
}

document.querySelector('.b-18').onclick = f18;

//  Task 19
// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.

res19 = "";
function f19() {
	let elem = document.querySelectorAll('.p-19');
	let i = 0;
	while (i < elem.length) {
		res19 += elem[i].getAttribute("data-b") + " ";
		i++
	}
	document.querySelector('.out-19').innerHTML = res19;
}

document.querySelector('.b-19').onclick = f19;

//  Task 20
// Добавьте кнопку .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20.

function f20() {
	document.querySelector('.out-20').setAttribute('title', "go");
}

>>>>>>> 1301609aa3ac1be36c401f786e09f59ae5be150d
document.querySelector('.b-20').onclick = f20;