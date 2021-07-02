// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const elemEl = document.querySelectorAll(".item");
console.log(`В списке ${elemEl.length} категории.`);

const elemntsEl = document.querySelectorAll("ul");

const categoriesArr = [];
elemntsEl.forEach(element => { categoriesArr.push(`Категория: ${document.querySelector("h2").textContent} / Количество элементов: ${element.children.length}`) });

console.log(categoriesArr);

//2-е решение
// const textEl = document.querySelectorAll('h2');

// console.log(`Категория: ${textEl[0].textContent}`);
// console.log(`Количество элементов: ${elemEl[0].children[1].children.length}`);

// console.log(`Категория: ${textEl[1].textContent}`);
// console.log(`Количество элементов: ${elemEl[1].children[1].children.length}`);

// console.log(`Категория: ${textEl[2].textContent}`);
// console.log(`Количество элементов: ${elemEl[2].children[1].children.length}`);
