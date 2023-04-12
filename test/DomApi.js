/*

1. Чем является childNodes в elem.childNodes?

элементом

функцией

объектом

массивом

коллекцией]

2. Класс Element служит базой для следующих классов:

SVGElement]

HTMLInputElement

XMLElement]

HTMLElement]

HTMLAnchorElement

HTMLBodyElement

3. Что на такой странице в браузере будет являться дочерними узлами элемента <html>?


<html>

<body>]

<div>

<ul>

<li>

<b>

<head>]

<script>

4. Какие методы из перечисленных существуют для Element.classList?

add]

remove]

toggle]

replaceWith

contains]

5. У каких элементов из перечисленных есть свойство rows?

table]

tr

th

tfoot]

td

tbody]

thead]

6. Будет ли являться верным выражение document.body.parentNode === document.documentElement?

да]

нет

7. Всегда ли одинаковы свойства parentElement и parentNode?

всегда, так как возвращают одинаковое значение

никогда, так как возвращают разное значение

чаще всего, но не всегда, зависит от того, у какого элемента взято свойство]

8. Базовый класс для DOM-элементов. Он обеспечивает навигацию на уровне элементов: nextElementSibling, children и методы поиска: getElementsByTagName, querySelector. О каком классе идет речь?

Node

EventTarget

Element]

HTMLElement

ни один из перечисленных

9. Для того чтобы добавить узел в конец элемента node, необходимо использовать метод...

append]

prepend

before

after

replaceWith

10. Что на этой странице в браузере является потомками тега <body>?


<html>

<body>

<div>]

<ul>]

<li>]

<b>]

<head>

<script>

11. Должен ли быть тег <tbody> у таблицы согласно стандарту?

Да, должен быть, без него таблица будет выглядеть некорректно

Да, должен быть, но можно делать таблицу и без него (официально, согласно стандарту)]

Нет, согласно стандарту данный тег не должен быть внутри таблицы

12. Какие из перечисленных вариантов вернут только один элемент(при условии что элемент находится на странице)?

document.getElementById(id)]

document.getElementsByName(name)

document.querySelector('div')]

document.querySelectorAll('div')[0]]

document.querySelectorAll('div')

elem.matches('elem')

elem.getElementsByTagName('div')

! НЕ ВЕРНО 13. Что из перечисленного является узлом?

комментарии]

текстовые узлы]

HTML-теги]

JavaScript-узлы]

document]

14. Всегда ли верно ли данное условие: elem.childNodes[elem.childNodes.length] === elem.lastChild?

всегда

никогда]

верно лишь в случае если у elem есть дочерние узлы

15. Какой метод возвращает значение указанного атрибута элемента?

hasAttribute()

getAttribute()]

setAttribute()

attributes()

16. Сколько, согласно документации, существует типов узлов?

3

4

7

10

12]

17. Являются ли комментарии в HTML узлами?

Да, являюся текстовыми узлами

Нет, узлами не являются

Да, являются отдельными элементами/тегами

Да, являются узлами типа "комментарий"]

18. Какие из перечисленных вариантов вернут коллекцию элементов?

document.getElementById(id)

elem.getElementById(id)

document.querySelector('div')

document.querySelectorAll('div')[0]

document.querySelectorAll('div')]

elem.matches('elem')

document.getElementsByName(name)]

19. В соответствии с объектной моделью документа (DOM), чем является каждый HTML-тег?

объектом]

переменной

текстом

ссылкой
20. Тег <input> принадлежит классу HTMLInputElement. Он наследует свойства и методы из:

HTMLInputElement]

HTMLElement]

Element]

Window

EventTarget]

Node

Document

Object]

21. Корневой «абстрактный» класс. Объекты этого класса никогда не создаются. Он служит основой для «событий». О каком классе идет речь?

Node

EventTarget]

Element

HTMLElement

ни один из перечисленных

22. Какие узлы будут являться соседями на странице в браузере в данном случае?


<head> и <body>]

<html> и <body>

<div> и <body>

<div> и <ul>]

<li> и <li>]

<li> и <b>

<b> и <b>

23. Могут ли DOM-свойства быть типизированными и принимать значения не только строки?

могут, а также могут принимать значения логического типа

могут, а также могут принимать значения строк или объектов

не могут

могут, а также могут принимать значения логического типа, строк или объектов]

! НЕ ВЕРНО 24. Что из перечисленного правильно характеризует метод document.write?

работает только во время загрузки страницы

Если вызвать его после того когда страница загрузится, то существующее содержимое документа останется прежним, ничего не произойдет

Если вызвать его после того когда страница загрузится, то существующее содержимое документа затрётся]

25. Что будет являться document.head.nextSibling на странице?

html

[object Object]

Будет ошибка

head

body]

*/