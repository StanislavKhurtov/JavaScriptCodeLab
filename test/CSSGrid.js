/*

1. Общее пространство, которое всегда ограничено четырьмя grid-линиями - это...

Grid-область

Grid-полоса

Grid-ячейка]

Grid-линия

Grid-элемент

Grid-контейнер

2. Как правильно указать grid-gap?

grid-gap: <size>]

template-gap: <size>

gap: <size>]

grid-template-gap: <size>

3. Выберите верные утверждения, относительно fr:

сокращенно, от слова fraction]

fr - это единица измерения

отвечает за свободное пространство внутри грид-контейнера]

Код grid-template-columns: repeat(3, 1fr); создаст одну колонку, которая будет занимать 3 ширины родителя

grid-template-columns: repeat(3, 1fr); и grid-template-columns: 1fr 1fr 1fr; - Аналогичные записи]

4. Как сократить запись grid-template-columns: 150px 150px 150px; ?

grid-template-columns: repeat(3, 150px);]

grid-template-columns: rep(150px, 3);

grid-columns: 150px * 3;

grid-template-columns: 1fr 1fr 1fr, 150px;

5. Что такое свойство grid-area?

принимает в качестве значения любое количество грид-линий, определяющих расположение грид-области.

принимает в качестве значения номера 2х грид-линий, определяющих расположение грид-области.

принимает в качестве значения номера до 4х грид-линий, определяющих расположение грид-области.]

6. Как можно сократить данную запись grid-column-gap: 20px; grid-row-gap: 20px;?

grid-column-row: 20px;

column-row: 20px;

grid-gap: 20px;]

7. Как правильно указать grid rows?

rows: <size>

grid-rows: <size>

template-rows: <size>

grid-template-rows: <size>]

8. Свойство grid - шорткат для свойств:

grid-template-rows]

grid-template-columns]

grid-template-areas]

grid-template-flows

grid-auto-columns]

grid-auto-flow]

grid-auto-rows]

9. Является ли запись верной? grid-template-columns: 2rem 20% 150px 1fr.

да]

нет

10. Пространство между двумя соседними grid-линиями (ряд или колонка) - это...

Grid-контейнер

Grid-линия

Grid-элемент

Grid-область

Grid-ячейка

Grid-полоса]

11. Можно ли использовать технологию Flex и Grid в одном проекте?

да]

нет

12. Свойство, с помощью которого можно выровнять элементы по вертикальной оси внутри грид-контейнера:

justify-items

justify-content

align-items]

place-items

13. Какое утверждение справедливо относительно записи grid-template-columns: minmax(200px, 1fr); ?

колонка займёт 1 часть свободного пространства grid-контейнера, и будет меньше 200 пикселей

колонка займёт 200px от свободного пространства grid-контейнера, grid-контейнер станет размером 1fr от родителя

колонка займёт 1 часть свободного пространства grid-контейнера, но не меньше 200 пикселей]

колонка займёт 200px от свободного пространства grid-контейнера, grid-контейнер станет размером 200 пикселей

14. Какая запись будет валидной для того, чтобы определить колонки в grid?

grid-column-gap

columns

grid-template-columns]

15. Grid-контейнер снаружи по умолчанию ведет себя как...

блочный элемент]

строчный элемент

элемент со свойством inline-block

16. Какое утверждение неверно, в отношении place-self?

стандартное значение - center]

значение auto можно использовать для сброса ранее заданных значений

если указано одно значение, то оно устанавливается для обоих свойств

свойство-шорткат для свойств justify-self и align-self

17. Какая запись свойства неверна?

grid-column: 3 / span 2;

grid-row-end: span 2;

display: grid;

grid-area: auto;

все свойства написаны верно]

18. Родительский элемент, к которому применяется свойство display: grid - это...

Grid-линия

Grid-контейнер]

Grid-ячейка

Grid-область

Grid-полоса

Grid-элемент

19. Сколько аргументов принимает функция minmax?

1

2]

3

не принимает аргументов

20. Какая запись верна, если нужно создать 3 колонки шириной 100px, 200px, 100px. Высота каждого ряда должна быть 100px.

grid-template-rows: 100px 200px 100px; grid-template-rows: 100px;

grid-template-columns: 100px 200px 100px; grid-auto-rows: 100px;]

grid-template-columns: 1fr 3fr 1fr; grid-auto-rows: 1fr;

grid-template-columns: 1fr 3fr 1fr, 100px; grid-template-rows: 1fr, 200px;

*/
