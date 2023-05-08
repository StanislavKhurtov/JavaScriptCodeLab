// для решения задач используйте эти переменные
let a1_res = [],
	a2_res = [],
	a3_res = [],
	a4_res = [],
	b1_res = [],
	b6_res = [],
	b7_res = [],
	b8_res = [],
	b9_num = [],
	b9_string = [],
	b10_res;

// Task 1 ============================================
/* Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Возвратите массив  a1_res. */

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
	a1_res = a1.map(elem => {
		return elem * 2;
	});
	return a1_res;
}

document.querySelector('.b-1').onclick = () => {
	console.log(t1());
}

// Task 2 ============================================
/*  Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив a2_res. Действия должны запускаться при вызове функции t2.*/

//  let a2 = [2, 3, 4, 5, 10, 11, 12];
//  function t2() {
//  	a2_res = a2.map(item => Math.pow(item, 2));
//  	return a2_res;
//  }
//  document.querySelector('.b-2').onclick = () => {
//  	console.log(t2());
//  }


// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a3_res куда добавьте все элементы приведенные к числу. Возвратите a3_res.
Действия должны запускаться при вызове функции t3. */

let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t3() {
	a3_res = a3.map(item => +item);
	//a3_res = a3.map(item => parseInt(item));
	return a3_res;
}

document.querySelector('.b-3').onclick = () => {
	console.log(t3());
}


// Task 4 ============================================
/*  Следующая задача проще будет решаться через метод forEach, который мы изучим во второй части урока! Сейчас мы делаем костыль, для отработки навыков работы с map. Дан массив a4 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a4_res куда добавьте ТОЛЬКО числа из массива a4. Возвратите a4_res. Действия должны запускаться при вызове функции t4. */

let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t4() {

}

document.querySelector('.b-4').onclick = () => {
	console.log(t4());
}



// Task 5 ============================================
/*  Дан массив b1 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте b1_res, который содержит только четные числа из b1. Возвратите b1_res. Действия должны запускаться при вызове функции t5. */

let b1 = [3, 14, 15, 92];

function t5() {

}

document.querySelector('.b-5').onclick = () => {
	console.log(t5());
}



// Task 6 ============================================
/*  Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив b6 и создайте массив b6_res, который содержит только числа из b6. Возвратите b6_res. Действия должны запускаться при вызове функции t6. */

let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {

}

document.querySelector('.b-6').onclick = () => {
	console.log(t6());
}


// Task 7 ============================================
/*  Дан массив b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]. C помощью filter переберите массив b7 и создайте  b7_res, который содержит только строки из b7, длина которых больше 3. Возвратите b7_res. Действия должны запускаться при вызове функции t7. */

let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];

function t7() {

}

document.querySelector('.b-7').onclick = () => {
	console.log(t7());
}

// Task 8 ============================================
/* Дан массив b8 = [3, 14, 15, 92, "6", "5", "hello", 32]. С помощью filter, переберите массив b8 и создайте массив b8_res, который содержит индексы четных элементов. Возвратите b8_res. Действия должны запускаться при вызове функции t8 */

let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t8() {

}

document.querySelector('.b-8').onclick = () => {
	console.log(t8());
}



// Task 9 ============================================
/*  Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b9 и создайте массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решите с помощью filter. Действия должны запускаться при вызове функции t9. */

let b9 = [3, "hello", 4, "world", 5, "hi"];

function t9() {

	return [b9_num, b9_string];
}

document.querySelector('.b-9').onclick = () => {
	console.log(t9());
}



// Task 10 ============================================
/*  Дан массив b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]. С помощью filter переберите массив и создайте  b10_res, в который входят вложенные массивы содержащие цифру 3.  Возвратите b10_res. Действия должны запускаться при вызове функции t10. */

let b10 = [[1, 2, 3], [3, 4, 6], [4, 5, 7], [8, 9, 3]]

function t10() {


}

document.querySelector('.b-10').onclick = () => {
	console.log(t10());
}

// P.S. Вы же точно использовали переменные в начале файла? Не меняли область видимости?