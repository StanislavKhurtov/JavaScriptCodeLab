/*

1. Какие есть виды TouchEvent?

'touchenter'

'touchstart']

'touchmove']

'touchleave'

'touchend']

'touchcancel']

2. Что делает метод stopPropagation?

Создаёт новое событие

Прерывает всплытие/погружение элемента]

Отменяет поведение по умолчанию у элемента

3. Какое свойство существует у DragEvent?

drag

dataTransfer]

dragend

dragenter

4. Какие существуют способы назначения обработчика событий?

Атрибут HTML (inline)]

DOM-свойство]

DOM-узел

elem.addEventListener]

5. Все ли события всплывают?

Да

Нет]

6. Какими методами можно остановить всплытие?

elem.removeEventListener()

event.stopPropagation()]

elem.clearEventListener()

event.stopImmediatePropagation()]

event.eventPhase()

7. Какой способ назначения обработчика событий предпочтительнее?

Атрибут HTML (inline)

DOM-свойство

DOM-узел

Специальный метод elem.addEventListener]

8. Какие есть виды DragEvent?

'drag']

'dragend']

'dragenter']

'dragcenter'

'dragover']

'dragleave']

'dragstart']

'drop']

9. Можно ли отличить «настоящее» событие от сгенерированного кодом?

Да, (event.defaultEvent)

Нет

Да, (event.isTrusted)]

10. Интерфейс TouchEvent представляет собой UIEvent, который отправляется при изменении состояния контактов с сенсорной поверхностью.

верно]

неверно

11. Как убрать обработчик событий добавленный методом addEventListener, вызванный на EventTarget?

eventListener = null

clearEventListener

removeEventListener]

12. Что делает конструктор new Event?

Создает объект события]

Создает обработчик события

Создает элемент для события

13. Что является target для объекта event в обработчике события?

Это свойство объекта event которое указывает на элемент, вызывающий событие.]

Это свойство объекта event которое указывает на самый глубокий элемент, вызывающий событие.

14. Верно ли, что elem.target !== elem.currentTarget?

Да]

Нет

Не всегда, но возможно

15. Какие свойства существуют у Event?

target]

currentTarget]

bubble

eventPhase]

type]

16. Какие есть виды FocusEvent?

'blur']

'reblur'

'unfocus'

'focus']

17. Что делает метод preventDefault?

Создаёт новое событие

Прерывает всплытие/погружение элемента

Отменяет поведение по умолчанию у элемента]

18. Что можно назначить как обработчик события?

функция

объект

и функцию, и объект]

19. Сколько аргументов может принять метод addEventListener, вызванный на EventTarget?

0

1

2

3]


4

5

20. Какие свойства существуют у TouchEvent?

touch

touches]

touchcancel

targetTouches]

touchleave

changedTouches]


*/