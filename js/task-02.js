// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const elementsEl = document.getElementById('ingredients');

const newElementsEl = ingredients.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    return itemEl;
});


elementsEl.append(...newElementsEl);
