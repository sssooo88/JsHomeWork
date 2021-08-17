// Task 6

// Задание:
// Дано массив. Поменяйте элемент с максимальным значением местами с элементом с минимальным значением.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;
let min_value;
let max_value;
let max_index;
let min_index;

for (let index = 0; index < values.length; index++) {
    if (max < values[index]) {
        max = values[index];
        max_value = values[index];
        max_index = index;
    } else if (min > values[index]) {
        min = values[index];
        min_value = values[index];
        min_index = index
    }
}

values[min_index] = max_value
values[max_index] = min_value

console.log(values);

