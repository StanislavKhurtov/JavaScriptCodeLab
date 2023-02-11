// DOM - Document Object Model 

//========================================================================================================================================================

// Доступ к элементам:

const title = document.getElementById('title'); // по id
// const p = document.getElementsByClassName('text'); // по именни класса - возращает коллекцию
// const h1 = document.getElementsByTagName('h1'); // по тегу - возвращает коллекцию


// const title = document.querySelector('#title');
// const p = document.querySelectorAll('.text');
// const h1 = document.querySelector('h1'); // возвращяет элемент , а не коллекцию
//const menuList = document.querySelector('.menu ul');

// делая запрос с помощью document.querySelector - мы получаем НоДы (элементы)

//========================================================================================================================================================

// Содержимое элементов:

// добавив свойство innerHTML - мы получаем содержимое элемента в строковом формате

//  const menu = document.querySelector('.menu');

// title.innerHTML = '<h2 style="color: red;">Dom</h2>'; // мы поменяли из JS содкржимое html

// console.log(title.textContent);

//console.log(menu.innerHTML); //мы получаем содержимое элемента в строковом формате 

//========================================================================================================================================================


// Атрибуты

//свойстро getAtribute()

//  const link = document.querySelector('.link');
//  const linkAtrib = link.getAttribute('href');

// поменять атрибут с помощью свойства setAttribute

//  link.setAttribute('href', 'https://ya.ru/');
//  link.setAttribute('title', 'Go to yandex');
//  link.textContent ='Yandex';

//  console.log(linkAtrib);

//========================================================================================================================================================

// Классы

//const box1 = document.querySelector('#box1'),
//	  box2 = document.querySelector('#box2');


//box1.classList.add('blue');

//box2.classList.remove('blue');

// содержится какой нибудь класс у элемента

//const hasClass = box2.classList.contains('blue');

//console.log(hasClass);

//if (hasClass) {
//	box2.classList.remove('blue');
//} else {
//	box2.classList.add('blue');
//}
