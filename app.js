/* // Theory

const array = [1, 2, 3, 5, 20, 42];
// const arrayStrings = [a, b, c];
// const arrayDiverse = [d, t, x, null, 12];
const array2 = new Array(1, 2, 3, 5, 20, 42);
console.log(array);
console.log(array.length); // Выведет последний номер элемента по счету в массиве (в данном случае 6)
console.log(array[1]); // В скобках номер индекса. Выведет элемент под этим индексом (в данном случае 2). Индекс массива начинается с 0
console.log(array[array.length - 1]); // Выведет элемент под последним индексом (в данном случае array[6-1], то есть array[5]).
// Если не добавить "- 1", то будет пытаться вывести элемент под 6 индексом, а его нет.
array[0] = 'Privet!'; // Можно менять элементы внутри массива, даже если массив объявлен через const.
array.push(111);
console.log(array);
array[array.length] = 'Poka!';
console.log(array); */

const inputTextEl = document.getElementById('inputText');
const addBtnEl = document.getElementById('addBtn');
const listEl = document.getElementById('list');

// const notes = ['something1', 'something2', 'something3', 'something4', 'something5']; // Стандартный массив.
// Может внутри себя содержать и объекты. Перепишем этот массив по-другому в файлe "object.js"

console.log(inputTextEl.value);

// function render() {

/*  listEl.insertAdjacentHTML('beforeend', `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${notes[0]}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>
    `)
    listEl.insertAdjacentHTML('beforeend', `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${notes[1]}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>
    `) // Слишком громоздкий код, это не правильно, нужно автоматизировать блок */

/*  listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]));
    listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]));
    listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[2]));
    listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[3]));
    listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[4])); // тоже нужно автоматизировать и уменьшить код,
    для упрощения используем итерацию (операторa цикла) */

/*  for (let i = 0; i < notes.length; i++) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
    } // можно еще более современный формат */

/*    for (let note of notes) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    } // // Оператор цикла for-of. Напишем его в новом месте */

/* for (let [index, element] of notes.entries()) {
    console.log(`Индекс: ${index}, Элемент: ${element}`);
} // Можно еще вот так использовать оператор цикла for-of */

// } // Функцию можно написать позже чем его объявить

// render() // это метод функции

/* function getNoteTemplate(title) { // title - параметр функции. Сама функция не сможет просто так отработать c объектом, поэтому это разберем в файле object.js
    return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${title}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>
    `
} // Объявим позже */

// addBtnEl.onclick = function() {

//     if (inputTextEl.value.length === 0) { // у строчек 'string' тоже есть свойство "length" и мы можем посчитать количество символов в строке
//         return
//     }

/*      listEl.innerHTML = inputTextEl.value // Попадает в содержимое элемента (списка) в HTML и присваивает содержимому текст
    (полностью заменяет содержимое, включая все стили), поэтому это не корректно */

/*      listEl.innerHTML = `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${inputTextEl.value}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>
    ` // Каждый раз будет заменять предыдущую строку, тоже не то чего хотелось */

/*      listEl.insertAdjacentHTML('beforeend', `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
            >
                <span>${inputTextEl.value}</span>
                <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
                </span>
            </li>
            `) // Нужно заменить блок функцией */

//      listEl.insertAdjacentHTML('beforeend', getNoteTemplate(inputTextEl.value))

//     inputTextEl.value = ''
// } // Тоже объявим позже
