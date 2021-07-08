// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs = {
	div: document.querySelector('#controls'),
	input: document.querySelector('input'),
	btnCreate: document.querySelector('button[data-action="render"]'),
	btnReset: document.querySelector('button[data-action="destroy"]'),
	divBoxes: document.querySelector('#boxes')
	};
	let amount = 0;
	const inputAmount = function (event) {
	amount = event.currentTarget.value;
};
	
	refs.input.addEventListener('input', inputAmount);
	refs.btnCreate.addEventListener('click', () => {
	    for (let i = 1, boxSize = 30; i <= amount; i++, boxSize += 10) {
	        refs.divBoxes.innerHTML += `
	        <div style= "width: ${boxSize}px; height: ${boxSize}px;  background-color: rgb(${Math.ceil(Math.random() * 255,)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255,
	        )}); margin: 10px"></div>
	        `
	    }
	    refs.input.value = '';
	} );
	refs.btnReset.addEventListener('click', () => {
	    refs.divBoxes.innerHTML = '';
	    refs.input.value = '';
	});




	//////решение с ментором
// 	const refs = {
//   input: document.querySelector("input"),
//   buttonRender: document.querySelector('[data-action="render"]'),
//   buttonDestroy: document.querySelector('[data-action="destroy"]'),
//   boxesDivRef: document.getElementById("boxes"),
// };

// // ======== createRandom Colors ====================
// function createRandomColor() {
//   return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
//     (Math.random() * 255) << 0
//   })`;
// }

// refs.buttonRender.addEventListener("click", () =>
//   createBoxes(+refs.input.value)
// );

// function createBoxes(amount) {
//   let size = 30;
//   const elements = [];
//   refs.boxesDivRef.innerHTML = "";
//   for (let i = 0; i < amount; i += 1) {
//     const div = document.createElement("div");
//     div.style.width = size + "px";
//     div.style.height = size + "px";
//     size += 10;
//     div.style.backgroundColor = createRandomColor();
//     elements.push(div);
//   }
//   refs.boxesDivRef.append(...elements);
// }

// refs.buttonDestroy.addEventListener(
//   "click",
//   () => ((refs.boxesDivRef.innerHTML
