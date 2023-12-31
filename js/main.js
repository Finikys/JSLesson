console.log("День 1 ---------------------------------")
//День 1 --------------------------------------------
//JS Вывод текста:
console.warn('Вывод текста --------------------------------------------');
document.write("JS no comments"); // Старый способ вывода на страницу(Текст)

console.log("JavaScript console 1"); // Вывод текста в консоль 1 (Текст)
console.info("JavaScript console 2"); // Вывод текста в консоль 2 (Текст)
console.error("JavaScript console 3"); // Вывод текста в консоль 3 (Ошибка)
console.warn("JavaScript console 4"); // Вывод текста в консоль 4 (Предупреждение)

//JS Переменные:
console.warn('JS Переменные --------------------------------------------');
var num_1 = 5.1413413514; // Переменная
num_1 = 7; // Присваивание значения
const num_2 = 12.626256; // Константа не изменяется 
var sting = "Hello JS"; // Тип данных можно не указывать
var bool = true; // Любой тип данных при var
bool = "bimbimbombom"; // что угодно

console.log("Переменные: " + num_1 + ", " + num_2 + ", " + sting + ", " + bool); // Вывод переменных

//JS Математические действия
console.warn('JS Математические действия --------------------------------------------');
var num_3 = 5.413;
var num_4 = 15;

var res = num_3 - num_4; // Вычетание через переменную
console.log("Вычетание: " + res + ", " + (num_3 - num_4)); // Вычетание
var res = num_3 + num_4; // Сложение через переменную
console.log("Сложение: " + res + ", " + (num_3 + num_4)); // Сложение
var res = num_3 / num_4; // Деление через переменную
console.log("Деление: " + res + ", " + (num_3 / num_4)); // Деление
var res = num_3 * num_4; // Умножение через переменную
console.log("Умножение: " + res + ", " + (num_3 * num_4)); // Умножение
var res = num_3 % num_4; // Остаток от деления через переменную
console.log("Остаток от деления: " + res + ", " + (num_3 % num_4)); // Остаток от деления

var num_5 = 5;
num_5 += 7; // Сокращенные действия -= /= *= %=
num_5++; // Плюс один
num_5--; // Минус один
console.log("Сокращенное: " + num_5 + ", " + (num_5 + 7)); // Сокращенное действие

var str_1 = "12";
var str_2 = "5";
var str_3 = "fsdfasdf"
console.log("Сложение строк: " + (str_1 + str_2 + str_3)); // Сложение строк

var str_11 = Number("12");
var str_12 = Number("5");
console.log("Сложение строк и получение действия: " + (str_11 + str_12)); // Сложение строк и полученние действия

//JS Методы:
console.warn('JS Методы --------------------------------------------');

console.log("Math: " + Math.PI); // Число пи
console.log("Math: " + Math.E); // Число E
console.log("Math: " + Math.min(1234,2134,42135,2,423521,55,45314513,53534)); // Наименьшее значение
console.log("Math: " + Math.max(452345,6256,46246,62562,624562,4526)); // Наибольшее значение





// ДЕнь 2 ----------------------------------------------------------------------------------
// Условные констукции 
console.log("День 2 ---------------------------------")
console.warn('Условные кострукции --------------------------------------------');
var number = 15;
var number_2 = "142";
var isHasHouse = true;

if(number != 15) {
    console.log("Условия выполнены 1"); // если
} else { 
    console.error("Условия не выполнены: 'number != 15'"); // в любом другом случае
}

if(number_2 == "14") {
    console.log("Условия выполнены");
} else if(number > 10) {
    console.log("Условия выполнены: 'number > 10'"); // else if = elif
} else { 
    console.error("Условия не выполнены"); // в любом другом случае
}

// isHasHouse = (isHasHouse == true)
// !isHasHouse = (isHasHouse == false)

if(number == 5 || isHasHouse) {
    console.log("Одно из условий выполнено"); // выполнение одного из условий or = || 
}

if(number == 15 && isHasHouse) {
    console.log("Все условия выполнены"); // все условия выполнены and = &&
}



var stroke = "word";

switch(stroke) { // проверить переменную на множество значений 
    case "4":
        console.log("Переменная со значением 4");
        break;
    case "45":
        console.log("Переменная со значеничем 45")
        break;
    case "word":
        console.log("Переменная со значеничем word");
        break;
    default:
        console.error("error"); // В default не нужно ставить break 
}

// День 3 -----------------------------------------------------------------
// Массивы данных
console.warn('Массивы данных --------------------------------------------');
console.log("День 3 ---------------------------------")
var arr = [3,312, 3123 , false, 3213 , "fsdf"]; // Создание массива

console.log(arr);
console.log(arr[2]);
console.log(arr[0]);

arr[2] = "gdgdfgsdg";
console.log(arr[2]);
console.log("Длинна массива " + arr.length); // Длинна массива

var matrix = [[12312, 3241, 42314], ["2312", "fsdf", 21312],["sfaasf", "fasdf", 3123],[14324, 123]]; // Матрица состоит из множество массивов
matrix[1][2] = "23ваыва2";
console.log(matrix);

// Циклы и операторы в циклах
console.warn('Циклы и операторы в циклах --------------------------------------------');
for(var i = 1; i < 11; i++) { // цикл for() Переменна с целочисленным значением; до какого момента будет выполняться код; изменение переменной
    console.log("Цикл for(var i = 1; i < 11; i++) " + i);
}

for(var i = 100; i > 5; i/=2) { // цикл for() Переменна с целочисленным значением; до какого момента будет выполняться код; изменение переменной
    console.log("Цикл for(var i = 100; i > 5; i/=2) " + i);
}

var j = 0;
while(j < 10) { // цикл while()
    console.log("Цикл while(j < 10) " + j);
    j++;
}

var j = 1000;
while(j > 100) {
    console.log("Цикл while(j > 100) " + j);
    j-=100;
}

var x = 100;
do { // В любом случае цикл сработает 1 раз, даже если услови ложно с начала
    console.log("Цикл do while(x < 50) " + x)
} while(x < 50);

// Операторы в циклах
console.warn('Операторы в циклах --------------------------------------------');
for(var l = 10; l <= 20; l+=2) {
    if(l > 15) { break } // останавливаем любой цикл
    console.log("Цикл for(l+=2) " + l)
}

for(var l = 10; l <= 20; l++) {
    if(l % 2 == 0) { continue } // Пропуск итерации с этого момента (Перебрасывает к началу цикла)
    console.log("Цикл for(l++) " + l)
}

// Взаимодействие с масивами
console.warn('Взаимодействие с масивами --------------------------------------------');
var arrr = [213,415,4563426,215,'gfdgdsfg',41414,true];
for(var i = 0; i < arrr.length; i++) { // Перебрать массив
    console.log("Работа с массивами, "+ "элемент " + (i + 1) + ": " + arrr[i]);
}

var arrr = [213,415,4563426,215,151254,41414,123123];
for(var i = 0; i < arrr.length; i++) { // Работа с элементом
    console.log("Работа с массивами: " + (arrr[i] * 2));
}


