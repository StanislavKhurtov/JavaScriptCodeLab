// 1. Функции

// Функции Declaration

//  function greet(name) {
//  	console.log('Привет - ', name)
//  }

//Функция 

//  const greet2 = function (name) {
//  	console.log('Привет 2 - ', name)
//  }

//  greet('Lena')
//  greet2('Lena')
//  
//  console.log(typeof greet)

// 2. Анонимные функции

//  let counter = 0
//  const interval = setInterval(function() {
//  	if (counter === 5) {
//  		clearInterval(interval)
//  	} else {
//  		console.log(++counter)
//  	}
//  }, 1000)


// 3. Стрелочные функции

//  const arrow = (name) => {  
//	console.log('Привет - ', name)
//  }
//  arrow('Stas')

//  const arrow2 = el => console.log('Привет - ', el);
//  arrow2('Stas');

//  const pow2 = el => {
//  	return el ** 2
//  }

//  const pow2 = el => el ** 2
//  
//  console.log(pow2(5))

//  4. Параметры по умолчанию

// const sum = (a, b = a * 2) => a + b 
// 
// console.log(sum(5))

// 5. Замыкание

//  function createMemeber(name) {
//  	return function(lastName) {
//  		console.log(name + ' ' + lastName)
//  	}
//  }
//  
//  const logName = createMemeber('Stas')
//  
//  console.log(logName('Hurtov'))