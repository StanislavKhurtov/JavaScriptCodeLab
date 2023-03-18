/*
!1. Каким будет результат выполнения операции '4' * '9'?

строка 49

строка 36

число 36]

SyntaxError

!2. Выберите записи с унарными операторами, одним или несколькими:

-4]

23 + 79

+79]

+'4' + +'5']

!3. Какое значение возвращает функция, в теле которой отсутствует инструкция return?

null

undefined]

NaN

происходит ошибка

!4. Эти логические выражения вернут true:

0 === 1

1 === '1'

1 == '1']

4 === 1 + 3]

'A' > 'a'

'B' < 'b']

'13' > 12]

'13px' > 12

'13px' < '14']

!5. Чему равен результат записи '1' + 2 ?

строка 12]

число 12

строка 3

число 3

!6. Какое значение будет содержать свойство length при вызове [1,2,3,4,5].length?

0

4

5]

undefined

!7. Какой командой можно прервать проверку других случаев (case) для оператора switch?

continue;

pause;

stop;

break;]

!8. Где правильно записано начало цикла for?

for (let i = 0; i <= 5)

for (let i = 0; i <= 5; i++)]

for let i = 1 to 5

for (let i <= 5; i++)

!9. Определите тип данных переменной rs, если rs задана так: let rs = 'true';

string]

number

boolean

object

!10. Какие значения, как результат, нельзя получить при проверке типа данных с помощью typeof?

null]

number

string

NaN]

bigint

Infinity]

!11. Как в JavaScript можно вызвать функцию myFun?

function myFun()

myFun()]

myFun

function()

!12. Одна из самых распространенных ошибок с текстом 'undefined is not a function' (несоответствие типов) имеет название вида:

Uncaught ReferenceError

Uncaught TypeError]

Uncaught SyntaxError

Uncaught URIError

!13. Чему будет равен результат вычисления композиции операций (8 / 2 + 5 - -3 / 2)?

5

7.5

10.5]

13

!14. Какой результат вызова функции Math.pow(2,4)?

2

4

8

16]

32

!15. Задача о числах с плавающей запятой. Сколько цифр после запятой будет в результате вычисления выражения (0.32 * 0.22 * 0.75) в браузере Google Chrome?

3

4]

5

6

!16. Каким типом данных является Infinity (бесконечность)?

undefined

boolean

string

number]

!17. Среди перечисленных, выберете правильные способы именования функций-предикатов:

empty()] !!!!???????

errors()

hasErrors()]

areEmpty()

isShown()]

canShow()]

!18. Каков результат выполнения кода 13%5?

~0.38

2.6

2

3]

!19. Какие из перечисленных значений являются строками?

'Hey']

'']

'undefined']

"Hello"]

' ']

" "]

"null"]

!20. Какие из перечисленных типов данных являются примитивами?

function

string]

number]

boolean]

object

bigint]

!21. Как написать функцию max(a,b), выбирающую максимальное из двух значений?:

const max = (a, b) => (a == b ? a : b)

const max = (a, b) => (a > b ? a : b)]

const max = (a, b) => (a + b > a - b ? a : b)

const max = (a, b) => (a + b < a - b ? a : b)

!22. Выполнится ли вход в такой цикл: let i = 10; while (i < 10) {...}?

нет]

да, но лишь единожды, независимо от условий внутри цикла

да, и количество итераций зависит от условий внутри цикла

будет ошибка

!23. Каким будет результат выполнения кода '\nHey!'[1]?

\n

n

H]

e

Uncaught SyntaxError: Invalid or unexpected token


!24. NaN имеет числовой тип. Каким будет результат выражения (NaN + 101)?

NaN]

0

101

102

!25. Какие символы есть в тернарном операторе 'если-то-иначе'?

:]

+

/

?

!26. Заданы переменные const a = ''; const b = 9; const c = null;. Какие выражения вернут true?

!!(!a || !b && !c)]

!!(a || !b && !c)

!!(a || !b || c)

!(!a && b && !c)

!(a || !b && !c)]

!27. Какой из перечисленных методов строки возвращает новую строку, где все буквенные символы преобразованы в верхний регистр?

toUpperCase()]

toLowerCase()

toString()

caps()

!28. Каким будет результат выполнения кода console.log('Hey there!' ?

Hey there!

SyntaxError: missing ) after argument list]

SyntaxError: missing ; after statement

Ничего не выведется

!29. Как создать строку с корректным приветствием по имени, которое содержится в переменной name?

const greeting = 'Hello ${name}'

const greeting = 'Hello ', name

const greeting = 'Hello name'

const greeting = 'Hello ' + name]

const greeting = `Hello ${name}`]

!30. Есть код console.log('после' + 'до'). Если в конец первой строки добавить 4 пробела, а во второй строке добавить 4 пробела в начало, то сколько пробелов суммарно будет между 'после' и 'до' при выводе результата в консоль?

0

1

2

4

8]

!31. Каким символом в JavaScript отделяются инструкции, следующие одна за другой?

;]

,

.

:

!32. Какими из перечисленных способов можно задать функцию сложения двух чисел в JavaScript?

const sum = {a, b} => ( return a + b )

const sum = (a, b) => { return a + b }]

const sum = {a, b} => a + b

const sum = (a, b) => a + b]

const sum = a, b => a + b

!33. Каким будет результат выполнения операции 4 * 'five'?

строка 4five

число 20

NaN]

SyntaxError

!34. Каким будет результат в консоли выполнения кода let a; console.log(a)?

undefined]

null

NaN

Uncaught ReferenceError: a is not defined

!35. Каким образом можно проверить, кратно ли число a числу b?

a / b === 0

a % b > 0

b % a === 0

a % b === 0]

!36. Какой символ под номером 59 в списке ASCII? (Можно проверить методом строки fromCharCode)

?

!

%

;]

.

!37. Чем отличается const от let?

const - не является частью JavaScript

переменные, объявленные через const, находятся в глобальной области видимости

объявление const задаёт константу, то есть значение, которое нельзя менять]

!38. Выберите те определения переменных, которые приведут к ошибке:

let first = 1; let second = 2;

let first = 1; first = 2;

let first = 1; let first = 2;]

const first = 1; first = 2;]

const first = 1, second = 2;

!39. Что будет в результате выполнения кода: let a += 10;

Ошибка Uncaught SyntaxError: Unexpected token '+=']

a присвоится значение 0

a присвоится значение 10

a присвоится значение 20

!!40. Как вывести сообщение Hello world! в консоль?

alert('Hello world!');

prompt('Hello world!');

print('Hello world!');

console.log('Hello world!');]


!41.Выберите верную запись стрелочной функции show:

function show() {}

const show = function() {}

const show = () => {}

const show = () {}

!42.  Выберите корректно записанные условные конструкции:

if {}

if (condition) {}]

if (condition) {} else {}]

if (condition) {} else (condition) {}

if (condition) {} else if (condition) {}]

!43.Каким образом JavaScript позволяет узнать тип данных переменной a?

type a

a.type

type(a)

typeof a]

!44. Если a = true, b = true, то эти выражения вернут true:

a && b]

!a && b

a && !b

!a && !b

!(a && b)

!(!a && !b)]

!45.Имя конструктора MyCarFactory задано с помощью подхода в именовании под названием:

kebab case

camel case]

lower camel case

snake case

!46 . Укажите верные утверждения:

В выражении 34 + 42 операторами являются 34 и 42

В выражении 34 + 42 операндами являются 34 и 42]

В выражении 34 + 42 оператором является +]

В выражении 34 + 42 операндом является +


!47 Оператор возведения в степень в JavaScript:

++

/

**]

%

!48  Какое значение свойства length будет у строки после выполнения кода let name = 'Vasia'; name.length = 50;

50

5]

undefined

При попытке выполнения кода произойдет ошибка

!49   С какой целью используется символ \n?

умножение

деление

перевод строки]

спецсимвол одиночной кавычки

спецсимвол двойной кавычки

!50 Выберите такое выражение, которое в результате вычисления даст 14:

7 * 3 + (4 / 2) - (8 + (2 - 1)) ]

7 * 3 + (4 / 2) - 8 + 2 - 1

7 * (3 + 4) / 2 - (8 + 2 - 1)

7 * 3 + (4 / 2) - ((8 + 1) - 2)

!51. Каков будет результат вызова const name = 'Vasia'; Math.abs(name.length - 15);?

NaN

-15

-10

10]

15

!52 Какие символы есть в тернарном операторе 'если-то-иначе'?

:]

+

/

?]

!53Как создать строку с текстом It's cool?

'It's cool'

'It\'s cool']

'It/'s cool'

"It's cool"]

!54 Каким образом в функцию getGreetingMessage передается второй аргумент со значением 'Hello' по умолчанию?

const getGreetingMessage = (name, 'Hello') => { //... }

const getGreetingMessage = (name, message)(undefined, 'Hello') => { //... }

const getGreetingMessage = (name, message = 'Hello') => { //... } ]

const getGreetingMessage = (name) => { const message = 'Hello'; //... }

!55 Какими способами можно задать комментарии в JavaScript?

<!-- комментарий -->

# комментарий

// комментарий  ]

/* комментарий */ ]

/*
!56Как получить последний символ в строке, содержащейся в переменной message?

message.getLastSymbol()

message[message.lastIndex]

message[message.length]

message[message.length - 1]  ]

!57 Каким будет результат в консоли после выполнения кода let name = 'Vasia'; name[3] = 'y'; console.log(name);?

Vasa

Vayia

Vasya

Vasia]


*/