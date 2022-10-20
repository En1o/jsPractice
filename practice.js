/* Дана сторона квадрата a. Найти его периметр. */

let sideSquare = 2;
let perimeter = sideSquare * 4;
console.log("Периметр квадрата раваен: " + sideSquare); 

/* Дано целое число А. Проверить истинность высказывания: "Число А является положительным." */

let num = 33;
if (num > 0){
    console.log("Число А положительное!");
} else {
    console.log("Число А не является положительным.");
}

/* Даны два числа А и В. Проверить истинность высказывания: "A > 2 и B <= 3" */

let numA = 7, numB = 3;
if (numA > 2 && numB <= 3){
    console.log(true);
} else {
    console.log(false)
}