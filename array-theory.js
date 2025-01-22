// // Array theory
const names = ['Ильдар', 'Ильhам', 'Диляра', 'Ренат', 'Полина', 'Эльмира']

// names.push('Ильназ') // добавляет элемент в массив
// names.unshift('Арина') // добавляет элемент в массив спереди. Внутри происходит операция по смене индексов всех элементов, что будет тормозить работу программы
// // names.shift() // Удаляет первый элемент массива, точнее извлекает (вырезает) или можно сказать "забирает", но элемент не пропадает, shift() может нам его вернуть
// const firstNameInArray = names.shift()
// // names.pop() // Аналогично удаляет (извлекает) последний элемент массива и может его вернуть
// const lastNameInArray = names.pop()

// console.log('Names', names);

// console.log(firstNameInArray);
// console.log(lastNameInArray);

// console.log(names.reverse()); // Переворачивает массив и "мутирует его" (меняет навсегда)
// console.log('Names', names);
// // чтобы его перевернуть только для данного случая, есть новый метод:
// console.log(names.toReversed()); // дает уже новый массив, оставляя старую
// console.log('Names', names);
// // можно даже так написать:
// const reversed = names.toReversed()
// console.log(reversed);
// console.log(names.sort()); // сортирует по алфавиту, и тоже мутирует массив
// подробнее:
// console.log(names.sort(function(a,b) {
    // return a.charCodeAt(0) - b.charCodeAt(0)
// }));
// метод для сортировки с созданием нового массива:
// console.log(names.toSorted()); // создал и изменил другой массив, не затронув первичный
// console.log(names);
// console.log(names.splice(2, 2)); // удаляет из массива элемент под индексом (первое значение);
// // второе значение - количество элементов на удаление (себя и следующих за ним элементов).
// // тоже мутирует массив
// console.log(names);
// метод для удаления с созданием нового массива:
// console.log(names.toSpliced(2, 2));
// console.log(names);
// const theOldest = 'Ренат'
// const index = names.indexOf(theOldest) // если не найдет нужное, то вернет -1
// console.log(index);
// console.log(names[index]);
// names[index] = 'Нэни абый' // присвоил новое значение элементу массива
// console.log(names);
// можно присвоить новое значение не меняя первоначальный массив
// const newNames = names.with(index, 'Нэни абый');
// console.log(newNames);
// console.log(names);

// const greatNames = names.map(function(name) { // метод map() уже понимает, что на место параметра функции нужно вставлять элементы массива поочередно
//     const newName = name + '!'
//     return newName // если не прописать return, то он сам автоматически отработает и выведет undefined на каждом элементе массива
// })
// console.log(greatNames);

// const capitalNames = names.map(function(name) {
//     return name.toUpperCase() // метод делает все символы строки заглавными
// })
// console.log(capitalNames);

// const smallLetters = names.map(function(name) {
//     return name.toLowerCase() // метод делает все символы строки строчными
// })
// console.log(smallLetters);

// const someName = names.map(function(name, index) {
//     if (index === 3) {
//         return 'Нэни абый'
//     }
//     return name
// })
// console.log(someName);
// console.log(names.includes('Ильhам'));
// console.log(names.indexOf('Ильhам'));
// console.log(names.indexOf('Ильhам') !== -1); // -1 зарезервированный индекс в массиве для несуществующих элементов. C объектами не сработают

const people = [
    {
        name: 'Ildar',
        budget: 5000
    },
    {
        name: 'Ильhам',
        budget: 30000
    },
    {
        name: 'Диляра',
        budget: 10000
    },
    {
        name: 'Ренат',
        budget: 25000
    },
    {
        name: 'Полина',
        budget: 20000
    },
    {
        name: 'Эльмира'
        ,
        budget: 15000
    },
]

/* let findedPerson

for (let person of people) {
    if (person.budget === 25000) {
        findedPerson = person
    }
}
console.log(findedPerson); */

/* let findedPerson = people.find(function(person) {
    // if (person.budget === 25000)
    // return true
    return person.budget === 25000
})
console.log(findedPerson); */

// const finded = people.find((p) => p.budget === 25000)

/* const finded = people.findIndex(function(person) {
    return person.budget === 25000
})
console.log(people[finded]); */

/* let sumBudget = 0
const filtered = people.filter(function (p) {
    return p.budget > 15000
})
console.log(filtered);
filtered.forEach(function(p) {
    sumBudget = sumBudget + p.budget
})
console.log(sumBudget); */

const sumBudget = people
.filter((p) => p.budget > 15000)
.map((p) => p.budget)
.reduce((acc, p) => acc + p, 0)
console.log(sumBudget);

// можно по-разному это сделать

const filterBudget = p => p.budget > 15000
const pickBudget = p => p.budget
const totalBudget = (acc, p) => acc + p

const byBudget = people
.filter(filterBudget)
.map(pickBudget)
.reduce(totalBudget, 0)
console.log(byBudget);

const string = 'Привет, как дела?'
const reversed = string.split() // превращает в массив
console.log(reversed);

const reversed2 = string.split(',') // разбил на 2 массива в месте где стояла запятая, удалив эту запятую
console.log(reversed2);

const reverse3 = string.split('') // разбил все по символам, удалив пространства между ними
console.log(reverse3);

const reverse4 = reverse3.toReversed().join('') // перевернул массив, теперь символы идут в обратном порядке;
// и соединил все обратно в один массив, в пустых ковычках внутри функции join() по умолчанию появляется некий "соединитель"
// и удаляет запятые между ними. Если ковычек не будет, то массив соберется со всеми этими запятыми.
console.log(reverse4);
