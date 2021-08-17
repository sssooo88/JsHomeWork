// Task 8

// Задание:
// Дан массив целых чисел. Проверьте есть ли в нем одинаковые элементы. Если есть выведите их на экран.

let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];
let newValues = values.slice()

for (let index1 = 0; index1 < values.length; index1++) {
    for (let index2 = 0; index2 < values.length; index2++) {
        newValues[index1] = NaN
        if (values[index1] == newValues[index2]){
            console.log(values[index1])
        }
    }
}