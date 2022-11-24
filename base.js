//  Начинался , как LifeScript, потом переименован в JavaScript;
//  В далнейшем появилось EcmmScript(javaScript);
//  До 2005-2007 был не сильно мощным, появилась библиотека JQuerry;
//  В 2009 году Райн Дальф разработал на основе браузера, выташил из него движк. и через с++ создал NodeJS;
//   2015 год выпустила ES6 - феномельное обновление ( появились классы и тд, стал полноценным языком программирования);

//  JS применяется для web ( fronted), разрабатывает серверную часть Server (backend(NodeJS)), разрабатывает мобильные приложения Mobile, а такжу декстопные приложения (Dekstop);


// 1. Переменные 

//  var, let , const;
//  var name = 'Stas';
//  const lastName = 'Hurtov';
//  let age = 26;


//2. Мутирование 

//  console.log('Имя человека ' + name + ', а возраст человека: ' + age);
//  const lstName = prompt('Введите фамилию');
//  const firstName = prompt('Введите имя' );


// 3. Операторы

//  +,-,/,* 
//  const currentAge = 2022;
//  const birthYear = 1984;

// const age = currentAge - birthYear;

//  console.log(age)

// 4. Типы данных

//  оператор typeof показывает какой тип данных console.log(typeof )

//  Строка
//  Число
//  BigInt
//  null
//  undefined
//  Boolean
//  Object
//  Symbol

// 5. Приоритеты операций

// 6. Условные операторы


//  const courseStatus = 'fail';  // ready, fail, pending
//  
//  if (courseStatus === 'ready') {
//  	console.log('Курс уже готов и его можно проходить')
//  } else if (courseStatus === 'pending') {
//  	console.log('Курс пока находиться в процессе разработки')
//  } else {
//  	console.log('Курс не готов')
//  };

//  Тернарное выражение

// const isReady = true
//  
//  if (isReady) {
//      console.log('Все готово')
//  } else {
//  	console.log('Все не готово')
//  };

// isReady? console.log('Все готово') : console.log('Все не готово');

// 7. Булевое логика ( true false (правда или ложь)) && или ||


// 8. Функции

//  function calc(el) {
//  	const year = 2022
//  	return year - el
//  };
//  
//  console.log(calc(1984));

// 9. Массивы

const cars = ['Мазда', 'Мерседес', 'Форд',];
//  const cars = new Array('Мазда', 'Мерседес', 'Форд')

//  console.log(cars)
//  console.log(cars[1])

// cars[cars.lenght] = 'Porsche'; // добавит в конец массива 

// 10. Циклы 

//  for (let i = 0; i <= cars.length; i++ ) {
//  	const car = cars[i]
//  	console.log(car)
//  };

//  Хороший способ для итерированния массивов

//  for (let car of cars) {
//  	console.log(car)
//  };

// 11. Обьекты

//  const person = {
//  	firstName: 'Stas',
//  	lastName: 'Hurtov',
//  	age: 1984,
//  	language: ['Ru', 'En', 'De'],
//  	hasWife: false,
//  	greet: function() {
//  		console.log('greet')
//  	}
//  };
//  
//  console.log(person.language[1])



