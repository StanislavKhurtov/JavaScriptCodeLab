// Методы массивов

// 1. метод Reduce - используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата! 

//  let nums = [1,2,3,4,5,4,3,2,5,6,7,8,9,78,4]; 
//  let sum = nums.reduce((x, y) => x + y) 
//  console.log(sum)

// 2. удалить ложное значение из массива c помощью мемтода filter ( false, 0 , "", null, Nan, Undefined) 


// let arr = [false, "red", 0 , 2,  "", null, true, NaN, undefined]
// let newArr = arr.filter(Boolean) // метод filter создает новый масcив
// console.log(newArr)
// console.log(arr)

// 3. Конвектировать массив в обьекст с помощью спред оператора

//  let cars = ["Honda", "Toyota", "Seat", "Opel", "VW", "BMW", "Audi"];
//  let obj = {...cars}
//  console.log(obj)
//  console.log(cars)

// 4. Как извлечь уникальное значение из массива ( использовать обьект set и метод Array.from)

//  let nums = [1,1,1,1,2,3,3,3,3,3,3,3,4,5,4,3,2,5,6,7,8,9,78,4];
//  let uniNums = [...new Set(nums)] //  обьект set
//  let uniNums = Array.from(new Set(nums)) // через метод Array.from с новым обьектом Set
//  console.log(uniNums)
//  console.log(nums)

// 5. Заменить определеное значение в коде - метод splice

// let cars = ["Honda", "Toyota", "Seat", "Opel", "VW", "BMW", "Audi"];
// cars.splice( 3, 2, "Nissan", "Tesla"); // первый параметр указывает где мы хотим начать модификацию, второй параметр - сколько значенией мы хотим заменить 
// console.log(cars);

// 6. Перебор массива без метода map с помощью метода Array.from

//  let newCars = [
//  	{car: "Honda", color: "Red"},
//  	{car: "Toyota", color: "Green"},
//  	{car: "Seat", color: "Blue"},
//  	{car: "BMW", color: "Red"},
//  ];
//  let carName = Array.from(newCars, ({car}) => car);
//  console.log(carName);
//  console.log(newCars);

// 7. Очистить массив разными методами

//let nums = [1,1,1,1,2,3,3,3,3,3,3,3,4,5,4,3,2,5,6,7,8,9,78,4];
//nums = [];                  //
//nums.splice(0, nums.length) //
//console.log(nums)

// 8. Найти пересечение массивов

//  let nums = [1,1,1,1,2,3,3,3,3,3,3,3,4,5,4,3,2,5,6,7,8,9,78,4];
//  let nums2 = [1,21,3,46,54,8,74];
//  let newNums = [...new Set(nums)].filter(el => nums2.includes(el));
//  console.log(newNums);

// 9. Сделать реверс массива(перевернуть )

//  let nums = [1,1,1,1,2,3,3,3,3,3,3,3,4,5,4,3,2,5,1,6,7,8,9,78,4];
//  let newNums = nums.reverse();
//  console.log(newNums);

// 10. Найти индекс последнего вхождения

//  let nums = [1,1,1,1,2,3,3,3,3,3,3,3,4,5,4,3,2,5,1,6,7,8,9,78,4];
//  let lastIndex = nums.lastIndexOf(1);
//  console.log(lastIndex)

// 11. Метод fill - заполнить массив данными, создаем новый массив и заполняем данными

//  let newArr = new Array(10).fill(3)
//  console.log(newArr);

// 12. Найти случайное число из массива

//  let nums2 = [1,21,3,46,54,8,74];
//  let randNum = nums2[(Math.floor(Math.random() * (nums2.length)))]
//  console.log(randNum);














