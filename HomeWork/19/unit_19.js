
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1(e) {
	console.log(e);
	let out = document.querySelector('.div-1').textContent;
	document.querySelector('.out-1').innerHTML = out;
}
document.querySelector('.div-1').onclick = t1;


// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
	return e.altKey ? true : false;
}
document.querySelector('.div-2').onclick = (e) => {
	document.querySelector('.out-2').textContent = t2(e);
};


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3(el) {
	el.target.style.width = `${w3}px`;
	w3 += 5;
	document.querySelector(".out-3").textContent = w3;
}
document.querySelector('.div-3').onclick = t3;


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
	let out = document.querySelector('.div-4').textContent;
	document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.div-4').ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
	this.classList.toggle('active');
}
document.querySelector('.div-5').ondblclick = t5;

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
	let arr = document.querySelector('.ul-6');
	arr.classList.toggle('hide');
}
document.querySelector('.div-6').ondblclick = t6;


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
	this.classList.toggle('active');
	return false;
}
document.querySelector('.div-7').oncontextmenu = t7;


// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
	if (this.checked) {
		document.oncontextmenu = () => {
			return false;
		};
	} else {
		document.oncontextmenu = () => {
			return true;
		};
	}
}

document.querySelector('.ch-8').onchange = t8;


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9(e) {
	e.target.src = "img/2.png";
	return false;
}

document.querySelector('.div-9').oncontextmenu = t9;


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10(e) {
	return e.target.children[0].src = "img/2.png";

}

document.querySelector('.div-10').onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11(e) {
	return e.target.children[0].src = "img/2.png";
}
function t111(e) {
	return e.target.children[0].src = "img/1.png";
}

document.querySelector('.div-11').onmouseenter = t11;
document.querySelector('.div-11').onmouseleave = t111;

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */


document.querySelector('.div-12').onmousedown = (e) => {
	e.target.classList.add('active');
}


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector('.div-13').onmousedown = (e) => {
	e.target.classList.add('active');
}
document.querySelector('.div-13').onmouseup = (e) => {
	e.target.classList.remove('active');
}



// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
	document.querySelector('.div-14').classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let w = 1;
function t15() {
	document.querySelector('.div-15').innerHTML = w;
	w++;
}
document.querySelector('.div-15').onmousemove = t15;


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let tr = 75;
function t16() {
	document.querySelector('.div-16').style.width = `${tr}px`;
	tr++;
}
document.querySelector('.div-16').onmousemove = t16;

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
	document.querySelector(".div-16").onmousemove = t16;
}
function t17Off() {
	document.querySelector(".div-16").onmousemove = function () {
		return false;
	};

}
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18(e) {
	e.target.innerHTML = e.target.offsetWidth;
}
document.querySelector('.div-18').onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19(e) {
	e.target.textContent = e.target.classList;
}
document.querySelector('.div-19').onmouseout = t19;


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let t = 10;
function t20(e) {
	e.target.value = t;
	t++;
}
document.querySelector('progress').onmousemove = t20;


document.addEventListener('keypress', (event) => {
	const keyName = event.key;

	alert('keypress event\n\n' + 'key: ' + keyName);
});