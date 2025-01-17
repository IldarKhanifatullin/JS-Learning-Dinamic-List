// Object Theory

/* const person = {
    firstName: 'Ildar',
    lastName: 'Khanifatullin',
    birthDate: 1993,
    city: 'Kazan',
    married: false,
    languages: ['tt', 'ru', 'en'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    },
    getFullName2: function() {
        return person.firstName + ' ' + person.lastName
    },
}

console.log(person.getFullName());
console.log(person.firstName + ' ' + person.lastName);

console.log(person.getFullName2());


console.log(typeof person);
console.log(typeof notes);

console.log(person.birthDate);
console.log(person['languages']);

const key = 'married';

console.log(person[key]);

person.married = true;

console.log(person.married); */

const notes = [
    {
        title: 'something1',
        completed: false,
    },
    {
        title: 'something2',
        completed: false,
    },
    {
        title: 'something3',
        completed: false,
    },
    {
        title: 'something4',
        completed: false,
    },
    {
        title: 'something5',
        completed: true,
    },
]

function getNoteTemplate(element, index) {
    return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span class ="${element.completed === true ? 'text-decoration-line-through' : ''}">${element.title}</span>
        <span>
        <span class="btn btn-small btn-${element.completed === true ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
        </span>
    </li>
    `
}

listEl.onclick = function(event) {
    // console.log(event.target.dataset.index)

    if (event.target.dataset.index) {
        // const index = Number(event.target.dataset.index)
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
        // console.log('toggle', index);
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
        //  console.log('remove', index);
            notes.splice(index, 1)
        }
        render()
    }
}

function render() {

    listEl.innerHTML = ''

    if (notes.length === 0) {
        listEl.innerHTML = '<p>Нет элементов</p>'
    }

/*    for (let note of notes) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    } */

/*    for (let [key, value] of Object.entries(notes)) {
        console.log(`Ключ: ${key}, Значение: ${value}`);
    } // Можно еще вот так использовать for-of для объектов, но в данном случае у нас массив */
    
    for (let i = 0; i < notes.length; i++) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
}
}

render()

addBtnEl.onclick = function() {

    if (inputTextEl.value.length === 0) {
        return
    }
    const newNote = {
        title: inputTextEl.value,
        completed: false,
    }
    // listEl.insertAdjacentHTML('beforeend', getNoteTemplate(newNote)) // Нужно как-то присвоить индекс новому списку и выводить на шаблон

    notes.push(newNote)

    render()

    inputTextEl.value = ''
}

