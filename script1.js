<<<<<<< HEAD
'use strict';

//========================================================================================================================================================

//! Условия


//if ( 4 == 9) {
//	console.log('Ok!');
//} else {
//	console.log('Error');
//}

//const num = 50;

//if (num < 49) {
//	console.log('Error');
//} else if (num > 100) {
//	console.log('Много');
//} else {
//	console.log('Ok!');
//}


//! Тернарный оператор

//(num == 50) ? console.log('Ok!') : console.log('Error');



// Конструкция Switch (идет только строгое сравнение)

//  switch (num) {
//  	case 49:
//  		console.log('Неверно');
//  		break;
//  	case 100:
//  		console.log('Неверно');
//  		break;
//  	case 50:
//  		console.log('В точку');
//  		break;
//  	default:
//  		console.log('Error');
//  		break;
//  }


//========================================================================================================================================================

//! Циклы

//let num = 50;
//
// первый цикл while

//while (num <= 55) {
//	console.log(num);
//	num++;
//};


// второй цикл do... while

//do {
//	console.log(num);
//	num++;
//}
//while (num <= 55);

// третий цикл for


//for (let i = 1; i <= 10; i++) {
//	if (i === 3) {
//		break; // при заданном условие останавливает цикл
//		continue;// при заданном условие пропускает это условие и идет дальше по циклу
//	}
//console.log(i);  // цикл отработал одну итерацию
//}

//========================================================================================================================================================


//! Функции

//  let num = 20;
//
//  function showMessage(text) {
//  	console.log(text);
//  	let num = 10;
//  	console.log(num);
//  }
//
//  showMessage('Привет');
//
//  console.log(num);
//
//  function calc(a, b) {
//  	return (a + b);
//
//  };
//
//  console.log(calc(10,20));

//! Объявление функции

//! function declaration;

//const logger = function () {
//	console.log('Hello');
//};

//logger();

//! function definition;

//function logger() {
//	console.log('Hello');
//};
//logger();

//! стрелочная функция;

//  const calc = (a, b) =>{
//  	let c = a + b;
//  	return c;
//  } ;
//  console.log(calc(10,5))


//========================================================================================================================================================


//!  Свойства и методы String & number

//  const str = "fruit";
//  const arr = [1, 2, 4];
//
//  const per = str.toUpperCase();
//
//  console.log(str); // fruit
//  console.log(per); // FRUIT
//
//  const fruit = "Some fruit";
//
//  console.log(fruit.length);  // 10
//
//  const logg = "Hello World";
//
//  console.log(logg.slice(6));// World // с помощью метода slice можно вырезать нужный нам кусочек строки
//
//  console.log(logg.substring(6)); // World // в методе substring не используются отрицательные значений!
//
//  console.log(logg.substr(6, 5)); // World // в методе substr первый указывается номер начала позиции,
                                  // а вторым длину строки которую нужно вырезать;


//  const num = 12.2;
//
//  console.log(Math.round(num));  // 12 // округляет до целого числа
//
//  const te = "12.2px";
//
//  console.log(parseInt(te)); // 12 // привело к типу число и округляет
//  console.log(parseFloat(te));// 12.2 // возвращает в дробном виде и в числовом типе;

//========================================================================================================================================================


//! Callback - функция - функция которая должна быть выполнена,
// после того как другая функция завершила свое выполнение.

//  function first() {
//      //do something
//      setTimeout(function () {
//          console.log(1);
//      }, 1000);
//  }
//
//  function second() {
//      console.log(2);
//  }
//
//  //first();
//  //second();
//
//  function learnJS(lang, callback) {
//      console.log(`Я учу: ${lang}`);
//      callback();
//  }
//
//  learnJS('JavaScript', first);



//===========================================================================================

//! Объекты, деструктуризация


//  const options = {
//      name: "test",
//      width: 1024,
//      height: 1600,
//      colors: {
//          border: 'black',
//          bg: "red",
//      },
//      makeTest: function () {
//          console.log("Test");
//
//      }
//  };
//  delete options.colors.bg; // delete удаляет свойство из объекта
//
//  console.log(options.colors); // { border: 'black' }

// Перебрать все свойства объекта c помощью for ... in
// с помощью метода for... of мы не можем перебрать объекты

// У объекта нет свойства length, как у массива. Но можно узнать другими методами,
// не всегда этот метод является точным, лучше через Object.keys()

//  let counter = 0;
//
//  for (let key in options) {
//      if (typeof(options[key]) === 'object') {
//          for (let i in options[key]) {
//              console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//              counter++;
//          }
//      } else {
//          console.log(`Свойство ${key} имеет значение ${options[key]}`);
//          counter++;
//      }
//  }
//  console.log(counter);

// метод Object.keys поможет нам получить массив со всеми ключами,
// соответственно добавив свойство length мы узнаем количество свойств массива

//  console.log(Object.keys(options)); // преобразует объект в массив
//  console.log(Object.keys(options).length);
//
//  options.makeTest();
//
//  // Деструктуризация объекта
//
//  const {bg}  = options.colors;
//
//  console.log(bg);

//===========================================================================================

//! Массивы и псевдомассивы


//   const arr = [1, 23, 14 ,5, 38, 111];
//
//   arr.sort(compareNum);
//
//   // console.log(arr.length);
//
//   console.log(arr);
//
// !   метод sort - внимание, все из-за того что метод применяет алгоритм быстрой сортировки,
//    нужно прописать callback функцию, так как метод будет сортировать как строки


//  function compareNum(a, b) {
//    return a - b;
//  }


//arr.pop(); //  удаляет последний элемент массива
//arr.push(10);  // добавляет элемент в конец массива


// arr.shift(); // удаляет первый элемент массива
// arr.unshift(10); // добавляет первый элемент массива
// минус 2-х этих методов в том, что из-за них элементы меняют свои индексы


// const df = arr.pop();

// console.log(df);

// Перебрать массив

//обычный цикл

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

// с помощью for...of  // плюс такого метода перебора массива, то что можно использовать break & continue

// for (let value of arr) {
//     console.log(value);
// }

// метод forEach()  //не создает новый массив, как например метод map

// arr.forEach( function (item, i, arr){
// console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// метод arr.map, arr.every/some, arr.filter, arr.reduce - модифицируют массива, то есть создают новый массив


// Метод split - получаем из строчки - массив, метод join - преобразует в строчку
// метод sort - сортирует массив, обращать внимание к сортировке числами, сортируется как строки

// const str = prompt("", "");
// const products = str.split(",");
// products.sort();
// console.log(products.join(";"));


// Понятие псевдомассивы - по факту это такой объект, похожий на массив,
// но к нему нельзя применить методы массивов;


//===========================================================================================

//! Передача данных по ссылке и по значению

// !!!! Есть глубокие и поверхностные копии объектов, в этом блоке разберем поверхностные копии

// разберем поверхностные копии с помощью циклов

//  function copy(mainObg) {
//      let objCopy = {};

//      let key;
//      for (key in mainObg) {
//          objCopy[key] = mainObg[key];
//      }
//      return objCopy;
//  }

//  const copy = (mainObg) => {
//      let objCopy = {};
//
//      let key;
//      for (key in mainObg) {
//          objCopy[key] = mainObg[key];
//      }
//      return objCopy;
//  };
//
// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(number);
//
// newNumbers.a = 10;
// newNumbers.c.x = 10; // переменная с - поменялась в двух объектах, так при замене мы обратились к ссылке
//
//
// console.log(newNumbers);
// console.log(number);
//
//
// // C помощью Object.assign
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// console.log(Object.assign(number, add)); // первое значение мы устанавливаем - куда надо скопировать,
//                                          // вторым значением откудо надо скопировать;
//
//
// const fisrtNumber = Object.assign({}, add); // мы сделали клон объектов
// fisrtNumber.d = 40;
//
// console.log(fisrtNumber);
// console.log(add);

// разберем копию массивов

// const oldArray = ['a', 'b', 'c'];
//
// const newArray = oldArray.slice(); // создал новый массив
//
// newArray[1] = 'asdsadsadsa';
//
// console.log(newArray);
// console.log(oldArray);
//
// // Spread операторы = оператор три точки
//
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejornal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
//
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2 ,5, 9];
//
//
// log(...num);
//
// // 4 способ создать поверхностных копий и опять с помощью spread оператора
//
// const array = ['a', 'b'];
//
// const sprArr = [...array];
//
// sprArr[2] = 'c';
// sprArr[1] = 'p';
//
//
// const q = {
//     one: 1,
//     two: 2
// };
//
// const nwOb = {...q, three: 3};
//
// nwOb.two = 56565;
//
// console.log(array);
// console.log(sprArr);
//
//
// console.log(q);
// console.log(nwOb);

//===========================================================================================


// ООП (Объектно-Ориентированное Программирование) - наука о том, как делать правильную архитектуру

//   let str = 'some';
//   let strObj = new String(str);
//
//   console.log(typeof(str));    // string
//   console.log(typeof(strObj)); // object
//
//   console.dir([1 ,3, 4]);
//
//  const soldier = {
//    health:400,
//    armor: 100,
//      sayHello: function () {
//        console.log('Hello');
//      }
//
//  };

//  const jonh = {
//      health: 100
//  };


//jonh.__proto__ = soldier; // объект john наследует прототип ( шаблон можно сказать) soldier
                          // такой формат уже не надо использовать = устаревший,
                          // сейчас используется Object.create,Object.setPrototypeOf, Object.getPrototypeOf

//console.log(jonh.armor);

// Object.setPrototypeOf(jonh, soldier);
//
// console.log(jonh.sayHello());

//  const jonh = Object.create(soldier);
//
//  console.log(jonh.armor);

//===========================================================================================

// Рефакторинг кода - переписывание под новые условия, под новые задачи

//===========================================================================================




























































=======
'use strict';

//========================================================================================================================================================

//! Условия


//if ( 4 == 9) {
//	console.log('Ok!');
//} else {
//	console.log('Error');
//}

//const num = 50;

//if (num < 49) {
//	console.log('Error');
//} else if (num > 100) {
//	console.log('Много');
//} else {
//	console.log('Ok!');
//}


//! Тернарный оператор

//(num == 50) ? console.log('Ok!') : console.log('Error');



// Конструкция Switch (идет только строгое сравнение)

//  switch (num) {
//  	case 49:
//  		console.log('Неверно');
//  		break;
//  	case 100:
//  		console.log('Неверно');
//  		break;
//  	case 50:
//  		console.log('В точку');
//  		break;
//  	default:
//  		console.log('Error');
//  		break;
//  }


//========================================================================================================================================================

//! Циклы

//let num = 50;
//
// первый цикл while

//while (num <= 55) {
//	console.log(num);
//	num++;
//};


// второй цикл do... while

//do {
//	console.log(num);
//	num++;
//}
//while (num <= 55);

// третий цикл for


//for (let i = 1; i <= 10; i++) {
//	if (i === 3) {
//		break; // при заданном условие останавливает цикл
//		continue;// при заданном условие пропускает это условие и идет дальше по циклу
//	}
//console.log(i);  // цикл отработал одну итерацию
//}

//========================================================================================================================================================


//! Функции

//  let num = 20;
//
//  function showMessage(text) {
//  	console.log(text);
//  	let num = 10;
//  	console.log(num);
//  }
//
//  showMessage('Привет');
//
//  console.log(num);
//
//  function calc(a, b) {
//  	return (a + b);
//
//  };
//
//  console.log(calc(10,20));

//! Объявление функции

//! function declaration;

//const logger = function () {
//	console.log('Hello');
//};

//logger();

//! function definition;

//function logger() {
//	console.log('Hello');
//};
//logger();

//! стрелочная функция;

//  const calc = (a, b) =>{
//  	let c = a + b;
//  	return c;
//  } ;
//  console.log(calc(10,5))


//========================================================================================================================================================


//!  Свойства и методы String & number

//  const str = "fruit";
//  const arr = [1, 2, 4];
//
//  const per = str.toUpperCase();
//
//  console.log(str); // fruit
//  console.log(per); // FRUIT
//
//  const fruit = "Some fruit";
//
//  console.log(fruit.length);  // 10
//
//  const logg = "Hello World";
//
//  console.log(logg.slice(6));// World // с помощью метода slice можно вырезать нужный нам кусочек строки
//
//  console.log(logg.substring(6)); // World // в методе substring не используются отрицательные значений!
//
//  console.log(logg.substr(6, 5)); // World // в методе substr первый указывается номер начала позиции,
                                  // а вторым длину строки которую нужно вырезать;


//  const num = 12.2;
//
//  console.log(Math.round(num));  // 12 // округляет до целого числа
//
//  const te = "12.2px";
//
//  console.log(parseInt(te)); // 12 // привело к типу число и округляет
//  console.log(parseFloat(te));// 12.2 // возвращает в дробном виде и в числовом типе;

//========================================================================================================================================================


//! Callback - функция - функция которая должна быть выполнена,
// после того как другая функция завершила свое выполнение.

//  function first() {
//      //do something
//      setTimeout(function () {
//          console.log(1);
//      }, 1000);
//  }
//
//  function second() {
//      console.log(2);
//  }
//
//  //first();
//  //second();
//
//  function learnJS(lang, callback) {
//      console.log(`Я учу: ${lang}`);
//      callback();
//  }
//
//  learnJS('JavaScript', first);



//===========================================================================================

//! Объекты, деструктуризация


//  const options = {
//      name: "test",
//      width: 1024,
//      height: 1600,
//      colors: {
//          border: 'black',
//          bg: "red",
//      },
//      makeTest: function () {
//          console.log("Test");
//
//      }
//  };
//  delete options.colors.bg; // delete удаляет свойство из объекта
//
//  console.log(options.colors); // { border: 'black' }

// Перебрать все свойства объекта c помощью for ... in
// с помощью метода for... of мы не можем перебрать объекты

// У объекта нет свойства length, как у массива. Но можно узнать другими методами,
// не всегда этот метод является точным, лучше через Object.keys()

//  let counter = 0;
//
//  for (let key in options) {
//      if (typeof(options[key]) === 'object') {
//          for (let i in options[key]) {
//              console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//              counter++;
//          }
//      } else {
//          console.log(`Свойство ${key} имеет значение ${options[key]}`);
//          counter++;
//      }
//  }
//  console.log(counter);

// метод Object.keys поможет нам получить массив со всеми ключами,
// соответственно добавив свойство length мы узнаем количество свойств массива

//  console.log(Object.keys(options)); // преобразует объект в массив
//  console.log(Object.keys(options).length);
//
//  options.makeTest();
//
//  // Деструктуризация объекта
//
//  const {bg}  = options.colors;
//
//  console.log(bg);

//===========================================================================================

//! Массивы и псевдомассивы


//   const arr = [1, 23, 14 ,5, 38, 111];
//
//   arr.sort(compareNum);
//
//   // console.log(arr.length);
//
//   console.log(arr);
//
// !   метод sort - внимание, все из-за того что метод применяет алгоритм быстрой сортировки,
//    нужно прописать callback функцию, так как метод будет сортировать как строки


//  function compareNum(a, b) {
//    return a - b;
//  }


//arr.pop(); //  удаляет последний элемент массива
//arr.push(10);  // добавляет элемент в конец массива


// arr.shift(); // удаляет первый элемент массива
// arr.unshift(10); // добавляет первый элемент массива
// минус 2-х этих методов в том, что из-за них элементы меняют свои индексы


// const df = arr.pop();

// console.log(df);

// Перебрать массив

//обычный цикл

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

// с помощью for...of  // плюс такого метода перебора массива, то что можно использовать break & continue

// for (let value of arr) {
//     console.log(value);
// }

// метод forEach()  //не создает новый массив, как например метод map

// arr.forEach( function (item, i, arr){
// console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// метод arr.map, arr.every/some, arr.filter, arr.reduce - модифицируют массива, то есть создают новый массив


// Метод split - получаем из строчки - массив, метод join - преобразует в строчку
// метод sort - сортирует массив, обращать внимание к сортировке числами, сортируется как строки

// const str = prompt("", "");
// const products = str.split(",");
// products.sort();
// console.log(products.join(";"));


// Понятие псевдомассивы - по факту это такой объект, похожий на массив,
// но к нему нельзя применить методы массивов;


//===========================================================================================

//! Передача данных по ссылке и по значению

// !!!! Есть глубокие и поверхностные копии объектов, в этом блоке разберем поверхностные копии

// разберем поверхностные копии с помощью циклов

//  function copy(mainObg) {
//      let objCopy = {};

//      let key;
//      for (key in mainObg) {
//          objCopy[key] = mainObg[key];
//      }
//      return objCopy;
//  }

//  const copy = (mainObg) => {
//      let objCopy = {};
//
//      let key;
//      for (key in mainObg) {
//          objCopy[key] = mainObg[key];
//      }
//      return objCopy;
//  };
//
// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(number);
//
// newNumbers.a = 10;
// newNumbers.c.x = 10; // переменная с - поменялась в двух объектах, так при замене мы обратились к ссылке
//
//
// console.log(newNumbers);
// console.log(number);
//
//
// // C помощью Object.assign
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// console.log(Object.assign(number, add)); // первое значение мы устанавливаем - куда надо скопировать,
//                                          // вторым значением откудо надо скопировать;
//
//
// const fisrtNumber = Object.assign({}, add); // мы сделали клон объектов
// fisrtNumber.d = 40;
//
// console.log(fisrtNumber);
// console.log(add);

// разберем копию массивов

// const oldArray = ['a', 'b', 'c'];
//
// const newArray = oldArray.slice(); // создал новый массив
//
// newArray[1] = 'asdsadsadsa';
//
// console.log(newArray);
// console.log(oldArray);
//
// // Spread операторы = оператор три точки
//
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejornal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
//
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2 ,5, 9];
//
//
// log(...num);
//
// // 4 способ создать поверхностных копий и опять с помощью spread оператора
//
// const array = ['a', 'b'];
//
// const sprArr = [...array];
//
// sprArr[2] = 'c';
// sprArr[1] = 'p';
//
//
// const q = {
//     one: 1,
//     two: 2
// };
//
// const nwOb = {...q, three: 3};
//
// nwOb.two = 56565;
//
// console.log(array);
// console.log(sprArr);
//
//
// console.log(q);
// console.log(nwOb);

//===========================================================================================


// ООП (Объектно-Ориентированное Программирование) - наука о том, как делать правильную архитектуру

//   let str = 'some';
//   let strObj = new String(str);
//
//   console.log(typeof(str));    // string
//   console.log(typeof(strObj)); // object
//
//   console.dir([1 ,3, 4]);
//
//  const soldier = {
//    health:400,
//    armor: 100,
//      sayHello: function () {
//        console.log('Hello');
//      }
//
//  };

//  const jonh = {
//      health: 100
//  };


//jonh.__proto__ = soldier; // объект john наследует прототип ( шаблон можно сказать) soldier
                          // такой формат уже не надо использовать = устаревший,
                          // сейчас используется Object.create,Object.setPrototypeOf, Object.getPrototypeOf

//console.log(jonh.armor);

// Object.setPrototypeOf(jonh, soldier);
//
// console.log(jonh.sayHello());

//  const jonh = Object.create(soldier);
//
//  console.log(jonh.armor);

//===========================================================================================

// Рефакторинг кода - переписывание под новые условия, под новые задачи

//===========================================================================================




























































>>>>>>> 28a5f9c043cc8a11c2c16bda2cf106847ff60f4a
