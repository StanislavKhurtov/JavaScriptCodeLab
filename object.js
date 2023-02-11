// Oбьекты

// const person = {
// 	name: 'Stas',
// 	age: 26,
// 	isProgrammer: true,
// 	languages: ['ru', 'en', 'de'],
// 	greet() {
// 		console.log('Great from person')
// 	}
// };


//  console.log(person['age'])
//  person.greet()
//  
//  person.age++;
//  person.languages.push('by') // сохраняются все методы массивов
//  console.log(person)
//  	
//  delete person['age'] // удалить свойство из обьекта
//  console.log(person)


// Деструкторизация

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

///  const {name, age, languages} = person;
///  console.log(name, age, languages)

// ! Клонирование обьектов

/*
const simpleUser = {
	name: 'John Dir',
	age: 37,
	title: 'Developer',
};
*/

/*
const simpleUserCopy1 = {...simpleUser}; // клонируем с помощью spread оператора
const simpleUserCopy2 = Object.assign({}, simpleUser);
const simpleUserCopy3 = Object.create(simpleUser);

// !Возникают вопросы с вложенными свойствами
*/
/*
const simpleUserCopy4 = JSON.parse(JSON.stringify(simpleUser)); 

//! есть проблемы при работе с датами Data
*/

/*
const simpleUserCopy5 = structuredClone(simpleUser); //! лучший способ клонировать обьект

console.log(structuredClone({fn: () => {}})) //! выдаст ошибку , потому что метод не может хранить функиции в обькте, также дом элементы 
*/


