//! Методы массивов

//! Метод forEach
//Метод forEach — исопльзуется для перебора элементов массива.

/*
const items = ['item1', 'item2', 'item3'];
const copy = [];

можно перебрать циклами
  for (let i = 0; i < items.lenght; i++) {
		copy.push("New" + items[i]);
}

items.forEach(function (el, index, array) {
	copy.push(index + "New" + el);
});

console.log(copy);
*/


// ! Если Вы используете метод forEach, Вы не можете прервать итеррирование на каком нибудь элементе

//! ==========своя реализация метода forEach===============================

// // ForEach
//arr.forEach(callback(currentValue[, index[, array]]) {
//   // execute something
// }[, thisArg]);

/*

let arr = [1, 2, 3];
arr[10] = 10;

Array.prototype.forEach2 = function (callback, thisArg) {
	if (this == null) {
		throw new Error("Cant iterate over undefined or null");
	}
	let context = this;

	let O = Object(this);

	if (arguments.length > 1) {
		context = thisArg;
	}

	if (typeof callback !== "function") {
		throw new Error("Callback is not a function");
	}

	let len = O.length;

	let i = 0;

	while (i < len) {
		if (i in O) {
			callback.call(context, this[i], i, O);
		}

		i++;
	}
};

arr.forEach2.call(1, (item, index, array) => {
	console.log({ item, index });
});

//Filter
let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
	if (num <= 1) return false;
	else if (num === 2) return true;
	else {
		for (let i = 2; i < num; i++) if (num % i === 0) return false;
		return true;
	}
}

Array.prototype.filter2 = function (callback, thisArg) {
	if (this == null) {
hrow new Error("Cant iterate over undefined or null");
	}
	let context = this;
	let O = Object(this);
	if (arguments.length > 1) {
		ontext = thisArg;
	}
	if (typeof callback !== "function") {
hrow new Error("Callback is not a function");
	}
	let len = O.length;
	let res = [];
	for (let i = 0; i < len; i++) {
		f(i in O) {
			let current = this[i];
			if (callback.call(context, current, i, O)) {
				res.push(current);
			}

		}
eturn res;
	};

	let prime = array.filter2(isPrime);

	console.log(prime);

*/


//========================================

//! метод filter
// Метод filter — используется для создания нового массива, который будет содержать только отфильтрованные элементы,
// прошедшие проверку по какому-то условию.

// Позволяет Вас отфильтровать ваш исходный массив по какому то критерию, он возвращает результирующий массив,
// в котором будут только те элементы, которые прошли проверку по какому то критерию.

/*
let array = [12,56,8,45,456];
const newArray = array.filter(function (el,index,array) {
	return el > 15;
});
console.log(newArray);
*/

/*
let array = [12,56,8,45,456];
let isBigEno = (elem) => elem < 15; // функцию можно создать отдельно
const minArray = array.filter(isBigEno);
console.log(minArray);
*/

//==========================

//! Метод Map
//Метод map — позволяет создать новый массив с элементами, которые каким-то образом были созданы/преобразованы
// из элементов исходного массива.

// По аналогии с предыдущими метода, проходимся по каждому элементу массива и также будем вызывать callback функцию,
// который поместим в метод map. Метод вернет нам новый массив, каждый элемент нового массива, будет содержать
// значение, которое вернуло функция callback map на каждой иттерации, которая произошла.


/*
let nums = [1,4,9,12,50];
let result = nums.map(function (elem) {
	return elem * 2;
});
console.log(result);
*/

//! or

/*
//через функцию, выведенную отдельно
let nums = [1,4,9,12,50];
let multiplyByTwo = (el) => el * 2;
let result = nums.map(multiplyByTwo);
console.log(result);
 */

//!=============== своя реализация метода map========

//Map
//
// let newArray = arr.map(callback(currentValue[, index[, array]]) {
// return element for newArray, after executing something
// }[, thisArg]);

/*
let array2 = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

Array.prototype.map2 = function (callback, thisArg) {
	if (this == null) {
		throw new Error("Cant iterate over undefined or null");
	}
	let context = this;

	let O = Object(this);

	if (arguments.length > 1) {
		context = thisArg;
	}

	if (typeof callback !== "function") {
		throw new Error("Callback is not a function");
	}

	let len = O.length;

	let newArray = [];

	let i = 0;

	while (i < len) {
		if (i in O) {
			newArray[i] = callback.call(context, this[i], i, O);
		}

		i++;
	}

	return newArray;
};

let increase1 = (num) => num + 1;
let mul2 = (num) => num * 2;

console.log(array2.filter2(isPrime));
console.log(array2.filter2(isPrime).map2(mul2).map2(increase1));
*/


//=================================================

//! метод reduce

// Метод reduce — позволяет пройтись по всем элементам массива и собрать/посчитать единый результат,
// который и будет возвращен этим методом.

/*
const array = [1,2,3,4,5];

let total = array.reduce(function (acc, el) {
	console.log('Acc', acc, 'Current elem', el);
	return acc + el; //
}, 10);

console.log(total);
*/

// Изначально в acc значение 0, и при первой итерации асс = 1, значение аккумулирует. Reduce возвращает значение,
// которое хранится в аккумуляторе. Мы можем передать вторым аргументом - начальное значение нашего асс(аккумулятора)
// Мы можем сказать, что хотим начать с 10.( значением может быть и объект)

/*
const array = ['apple','banan','peach','orange'];

let  fruits = array.reduce((acc, el) => {
	acc[el] = 1;
	return acc; //
}, {});

console.log(fruits);
*/

//!=========своя реализация============

//Reduce
// const array = ['apple','banana','peach','orange'];
//
// let fruits  = array.reduce((acc, elem) => {
//     acc[elem] = 1;
//     return acc;
// }, {});
//
// console.log(fruits);

// Напишите алгоритм, который берет массив и перемещает все нули в конец,
// сохраняя порядок других элементов.

/*
let moveZeros = (arr) =>
	arr.reduceRight(
		(acc, val) => (val === 0 ? [...acc, val] : [val, ...acc]),
		[]
	);

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

//Разворачивание массива массивов
let flattened = [
	[0, 1],
	[2, 3],
	[4, 5]
].reduce((a, b) => a.concat(b));
console.log(flattened);

// Если дан двумерный массив целых чисел, верните выровненную версию массива
//  со всеми целыми числами в отсортированном (возрастающем) порядке.
// Пример: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]],
// ваша функция должна вернуть [1, 2, 3, 4, 5, 6, 7, 8, 9].

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function concatenate(a, b) {
	return a.concat(b);
}

const flattenAndSort = (array) => {
	return array.reduce(concatenate, []).sort(subtract);
};

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

Array.prototype.reduce2 = function (f, result) {
	let i = 0;

	if (arguments.length < 2) {
		i = 1;
		result = this[0];
	}
	for (; i < this.length; i++) {
		result = f(result, this[i], i, this);
	}
	return result;
};
let a = [1, 2, 3, 4];

console.log(a.reduce(add), a.reduce2(add));
console.log(a.reduce(add, 10), a.reduce2(add, 10));

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

Array.prototype.reduce3 = function (callback, initialValue) {
	if (this == null) {
		throw new Error("Cant iterate over undefined or null");
	}

	let result;
	let i = 0;

	let O = Object(this);
	let len = O.length;

	if (typeof callback !== "function") {
		throw new Error("Callback is not a function");
	}

	if (arguments.length >= 2) {
		result = initialValue;
	} else {
		if (len === 0) {
			throw new Error("Reduce of empty array with no initial value");
		}
		result = O[i];
		i++;
	}

	for (; i < this.length; i++) {
		if (i in O) {
			result = callback(result, O[i], i, O);
		}
	}

	return result;
};

console.log([1, 2, 3, 4].reduce3(add));
console.log(a.reduce3(concatenate, "X"), a.reduce(concatenate, "X"));
*/