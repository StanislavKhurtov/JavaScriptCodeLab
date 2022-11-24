// обьекты

const person = {
	name: 'Stas',
	age: 26,
	isProgrammer: true,
	languages: ['ru', 'en', 'de'],
	greet() {
		console.log('Great from person')
	}
};


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


