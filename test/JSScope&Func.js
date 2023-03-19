/*
!Что будет выведено в консоль?

var a = 1,
b = function a(x) {
	x && a(--x);
};
console.log(a)

result: 1

*/

/*
!Что будет выведено в консоль?

console.log(message);
var message = 'hello';

result: undefined
*/


/*
!Что будет выведено в консоль?

for (var i = 0; i < 10; i++ ) {
	//...
}
console.log(i)

res: 10

*/

/*
!Какой будет результат выполнения кода?


(
	function (a) {
		arguments[0] = 10;
		return a;
	}
)(5);

res: 10

*/

/*
!Какой будет результат выполнения кода?



const foo = bar();
const number = 2;

function bar() { return number; }


res: ReferenceError: number is not defined

*/


/*
!Какой будет результат выполнения кода?


function foo(a, b) {
	return a * b;
}

const bar = foo.bind(null, 2);
bar(2);

res:4

*/

/*
!Каким образом осуществляется передача параметров в функцию?

Все переменные передаются по ссылке

Все переменные передаются по значению

Примитивы передаются по значению, а объекты - по ссылке]

*/


/*
!Укажите, что в JavaScript подвергается всплытию (hoisting)?

Function expression

Function declaration]

Arrow function

Объявление переменной]

Присваивание значения переменной

*/

/*
!Укажите правильный способ получения доступа ко всем аргументам функции:

function foo() {
	console.log(Function.qetArguments(this));
}


!!!function foo() {
!!!	console.log(arguments);
!!!}

function foo() {
	console.log(foo.getArguments());
}

function foo() {
	console.log(this.arguments);
}
*/

/*
!Что будет выведено в консоль?

function getThis() {
	return this;
}

console.log(getThis());

res: [object Window]

*/

/*
!Что будет выведено в консоль?

let name = "John";

function printName() {
	let name = 'Peter';
	console.log(name);
}

printName();


res: 'Peter'

*/


/*
!Что будет выведено в консоль?

 function foo() {console.log(this);}
 foo.call(null);


 res: window

*/

/*
!Что будет выведено в консоль ?

for (let i = 0; i < 3; i++) {
	setTimeout(function () {
		console.log(i)
	}, 1000)
}

res: 0 1 2;
*/

/*
!Что такое замыкание?

Внутренняя область видимости функции

Способность функции обращаться к внешней области видимости

Способность языка JS создавать блочную область видимости

Способность функции запоминать переменные из внешней области видимости в момент ее создания]

*/


/*
!Что будет выведено в консоль?


let name = 'John';

function printName() {
	console.log(name);
}

setTimeout(() => {
	let name = 'Peter';
	printName();
}, 1000)


res: 'John'

*/

/*
!Что будет выведено в консоль?

let f = function g() {
	return 23;
};

console.log(typeof g());


res: возникнет ошибка

*/

/*
!Что будет выведено в консоль?

function foo() {
	return { bar: 1 };
}
console.log(typeof foo().bar)

res: number

*/

/*

!Что будет выведено в консоль?

"use strict"

function getThis() {
	return this;
}

console.log(getThis());

res: undefined

*/
/*

!Что будет выведено в консоль?

"use strict"

const details = {
	message: 'Hello!',
}
function getMessage() {
	return this.message;
}

console.log(getMessage.call(details));

res: Hello!

*/

/*

!Что будет выведено в консоль?

const details = {
	name: 'John!',
}
function getMessage(message) {
	return `${message} ${this.name}`;
}

console.log(getMessage.apply(details, ['Hello']));

res: Hello John!

*/

/*
Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов?

let f = function(a,b) { return a+b }  ]

let f = new Function("a,b", "return a+b")

let f = new Function("a", "b", "return a+b")

let f = (a, b) => a + b   ]

let f = (a, b) => { a + b }

*/

/*
!Что будет выведено в консоль?


printMessage();

function printMessage() {
	console.log('Hello!');
}

res: Hello!
*/

/*
!Что будет выведено в консоль?

var name = 'John';

var user = {
	name: "Peter",
	printMessage() {
		console.log(`Hello, ${this.name}!`);
	}
};

var printMessage = user.printMessage;
printMessage();

res: 'Hello, John!'

*/

/*
!Что будет выведено в консоль?


console.log(message);
let message = 'hello';


res: Возникнет ошибка
*/


/*
!Что будет выведено в консоль?


for (var i = 0; i < 3; i++) {
	setTimeout(function () {
		console.log(i)
	}, 1000)
}


res: 3 3 3
*/
/*
! Что будет выведено в консоль?


var name = 'John';

function printName() {
	console.log(name)
	var name = 'Peter';
	console.log(name);
}
printName();


res: undefined 'Peter'

*/