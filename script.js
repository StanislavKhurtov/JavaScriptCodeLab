'use strict';

//========================================================================================================================================================

// Условия


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


// Тернапный оператор

//(num == 50) ? console.log('Ok!') : console.log('Error');



// Конструкция Switch ( идет только строгое сравнение)

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

// Циклы

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
//		//break; // при заданом условие останавливает цикл
//		continue;  // при заданном условие пропускает это условие и идет дальше по циклу
//	}
//console.log(i);  // цикл отработал одну итерацию
//}

//========================================================================================================================================================


// Функции

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

//const logger = function () {
//	console.log('Hello');
//};
//
//logger();

//function logger() {
//	console.log('Hello');
//};
//
//logger();
//

//  const calc = (a, b) =>{
//  	let c = a + b;
//  	return c;
//  } ;
//  console.log(calc(10,5))


//========================================================================================================================================================


//  Свойства и методы String & number

//  const str = "fruit";
//  const arr = [1, 2, 4];
//
//  const per = str.toUpperCase();
//
//  console.log(str);
//  console.log(per);
//
//  const fruit = "Some fruit";
//
//  console.log(fruit.length);
//
//  const logg = "Hello World";
//
//  console.log(logg.slice(6));// с помощью метода slice можно вырезать нужный нам кусочек строки
//
//  console.log(logg.substring(6)); // в методе substring не используются отрицатедльные значений!
//
//  console.log(logg.substr(6, 5)); // в методе substr первый указывается номер начала позиции,
//                                              // а вторым длину строки которую нужно вырезать;
//
//
//  const num = 12.2;
//
//  console.log(Math.round(num));  // округляет до цлого числа
//
//  const te = "12.2px";
//
//  console.log(parseInt(te)); // привело к типу число и округлило
//  console.log(parseFloat(te)); // возвращает в дробном виде и в числовом типе;













