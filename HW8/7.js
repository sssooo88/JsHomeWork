// Task 7

// Задание:
// Дано массив. Найдите среднее арифметическое для значений этого массива.
// Выведите на экран только те элементы, которые больше этого среднего арифметического значения

let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];
let sum = 0;
let average;

for (const element of values) {
    sum += element
}

average = sum / values.length

for (const element of values) {
    if (element > average){
        console.log(element);
    }
}