// Массивы

//const cars = ['Мазда', 'Форд', "БМВ", "Мерседес"];
//  
//const fib = [1, 1, 2, 3, 5, 8, 13];
//  
//  console.log(cars)

// Методы 

//Добавление и удаление в массив

//  cars.push('Lada') // метод push добавляет новый элемент в конец массива
//   
//  console.log(cars)
//  
//  cars.unshift("Opel") // метод unshift добавляет новый элемент в начало массива
//  
//  console.log(cars)
//  
//  cars.shift() // метод shift удаляет элемент в начале массива
//  
//  console.log(cars)
//  
//  const carOne = cars.shift()
//  
//  console.log(cars)
//  
//  cars.pop()
//  
//  console.log(cars)
//  
//  carsItem = cars.pop()
//  
//  console.log(carsItem)


//console.log(cars.reverse())   // разворачивает значения в массиве

// const index = cars.indexOf('БМВ')
// 
// cars[index] = 'Porsche'
// 
// console.log(cars)




//========================================================================================================================================================

// задача 2 

//  const people = [
//  	{name: 'Stas', budget: 4000},
//  	{name: 'Leha', budget: 3500},
//  	{name: 'Vova', budget: 5000},
//  ]

//const index = people.findIndex( function(person) {
//    return person.budget === 3500
//})

// console.log(people[index])

//  const person = people.find( function(el) {
//      return el.budget === 3500
//  })
//  
//  console.log(person)

//const person = people.find( el => el.budget === 3500)
//
//console.log(person)


//  let findedPerson
//  for (const person of people) {
//  	if (person.budget === 3500) {
//  		findedPerson = person
//  	}
//  }
//  console.log(findedPerson)

//========================================================================================================================================================


// задача 1


//const text = 'Привет, мы изучаем JavaScript'
//const reverseText = text.split('').reverse().join('')
//
//console.log(reverseText)

//========================================================================================================================================================


// Метод MAP возвращает новый массив

//const uperCase = cars.map( el => el.toUpperCase())
//console.log(uperCase)


// const fibNumber = fib.map( el => el **2)
// console.log(fibNumber)

// или

//const pow2 = el => el **2        // красивый код!
//  const fibNumber = fib.map(pow2)
//  console.log(fibNumber)

// Отфильтровать массив 

//const pow2 = el => el **2  
//const fibNumber = fib.map(pow2)
//const FilterArray = fibNumber.filter(el => el > 20)
//console.log(fibNumber)
//console.log(FilterArray)


//========================================================================================================================================================


// Метод reduce

//  const people = [
//  	{name: 'Stas', budget: 4000},
//  	{name: 'Leha', budget: 3500},
//  	{name: 'Vova', budget: 5000},
//  ];
//  
//  const allBudget = people.filter(person => person.budget > 2000).reduce((acc,person) => {
//  	acc += person.budget
//  	return acc
//  }, 0)
//  
//  console.log(allBudget)

























