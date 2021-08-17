// Task 5
//
//         Задание:
//         Найдите первый положительный элемент массива и выведите его на экран.

let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];

for (const numb of values) {
    if (numb > 0) {
        console.log(numb);
        break;
    }
    
}