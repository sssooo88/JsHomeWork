// Task 4
//
//     Задание:
//     Дано массив. Создайте на основе значений этого массива два новых массива.
//     В один массив поместите все четные значения, а во второй все нечетные.
//     Выведите на экран значения, которые вошли в первый массив и во второй массив.

let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
let valchet = []
let valnechet = []
let index1 = -1
let index2 = -1


for (let index = 0; index < values.length; index++) {
    if ((values[index] % 2) == 0) {
        valchet[index1 += 1] = values[index];
    } else {
        valnechet[index2 += 1] = values[index]
    }
}

console.log(valchet);
console.log(valnechet);