// Task 1
//
//     Задание:
//     Напишите сценарий, который найдет минимальное, максимальное значения массива,
//     а также выведет сумму всех элементов массива.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let min = Number.MAX_VALUE;
let sum = 0;


for (const numb of values) {
    if (numb < min) {
        min = numb;
    }
    sum += numb;
}

console.log("Min значение массива - " + min);
console.log("Сумма массива - " + sum);
