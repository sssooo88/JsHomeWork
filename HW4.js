//Задание: 1
//Исправьте ошибки, добавив недостающие операторы

let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
let product2 = "Биндеры для бумаги 51 мм";
let product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25;
let productPrice2 = 56;
let productPrice3 = 12.50;

let productQuantity1 = Number(prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`,
    '0'));// опятьже +prompt тоже верно как и убрать приведение к намберу так как примедется ниже автоматом
let productQuantity2 = Number(prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`,
    '0'));
let productQuantity3 = Number(prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`,
    '0'));

let totalPrice = 0;

totalPrice = totalPrice + productPrice1 * productQuantity1;
totalPrice = totalPrice + productPrice2 * productQuantity2;
totalPrice = totalPrice + productPrice3 * productQuantity3;

alert(`Общая сумма ${totalPrice}`) // опятже если станица то так, если через nodejs prompt убрать выше и все приведения
//console.log(`Общая сумма ${totalPrice}`);


//Задание: 2
//Добавьте операторы сокращенной арифметики, где это возможно

let product12 = "Бумага офисная А4, 80 г/м2, 500 л";
let product22 = "Биндеры для бумаги 51 мм";
let product32 = "Ручка шариковая синяя";

let productPrice12 = 280.25;
let productPrice22 = 56;
let productPrice32 = 12.50;

let productQuantity12 = +prompt(`Укажите количество продуктов '${product12}', цена ${productPrice12}`, 0);
let productQuantity22 = +prompt(`Укажите количество продуктов '${product22}', цена ${productPrice22}`, 0);
let productQuantity32 = +prompt(`Укажите количество продуктов '${product32}', цена ${productPrice32}`, 0);

let totalPrice2 = 0;

totalPrice2 += productPrice12 * productQuantity12;
totalPrice2 += totalPrice2 + productPrice22 * productQuantity22;
totalPrice2 += totalPrice2 + productPrice32 * productQuantity32;

console.log(`Общая сумма ${totalPrice2}`);
//опятьже остальные вариации в 1 задании


// Задание 3
//Поменяйте бинарные операторы на унарные, где это возможно

let ordersCount3 = 0;
let product13 = "Бумага офисная А4, 80 г/м2, 500 л";
let product23 = "Биндеры для бумаги 51 мм";
let product33 = "Ручка шариковая синяя";

let productPrice13 = 280.25;
let productPrice23 = 56;
let productPrice33 = 12.50;

let productQuantity13 = +prompt(`Укажите количество продуктов '${product13}', цена ${productPrice13}`, 0);
let productQuantity23 = +prompt(`Укажите количество продуктов '${product23}', цена ${productPrice23}`, 0);
let productQuantity33 = +prompt(`Укажите количество продуктов '${product33}', цена ${productPrice33}`, 0);

let totalPrice3 = 0;

totalPrice3 = totalPrice3 + productPrice13 * productQuantity13;
totalPrice3 = totalPrice3 + productPrice23 * productQuantity23;
totalPrice3= totalPrice3 + productPrice33 * productQuantity33;
ordersCount3++ // или ++ordersCount3

console.log(`Общая сумма ${totalPrice3}`);
//опятьже остальные вариации в 1 задании


//Задание 4
//Поменяйте код согласно комментариям

let a = 10;
let b = 20;

// укажите операторы так, чтобы на консоль вывелись сообщения,
// такие же, как и в комментариях на строках 9, 10, 11
console.log(a < b);  // true
console.log(a > b);  // false
console.log(a !== b); // true


//Задание: 5
//Найдите и исправьте логические ошибки в сценарии.

let product15 = "Бумага офисная А4, 80 г/м2, 500 л";
let product25 = "Биндеры для бумаги 51 мм";
let product35 = "Ручка шариковая синяя";

let productPrice15 = 280.25;
let productPrice25 = 56;
let productPrice35 = 12.50;

let productQuantity15 = prompt(`Укажите количество продуктов '${product15}', цена ${productPrice15}`,
    '0');
let productQuantity25 = prompt(`Укажите количество продуктов '${product25}', цена ${productPrice25}`,
    '0');
let productQuantity35 = prompt(`Укажите количество продуктов '${product35}', цена ${productPrice35}`,
    '0');

// Выведите на экран сколько пользователю нужно заплатить за каждый продукт по
// отдельности и всего за все продукты
// используйте форматированный вывод
let totalPriceProduct15 = productPrice15 * Number(productQuantity15); // можно не преобразовывать
// (* не явное преобразование) я просто хз де хотят 'используйте форматированный вывод'
let totalPriceProduct25 = productPrice25 * Number(productQuantity25);
let totalPriceProduct35 = productPrice35 * Number(productQuantity35);

let total5 = totalPriceProduct15 + totalPriceProduct25 + totalPriceProduct35;
console.log(`Общая сумма по продукту '${product15}' составляет ${Number(totalPriceProduct15)}`);
console.log(`Общая сумма по продукту '${product25}' составляет ${Number(totalPriceProduct25)}`);
console.log(`Общая сумма по продукту '${product35}' составляет ${Number(totalPriceProduct35)}`);
console.log("Всего " + total5);
//опятьже остальные вариации в 1 задании