# Traffic Light
Эмулятор светофора

## Описание
Приложение представляет из себя модель светофора, в нем 3 экрана:
Экран 1: горит красный (зеленый и желтый тусклые/полупрозрачные)
Экран 2: горит желтый (зеленый и красный тусклые/полупрозрачные)
Экран 3: горит зеленый (красный и желтый тусклые/полупрозрачные)

Красный горит 10 секунд, желтый - 3, зеленый - 15. Сигналы сменяются циклически красный -> желтый -> зеленый -> желтый -> красный -> ...

Светофор запускается сразу же при запуске приложения. За три секунды до переключения сигнала этот сигнал начинает мигать.

Состояние светофора сохраняется после перезагрузки страницы (только для ветки master). Сохранение построено на использовании localStorage (т. к. в приложении не используется Vuex, в противном случае можно было бы использовать vuex-persistedstate)

(Только для ветки no-save-state)
Роутинг приложения построен таким образом, что можно открыть любой из экранов посредством адресной строки. Например '/green' - светофор начнет работу с зеленого цвета.

Написан на VueJS
## Установка
1. >git clone https://github.com/R1chardFeynman/Traffic-Light

2. >npm install

3. >npm run start
