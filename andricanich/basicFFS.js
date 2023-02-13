
//========================================================================================================================================================

//! DOM - Document Object Model

//===========

// взаимодействие с пользователем

// alert
//alert("Hello World")

//confirm  
//const confirmRes = confirm("хочешь там чего то?");
// console.log(confirmRes);

// Prompt
// const promptRes = prompt("Кто ты?");
// console.log(promptRes);

//===========


// Навигация по документу

/* Самые верхние элементы дерева доступны как свойства обьектов document */

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;

//  console.log(htmlElement);
//  console.log(headElement);
//  console.log(bodyElement);

// Первый и последний дочерние узлы

// const firstClildNode = bodyElement.firstChild;   //получаем перевод строки, как отдельный узел, он первый
// const lastChildNode = bodyElement.lastChild;

//  console.log(firstClildNode);
//  console.log(lastChildNode);

/* В документе,возможно,есть еще "какой то Html-код", 
но на момент выполнения скрипта браузер еще до него не дошелю
Поэтому следует размещать скрипт в самомм конце документа */

// Коллекция chilNodes содержит список всех детей,
// включая текстовые узлы

// const chilNodes = bodyElement.childNodes;

// console.log(chilNodes);

/* Для проверки наличия дечерних узлов, 
существует также специальная функция hasChildNodes()
*/
//  console.log(bodyElement.hasChildNodes());

/*childNodes похож на массив. На самом деле это не массив,
а коллекция - особый перебираемый обьект псевдомассив.

Отличие от массивов:
1. Для перебора коллекции мы можем использовать for..of;
2. Методы массивов не будут работать, потому что коллекция - это не массив*/

//Перебор коллекции

// for (let node of chilNodes) {
// 	console.log(node); // покажем все узлы из коллекции
// };


// Живые коллекции

/* 
Почти все DOM-коллекции, за небольшим исключением, "живые"ю
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы DOM, то они появятся в сохраненной колекции автоматически. 
Еще вернемся к это позже */

// Только для чтения

/*
DOM-коллекция, и даже более - все навигационные свойства, 
перечисленные далее, доступны только для чтения.
Мын не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = ...
Для изменения требуются другие методы 
*/

// Соседний и родительские узлы

//  const previuosSiblingNode = bodyElement.previousSibling; // предыдущий узел
//  const nextSiblingNode = bodyElement.nextSibling;  //следующий узел
//  const parentNode = bodyElement.parentNode; // получаем родителя 

//  console.log(previuosSiblingNode);
//  console.log(nextSiblingNode);
//  console.log(parentNode);

/*
Для большинства задач текстовые узлы и 
узлы-комментарии на м не нужны.
Мы хотим манипулироватьузлами-элемнтами, которые представляют собой теги и 
формируют структуру страницы
*/

//Получаем коллекцию всех дочерних элемнтов

//const bodyChildren = bodyElement.children;
//console.log(bodyChildren);


// Первый и последний дочерние элементы

// const firstClild = bodyElement.firstElementChild;   //получаем первй элемент родителя
// const lastChild = bodyElement.lastElementChild;

//  console.log(firstClild);
//  console.log(lastChild);



// Соседний и родительские элемнты

//  const previuosSibling = bodyElement.previousElementSibling; // предыдущий элемент
//  const nextSiblingNode = bodyElement.nextElementSibling;  //следующий элемент
//  const parentElement = bodyElement.parentElement; // получаем родителя 

//  console.log(previuosSibling);
//  console.log(nextSibling);
//  console.log(parentElement);

//========================================================================================================================================================

// Поиск произвольного элемента

//elem.querrySelectorAll(CSS);

// querrySelectorAll - статичная коллекция

/*
Самый универмальный метод поиска,он
возвращает все элементы внутри elem,
удовлетворяющие данному CSS-селектору.
Этот метод действительно мощный, потому что можно использовать любой CSS-селектор.
*/

//Поиск по селектору класса 

//  const elemOne = document.querySelectorAll('.lesson__list');
//  console.log(elemOne);

//Поиск по селектору тега

//  const elemsTwo = document.querySelectorAll('li');
//  console.log(elemsTwo);

// По смешанному селектору тега и класса

//  const elemsThree = document.querySelectorAll('li.lesson__item-list');
//  console.log(elemsThree);

// Поиск по тегу первого уровня вложенности

//  const elemsFour = document.querySelectorAll('.lesson__list>li');  // первый уровень вложенности
//  console.log(elemsFour);

// Поиск по нескольким классам

//  const elemsFive = document.querySelectorAll('.lesson__list,.lesson__text');
//  console.log(elemsFive);

// Поиск по вложенным классам

//  const elemsSix = document.querySelectorAll('.lesson__list .lesson__text');
//  console.log(elemsSix);

//Поиск по ID

//  const elemsSeven = document.querySelectorAll('#listItem');
//  console.log(elemsSeven);

//Поиск по атрибуту

//  const elemsEight = document.querySelectorAll('[data-item]');
//  console.log(elemsEight);
//  
//Поиск по атрибуту со значением

//  const elemsNine = document.querySelectorAll('[data-item="85"]');
//  console.log(elemsNine);

//==============

// querrySelectorAll - статичная коллекция

// Получение кокретного элементы коллекции

//  const elems = document.querySelectorAll('li');
//  console.log(elems[2]);

//  for (const item of elems) {
//  	console.log(item);
//  }

//  elems.forEach(item => {
//  	console.log(item);
//  });

//Искать можно не только в document

// const subList = document.querySelectorAll('.lesson__sub-list');
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems);

/*
По умолчанию querySelectorAll() проверяет тольео последний
элемент без учета контента
*/


//=======

// elem.querySelector();

/*
Возвращяет первый элемент внутри elem, соответствующий
данному CSS-селектору
*/

//const lessonList = document.querySelectorAll('.lesson__list')[0];

// const lessonList = document.querySelector('.lesson__list');
// console.log(lessonList);


// document.getElementById(ID) и elem.getElementBy*

/*
На данный момент, они используются редко,
так ка querrySelectorAll может их заменить. 
Но отличия есть.
*/

// document.getElementById(ID)

/*
Если у элемента есть атрибут id,
то мы можем получить его вызовом document.getElementById(ID)
*/

/*
id - уникален
Поиск только внутри document
*/

// getElementsBy*

// Внимание - getElementsBy ...а не getElementBy...


/*document.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
коллекцию. Передав '*' вместе тега, можно получить всех потомков.
*/

// const elems = document.getElementsByTagName('li');
// console.log(elems);

/*
document.getElementsByClassName(className)
возвращают элементы которые имеют данный CSS - класс
*/

// const elems = document.getElementsByClassName('lesson__item-list');
// console.log(elems);

/*
getElementsByName('name') возвращяет элементы 
с заданным атрибутом name.
Очень редко испльзуется. Поиск только внутри document.
*/

// const el = document.getElementsByName('list');
// console.log(el);


// Разница методов

// Получаем статическую коллекцию

// const listStatic = document.querySelectorAll('.lesson__item-list');

/*
Получаем "живую" коллекцию. Живая коллекция содержит 
актуальную информацию о Dom-дереве
*/

// const listLive = document.getElementsByClassName('lesson__item-list');

// console.log(listStatic);
// console.log(listLive);

//Создаем новый HTML-обьект

// const lessonList = document.querySelector('.lesson__list');
// lessonList.insertAdjacentHTML (
// 	'beforeend',
// 	'<li class="lesson__item-list">Новый пункт</li>'
//  );
//
//==============

// Метод closest

/*
Метод elem.closest(css) ищет ближайшего предка,
который соответствует CSS-селектору. Сам элемент также включается в поиск.

Предки элемента- это родители, родитель родителя, его родитель и так далеею
Вместе они образуют цепочку иерархии от элемента до вершиныю

Другими словами, этот метод поднимается вверх 
от элемента и проверяет каждого из родителей. Если он
соответствует селектору, поиск прекращается. 
методвозвращяет либо предка, либо null, если такой элемент не найденю

Напомню свойство parentElement возвращает только
непосредственного родителя элемента
*/

// const elem = document.querySelector(".lesson__item-list");
//  const parent = elem.closest('.lesson__list');

//  console.log(parent);

/* Очень полезный метод, часто используется для проверки 
на существование того или ингог родителя, либо для изменения 
родителя конкретного элемента
*/

// Проверка matches

/* ничего не ищет , а проверяет , 
удовлетворяет ли элемент CSS-селектору и возвращяет 
true || false.
*/

//  const elems = document.querySelectorAll(".lesson__item-list");
//  
//  for (let elem of elems) {
//  	if (elem.matches('[class$="lesson__item-list_red"]')) {
//  		console.log('Красный');
//  	}else if (elem.matches('[class$="lesson__item-list_blue"]')) {
//  		console.log('Синий');
//  	}
//  }



// Получение и изменение содержимого элемента HTML

// Получение обьекта 

// const textElement = document.querySelector('.lesson__text');

//Получаем содержимое обьекта "как есть" вместе с HTML

// const textElementContent = textElement.innerHTML;
// console.log(textElementContent);

//Перезаписываем содержимое обьекта

// textElement.innerHTML = "Живи, а работй в свободное время";

// Дописываем содержимое обьекта

// textElement.innerHTML =
// 	`<div>${textElementContent}</div> <div> Живи , 
//     а работай хуй знает, когда получится</div>`;
// 
// console.log(textElement.innerHTML);


// Просто текст элемента textContent

/* с помощью textContent мы можеи получить только текст-*/

//const textElement = document.querySelector('.lesson__text');

// const textElementContent = textElement.textContent;
// console.log(textElementContent);

/*
Полезная возможность textContent - записывать 
текст "безопасным способом"
*/

// textElement.textContent = 'Живи, а работай там когда нибудь';

/*
Мы не хотим , чтобы на сайте появился произвольный HTML-код.
Присваивание через textContent - одни из способов от этого защититься
*/

// data
// содержимое текстового узла/комментария

// Получаем обьект

// const textElement = document.querySelector('.lesson__text');

// const getComment = textElement.nextSibling; // получаем следующий элемент

// console.log(getComment);
// console.log(getComment.data); // получаем комментарий

// Изменение текстового узла/комментария

// getComment.data = "Привет";
// console.log(getComment.data);

//========================================================================================================================================================

// Создание элементов и узлов ================

//Создание нового элемента(тега)

// const newElement = document.createElement('div');
// console.log(newElement);

// newElement.innerHTML = "Да все ка то не как!";

// Создание нового текстового узла

// const newText = document.createTextNode('Привет!!!');
// console.log(newText);

/*Созданные обьекты находятся в константах,
но не являются частью документа
*/

//========================================================================================================================================================

// Методы вставки 

// Получаем обьект

// const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)

// const newElement = document.createElement('div');

// Наполнение новый элемент 

// newElement.innerHTML = "Живи, а работай в свободное время";

// Вставляем новый элемент...

// ...перед обьектом
// textElement.before(newElement);
// ...после обьектом
// textElement.after(newElement);
// ...внутри и в начале обьекта
// textElement.prepend(newElement);
// ...внутри и в конце обьекта
// textElement.append(newElement);

// вставка нескольких фрагментов сразу
// textElement.append(newElement, 'Привет!!!');

//Можно вставлять строку

//textElement.append(`Живи, а работай в свободное время`);

/*
Другими словами строки вставляются безопасным способом,
как делает textContent.поэтому эти методы могут 
использоваться только для вставки DOM-узлов или текстовых фрагментов.
А что, если мы хотим вставить HTML именно как HTML, 
со всеми тегами и прочими, как это делает innerHTML?
*/

/*
Дополнительно существуют 

insertAdjacentText и insertAdjacentElement
*/

// Получаем обьект

//const textElement = document.querySelector('.lesson__text');

// Вставяляем текст

// textElement.inserAdjacentText(
// 	'beforeend',
// 	'Живи, а работакй свободное время'
// );

// создание нового элемента (тега)

//const newElement = document.createElement('div');

// Наполняем новый элемент

//newElement.innerHTML = 'Живи, а работай свободное время';

//вставляем элемент

// textElement.insertAdjacentElement(
// 	'beforeend',
// 	newElement
// );

/**
На практике часто используется только insertAdjacentHTML.
Поэтому что для элемнтов и текста у нас есть методы 
append/prepend/before/after - их быстро написать и они 
могут вставлять как узлы, так и текст.
*/

/* 
beforebegin - вставить html-код перед элементом,
afterbegin - вставляет внутрь и в начало элемента,
beforeend - вставить html-код внутрь и в конец элемента,
afterend - вставляет код после элемента;

*/

//========================================================================================================================================================

// Перенос элементов

/*
Мы можем вставлять не только новые узлы, 
но и переносить существующие. 
все методы вставки автоматически удаляеют узлы со старых мест
*/

// Получаем обьект

//  const lessonBlock = document.querySelector('.lesson');

// Получаем обьект

//const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock

//lesson.append(title);

//========================================================================================================================================================


// Клонирование узлов cloneNode

/*
Если нужен не перенос, а именно копия элементов
*/

// Получаем  обьект

// const textElement = document.querySelector('.lesson__text');

// Клонирование без дочерних элементов

//  const cloneTextElement = textElement.cloneNode();

// Глубокое клонировнаие вместе с содержимым

//  const cloneTextElement = textElement.cloneNode(true);

//  const lessonBlock = document.querySelector('.lesson');
// lessonBlock.append(cloneTextElement);

//========================================================================================================================================================

// Удаление узлов 

// Получаем  обьект

// const textElement = document.querySelector('.lesson__text');

// Удаляем обьект

// textElement.remove();

//========================================================================================================================================================


// Стилт и классы ===========================================

// Управление классами 
// Свойства className && classList

/*
Измененине класса явялется одним
из наиболее часто используемых действий в JS.
*/




// свойствой className  //

//const element = document.querySelector('.lesson__item-list_red');

// Получаем именна классов

//  const elementClassName = element.className;
//  console.log(elementClassName);

// Перезаписываем имя класса

// element.className = 'red'; 

/* 
с помощью этого метода перезаписываем классы
*/




// Свойство classList //

/* 
Специальный обьект с методами для добавления/удаления
одного класса
*/

// Получаем элемент

//const element = document.querySelector('.lesson__item-list_red');


// element.classList.add('active');

//Удалить класс
// element.classList.remove('active');

// Добавить класс, если его нет , а если есть удалить 
// element.classList.toggle('active');

// Проверка наличия класса, возвращение true/false
// element.classList.contains('active');



// Примеры 

// Получаем элемент

//const element = document.querySelector('.lesson__item-list_red');

// добавить класс

//element.classList.add('active');

// Проверяем наличие класса

// if (element.classList.contains('active')) {
// 	console.log('У элемента есть класс active!!!');
// };


/*
ClassList является перебираемым, поэтому можно 
перечислить все класс про помощи for..of
*/

// Получаем элемент

//const element = document.querySelector('.lesson__item-list_red');

// Добаляем класс

//element.classList.add('active');

// for(let className of element.classList) {
// 	console.log(className);
// };




// УПРАВЛЕНИЕ СТИЛЯМИ

// Получаем элемент

//const element = document.querySelector('.lesson__item-list_red');

// Задаем стиль с помощью CSS свойства

//element.style.color = 'red';

// 













































































































//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
// <div data-say-hi="yes">Привет!</div>

//const daSay = document.querySelectorAll('[data-say-hi]');

// Задача №2.
// Получить в переменную элемент с текстом Йончи

//  <ul>
//  	<li>Корчи</li>
//  	<li>Йончи</li>
//  </ul>

// const list = document.getElementsByClassName('lesson__sub-list');







// Задача №3.
// Получить в переменную коллекцию элементов с классом like
//  <div class="like"></div>
//  <div class="subscribe"></div>
//  <div class="like subscribe"></div>

// const like = document.quarySelectorAll('.like');
// const like = document.getElementsByClassName('like');


// Задача №4.
// Куда добавится <li>Текст</li> ?

// JS
//const list = document.querySelectorAll('ul');
//list.insertAdjacentHTML(
//	'beforeend',
//	'<li>Текст</li>'
//);

// HTML
//  <ul>
//  	<li>Пункт №1</li>
//  	<li>Пункт №2</li>
//  </ul>


