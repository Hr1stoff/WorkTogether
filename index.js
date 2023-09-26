// массив с работниками 
let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "age": 12,
        "salary": 9000
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "age": 14,
        "salary": 11000

    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "age": 50,
        "salary": 55400

    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "age": 23,
        "salary": 23500

    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "age": 34,
        "salary": 33900
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "age": 21,
        "salary": 22500
    },

    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "age": 28,
        "salary": 13904
    },

    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "age": 18,
        "salary": 14577
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "age": 11,
        "salary": 16779
    },

    {
        "id": 10,
        "name": "Clementina DuBuque",
        "age": 19,
        "salary": 19333
    }
];


let realUsers = []; // Здесь я записываю в новый массив;
let count = 0; //счетчик для массива
let middleSalary; // сюда запись сред зп


// сама функция
let geatFunc = () => {
    let filterUsers = (value) => {
        if (value >= 18) {
            return value;
        };
    };//Функция сравнивает элементы из масс и возваршает те которые больше или равны 18


    let newUsers = users.filter(item => filterUsers(item.age)); // С использованием метода и функции записываю во временную переменную отсеянные элементы

    let calcMiddle = () => { // функция подсчета сред. зп
        let salaryItem = newUsers.map(item => item.salary);// временная перменная, вытягивает из отфильтрованного масссива их зп

        if (count == 0) { // считает сколько в массиве эл и перезаписывает в переменную count
            for (let i = 0; i < newUsers.length; i++) {
                count++;
            }
            // console.log("it's work = " + count);
        };

        middleSalary = Math.floor(salaryItem.reduce((a, b) => a + b) / count); // вычисление сред. зп с помощью reduce и мат метода 
    };
    calcMiddle(newUsers); // вызываем функцию на отсеянный массив
    return newUsers; //завершаем функцию
};
realUsers = geatFunc(); // записываем в новый массив наши отсеянный эл


console.log(
    `Количество реальных сотруднико работащих равно ${count} и средняя их зарплата равна ${middleSalary} ` 
);









/* 
// Оптимизация функции.
let newFoo = () => {
    let newUsers = users.filter(item => item.age >= 18);
};
 */