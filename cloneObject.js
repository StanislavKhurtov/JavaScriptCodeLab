/*"use strict";

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

 // Возникают вопросы с вложенными свойствами
*/
/*
const simpleUserCopy4 = JSON.parse(JSON.stringify(simpleUser)); 

// есть проблемы при работе с датами 
*/

/*
const simpleUserCopy5 = structuredClone(simpleUser); // лучший спсоб клонировать обьект

console.log(structuredClone({fn: () => {}})) // выдаст ошибку , потому что метод не может хранить функиции в обькте, также дом элементы 
*/