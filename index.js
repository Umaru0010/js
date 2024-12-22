// alert("Привет, я твоя первая программа!")
// document.write("Привет, я текст")
// let product = "Телефон" //Название продукта
// let price = 80000.90
// let count = 2
// let phone = product // Модель телефона 
// let myName = "Андрей"  
// console.log(myName)
// console.log(2-4)
// let count = 2
// let price = 50
// alert(count * price)чё   
// let per = 1
// per++ тоже самое что per + 1
// console.log(per)



// Исправьте код этой программы так, что в консоль выводился результат выполнения программы, а не ошибка
//2.9.1:
// let currentYear = 2024

// let student = "Илья"
// let year = 2006
// let age = currentYear - year

// console.log("Студент:", student);
// console.log("Год рождения:", year);
// console.log("Возраст:", age);



//2.9.2:
// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

// let product1 = prompt("Введите название первого товара") // Название товара 1
// let price1 = prompt("Введите стоимость первого товара") // Стоимость товара  1
// let count1 = prompt("Введите количесто первого товара") // Количесто товара 1

// console.log(product1, price1 * count1) // Вывод в консоль

// let product2 = prompt("Введите название второго товара") // Название товара 2
// let price2 = prompt("Введите стоимость второго товара")  // Стоимость товара  2
// let count2 = prompt("Введите количесто второго товара") // Количесто товара 2

// console.log(product2, price2 * count2) // Вывод в консоль

// let product3 = prompt("Введите название третьего товара") // Название товара 3
// let price3 = prompt("Введите стоимость третьего товара")
// let count3 = prompt("Введите количесто третьего товара") // Количесто товара 3

// console.log(product3, price3 * count3) // Вывод в консоль


//2.9.3
// Сделайте код программы короче, используя инкремент.

// let index = 0; // Счетчик

//  Бегун 1
// let runner1 = "Денис";
// console.log(++index, runner1);

//  Бегун 2
// let runner2 = "Виктория";
// console.log(++index, runner2);

//  Бегун 3
// let runner3 = "Антон";
// console.log(++index, runner3);

//  Бегун 4
// let runner4 = "Лена";
// console.log(++index, runner4);

// Бегун 5
// let runner5 = "Никита";
// console.log(++index, runner5);







//2.9.4
// let index = 0; // Счетчик

// let student1 = prompt("Введите имя первого ученика");
// let yearBirth1 = prompt("Введите год рождения первого ученика");
// let age1 = 2024 - yearBirth1 ;
// console.log(++index, student1);

// let student2 = prompt("Введите имя второго ученика");
// let yearBirth2 = prompt("Введите год рождения первого ученика");
// let age2 = 2024 - yearBirth1;
// console.log(++index, student2);

// let student3 = prompt("Введите имя третьего ученика");
// let yearBirth3 = prompt("Введите год рождения первого ученика");
// let age3 = 2024 - yearBirth1;
// console.log(++index, student3);

// let sredAge = ((age1 + age2 + age3)/3)

// console.log("Средний возраст пользователей:", sredAge);



// const color = "green";

// if (color == "green") {
//     console.log("Проезжаем светофор")
// } else if (color == "yellow") {
//     console.log("Приготовиться")
// } else {
//     console.log("Стоим на месте")
// }


// const isPetyaWalk = false;
// //const isMashaWalk = true;

// if (!isPetyaWalk ) {
//     console.log("Я иду гулять")
// } else {
//     console.log("Я не иду гулять")
// }


// const color = "green";
// const isPedestrians = false;


// if (color == "green" && !isPedestrians) {
//     console.log("Проезжаем светофор")
// } else if (color == "yellow") {
//     console.log("Приготовиться")
// } else {
//     console.log("Стоим на месте")
// }

//3.3.4

// const parol = "qwerty";
// let vashparol = prompt("Введите пароль");

// if (vashparol == parol) {
//     console.log("Пароли совпадают")
// } else {
//     console.log("Пароли не совпадают")
// }





// 3.10.1

// class ATM {
//     constructor(initialBalance = 0) {
//         this.cardInserted = false;
//         this.balance = initialBalance;
//     }

//     insertCard() {
//         this.cardInserted = true;
//         console.log("Карта вставлена");
//     }

//     ejectCard() {
//         this.cardInserted = false;
//         console.log("Карта извлечена");
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`Внесено ${amount}. Новый баланс: ${this.balance}`);
//         } else {
//             console.log("Неверная сумма для внесения.");
//         }
//     }

//     withdraw(amount) {
//         if (!this.cardInserted) {
//             console.log("Ошибка: Вставьте карту.");
//         } else if (amount <= 0) {
//             console.log("Ошибка: Неверная сумма для снятия.");
//         } else if (amount > this.balance) {
//             console.log("Ошибка: Недостаточно средств на счете.");
//         } else {
//             this.balance -= amount;
//             console.log("Операция выполняется.");
//             console.log(`Снято ${amount}. Новый баланс: ${this.balance}`);
//         }
//     }

//     checkBalance() {
//         if (!this.cardInserted) {
//             console.log("Ошибка: Вставьте карту.");
//         } else {
//             console.log(`Текущий баланс: ${this.balance}`);
//         }
//     }
// }

// // Пример использования
// const atm = new ATM(1000); // Создаем банкомат с начальным балансом 1000

// atm.withdraw(500);    // попытка снять без карты
// atm.insertCard();      // вставляем карту
// atm.checkBalance();   // проверяем баланс
// atm.withdraw(200);    // снимаем 200
// atm.checkBalance();   // проверяем баланс
// atm.withdraw(1500);   // пытаемся снять больше баланса
// atm.withdraw(-50)    // пытаемся снять отрицательную сумму
// atm.deposit(100);    // вносим 100
// atm.checkBalance();   // проверяем баланс
// atm.ejectCard();      // извлекаем карту
// atm.checkBalance();   // пытаемся проверить баланс без карты




// 3.10.2

// function calculateTax(power) {
//     let taxRate;
  
//     if (power <= 100) {
//       taxRate = 12;
//     } else if (power > 100 && power <= 125) {
//       taxRate = 25;
//     } else if (power > 125 && power <= 150) {
//       taxRate = 35;
//     } else if (power > 150 && power <= 175) {
//       taxRate = 45;
//     } else if (power > 175 && power <= 200) {
//       taxRate = 50;
//     } else if (power > 200 && power <= 225) {
//       taxRate = 65;
//     } else if (power > 225 && power <= 250) {
//       taxRate = 75;
//     } else {
//       taxRate = 150;
//     }
  
//     const taxAmount = power * taxRate;
//     console.log(`Сумма налога: ${taxAmount}`);
//   }
  
//   // Пример использования
//   calculateTax(110);







// 4.11.1

// function average(num1, num2, num3) {
//     const sum = num1 + num2 + num3;
//     const avg = sum / 3;
//     return avg;
//   }
  
//   // Примеры использования
//   const result1 = average(1, 2, 3);
//   console.log(result1); // Вывод: 2
  
//   const result2 = average(10, 20, 30);
//   console.log(result2); // Вывод: 20
  
//   const result3 = average(5, 10, 15);
//   console.log(result3); // Вывод: 10
  
//   const result4 = average(2, 4, 9);
//   console.log(result4); // Вывод: 5



// 4.11.2
// // Функция для перевода градусов Цельсия в градусы Фаренгейта
// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = celsius * 1.8 + 32;
//     return fahrenheit;
//   }
  
//   // Функция для перевода градусов Фаренгейта в градусы Цельсия
//   function fahrenheitToCelsius(fahrenheit) {
//     const celsius = (fahrenheit - 32) / 1.8;
//     return celsius;
//   }
  
//   // Примеры использования и вывод результатов в консоль
//   console.log(celsiusToFahrenheit(25));    // Вывод: 77
//   console.log(fahrenheitToCelsius(77));    // Вывод: 25
//   console.log(celsiusToFahrenheit(0));     // Вывод: 32
//   console.log(fahrenheitToCelsius(32));    // Вывод: 0
//   console.log(celsiusToFahrenheit(100));   // Вывод: 212
//   console.log(fahrenheitToCelsius(212));   // Вывод: 100
//   console.log(celsiusToFahrenheit(-40));    // Вывод: -40
//   console.log(fahrenheitToCelsius(-40));    // Вывод: -40


// 4.11.3

// const celsiusToFahrenheit = celsius => celsius * 1.8 + 32; const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;
// console.log(celsiusToFahrenheit(25)); // Output: 77

// 4.11.4

// // Более безопасный вариант (при необходимости):
// let count = 3;

// function countPlusOne() {
//   if (count < 0) {
//     console.error("Значение count не может быть меньше нуля.");
//     return; // Остановка функции, если значение некорректное.
//   }
//   count++;
//   console.log(count);
// }

// countPlusOne();  // Вывод: 4
// countPlusOne();  // Вывод: 5
// countPlusOne();  // Вывод: 6
// countPlusOne(); // Вывод: 7


// 4.11.5

// function totalSum(priceItem, amountItem, discountItem) {
//     // Проверяем, что все значения являются числами и не отрицательны
//     if (typeof priceItem !== 'number' || priceItem < 0 ||
//         typeof amountItem !== 'number' || amountItem < 0 ||
//         typeof discountItem !== 'number' || discountItem < 0) {
//       console.error("Ошибка: Все параметры должны быть неотрицательными числами.");
//       return; // Прерываем выполнение функции, если есть ошибка
//     }
  
//     // Считаем стоимость без скидки
//     const totalPrice = priceItem * amountItem;
    
//     // Считаем сумму скидки в рублях
//     const discountAmount = totalPrice * (discountItem / 100);
  
//     // Считаем итоговую стоимость
//     const discountedTotal = totalPrice - discountAmount;
  
//     return discountedTotal;
//   }
  
//   // Примеры использования
//   const priceItem = 25000;
//   const amountItem = 3;
//   const discountItem = 20;
  
//   const finalSum = totalSum(priceItem, amountItem, discountItem);
//   console.log(finalSum);   // Вывод: 60000
  
//   const finalSum1 = totalSum(1000, 2, 10)
//   console.log(finalSum1)   // Вывод 1800
  
//   const finalSum2 = totalSum(5000, 4, 0)
//   console.log(finalSum2)   // Вывод 20000
  
//   const finalSum3 = totalSum(5000, 4, 100)
//   console.log(finalSum3)  // Вывод 0





// 5.13.1

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Интернет-магазин</title>
// </head>
// <body>
//     <h1>Каталог товаров</h1>
//     <ul id="product-list">
//         <li>
//             <span>Товар 1</span>
//             <button onclick="addToCart('Товар 1')">Добавить в корзину</button>
//         </li>
//         <li>
//             <span>Товар 2</span>
//             <button onclick="addToCart('Товар 2')">Добавить в корзину</button>
//         </li>
//         <li>
//             <span>Товар 3</span>
//             <button onclick="addToCart('Товар 3')">Добавить в корзину</button>
//         </li>
//     </ul>
//     <h2>Корзина</h2>
//     <ul id="cart">
//     </ul>

//     <script>
//         function addToCart(productName) {
//             // Получаем элемент списка корзины
//             const cart = document.querySelector('#cart');
            
//             // Создаем новый элемент списка (<li>) для товара
//             const listItem = document.createElement('li');

//             // Создаем текстовый узел с названием товара
//             const textNode = document.createTextNode(productName);

//             // Добавляем текстовый узел в элемент списка
//             listItem.appendChild(textNode);
            
//             // Добавляем класс к li
//             listItem.classList.add("cart-item");

//             // Добавляем созданный элемент списка в корзину
//             cart.appendChild(listItem);
//         }
//     </script>
// </body>
// </html>







// 6.7.1

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Список товаров</title>
// </head>
// <body>
//     <h1>Список товаров</h1>
//     <ul class="products">
//         <!-- Список товаров будет сгенерирован здесь -->
//     </ul>
//     <script>
//         // Исходный массив с товарами
//         const products = ["Мышка", "Клавиатура", "Наушники"];

//         // Новые товары, которые нужно добавить
//         const newProducts = ["Монитор", "Принтер", "Флешка"];

//         // Добавляем новые товары в массив products
//         products.push(...newProducts);

//         // Находим элемент списка ul
//         const productsList = document.querySelector('.products');

//         // Перебираем массив products и создаем элементы li
//         products.forEach(product => {
//            // Создаем li элемент
//            const listItem = document.createElement('li');
           
//            // Создаем текстовый узел
//            const textNode = document.createTextNode(product);
           
//            // Добавляем текст в li элемент
//            listItem.appendChild(textNode);

//            // Добавляем li в список ul
//            productsList.appendChild(listItem)
//         });
//     </script>
// </body>
// </html>




// 6.7.2

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Поиск минимального и максимального числа</title>
// </head>
// <body>
//     <h1>Поиск минимального и максимального числа</h1>
//     <p class="all-elements"></p>
//     <button class="min">Найти минимальное число</button>
//     <button class="max">Найти максимальное число</button>
//     <p>Минимальное число: <span class="minNumber"></span></p>
//     <p>Максимальное число: <span class="maxNumber"></span></p>

//     <script>
//         // Исходный массив с числами
//         const numbers = [5, 12, 8, 2, 20, 1, 15, 3, 18, 7];

//         // Получаем элемент, куда будем выводить все числа массива
//         const allElements = document.querySelector('.all-elements');
        
//         // Получаем кнопки "Найти минимальное" и "Найти максимальное"
//         const minButton = document.querySelector('.min');
//         const maxButton = document.querySelector('.max');
        
//         // Получаем элементы для вывода минимального и максимального чисел
//         const minNumberSpan = document.querySelector('.minNumber');
//         const maxNumberSpan = document.querySelector('.maxNumber');

//         // Выводим все элементы массива
//         let allNumbersText = "";
//         for(let i = 0; i < numbers.length; i++){
//             allNumbersText += numbers[i];
//             if (i < numbers.length - 1){
//                 allNumbersText += ", ";
//             }
//         }
//         allElements.textContent = allNumbersText;

//         // Функция для поиска минимального числа
//         function findMin() {
//            let min = numbers[0];
//            for(let i = 1; i < numbers.length; i++){
//                 if(numbers[i] < min){
//                     min = numbers[i]
//                 }
//             }
//             minNumberSpan.textContent = min;
//         }

//         // Функция для поиска максимального числа
//         function findMax() {
//              let max = numbers[0];
//              for(let i = 1; i < numbers.length; i++){
//                 if(numbers[i] > max){
//                     max = numbers[i]
//                 }
//              }
//              maxNumberSpan.textContent = max;
//         }

//         // Добавляем обработчики событий на кнопки
//         minButton.addEventListener('click', findMin);
//         maxButton.addEventListener('click', findMax);
//     </script>
// </body>
// </html>





// 8.8.1
// // Функция для подсчёта гласных букв в слове
// const countVowels = (word) => {
//     // Определяем массив гласных букв 'a', 'e', 'i', 'o', 'u'
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     // Приводим слово к нижнему регистру для удобства сравнения
//     const lowerCaseWord = word.toLowerCase();
    
//     // Используем метод filter() для фильтрации гласных букв
//     const vowelArray = lowerCaseWord.split('').filter(char => vowels.includes(char));
    
//     // Возвращаем количество гласных букв
//     return vowelArray.length;
//   };
  
//   // Пример работы программы
//   const word = 'JavaScript';
//   const vowelCount = countVowels(word);
//   console.log(vowelCount); // Выведет 3
  
//   const word1 = 'Programming';
//   const vowelCount1 = countVowels(word1);
//   console.log(vowelCount1);  // Выведет 3
  
//   const word2 = 'hello';
//   const vowelCount2 = countVowels(word2);
//   console.log(vowelCount2);  // Выведет 2
  
//   const word3 = 'fly';
//   const vowelCount3 = countVowels(word3);
//   console.log(vowelCount3);  // Выведет 0


// 8.8.2. 
// // Массив массивов пользователей
// const users = [
//     ["Alice", 25, true],
//     ["Bob", 30, false],
//     ["Charlie", 22, true],
//     ["David", 27, true],
//     ["Eve", 20, false],
//     ["Grace", 32, true],
//     ["Frank", 29, true],
//     ["Helen", 28, false]
// ];

// function filterAndSortUsers(users) {
//     // Фильтруем пользователей, чей возраст больше 25 лет и которые занимаются спортом
//     const filteredUsers = users.filter(user => user[1] > 25 && user[2]);

//     // Сортируем отфильтрованных пользователей по возрастанию возраста
//     const sortedUsers = filteredUsers.sort((a, b) => a[1] - b[1]);

//     // Возвращаем массив имён активных пользователей из отсортированного списка
//     const activeUserNames = sortedUsers.map(user => user[0]);

//     return activeUserNames;
// }

// // Вызов функции и вывод результата
// const sportUsersOver25 = filterAndSortUsers(users);
// console.log(sportUsersOver25); // Выведет ["David", "Frank", "Grace"]



// // 9.10.1
// const cars = {
//     "Toyota Camry": {
//         name: "Toyota Camry",
//         wheels: 4,
//         doors: 4,
//         isStarted: false,
//         hp: 203
//     },
//     "Honda Civic": {
//         name: "Honda Civic",
//         wheels: 4,
//         doors: 4,
//         isStarted: false,
//         hp: 158
//     },
//     "Ford Mustang": {
//         name: "Ford Mustang",
//         wheels: 4,
//         doors: 2,
//         isStarted: false,
//         hp: 310
//     },
//     "BMW X5": {
//         name: "BMW X5",
//         wheels: 4,
//         doors: 5,
//         isStarted: false,
//         hp: 335
//     },
//      "Mercedes-Benz C-Class": {
//         name: "Mercedes-Benz C-Class",
//         wheels: 4,
//         doors: 4,
//         isStarted: false,
//         hp: 255
//     },
//     "Audi A4": {
//          name: "Audi A4",
//          wheels: 4,
//          doors: 4,
//          isStarted: false,
//          hp: 201
//     },
//     "Nissan GT-R": {
//         name: "Nissan GT-R",
//         wheels: 4,
//         doors: 2,
//         isStarted: false,
//         hp: 565
//     }
// };

// function getCar(carName) {
//   if (cars.hasOwnProperty(carName)) {
//     return cars[carName];
//   } else {
//     console.log("Автомобиль не найден");
//     return null;
//   }
// }

// // Примеры работы программы:
// const carName1 = "Toyota Camry";
// const foundCar1 = getCar(carName1);
// console.log(foundCar1);

// const carName2 = "Ford Focus";
// const foundCar2 = getCar(carName2); // Вывод в консоль: "Автомобиль не найден"
// console.log(foundCar2); // Вывод: null


// 9.10.2
// const cars = {
//     "Toyota Camry": {
//         name: "Toyota Camry",
//         wheels: 4,
//         doors: 4,
//         isStarted: false,
//         hp: 203
//     },
//     "Honda Civic": {
//         name: "Honda Civic",
//         wheels: 4,
//         doors: 4,
//         isStarted: false,
//         hp: 158
//     },
//     "Ford Mustang": {
//         name: "Ford Mustang",
//         wheels: 4,
//         doors: 2,
//         isStarted: false,
//         hp: 310
//     },
//     "BMW X5": {
//         name: "BMW X5",
//         wheels: 4,
//         doors: 5,
//         isStarted: false,
//         hp: 335
//     },
//      "Mercedes-Benz C-Class": {
//         name: "Mercedes-Benz C-Class",
//         wheels: 4,
//         doors: 4,
//         isStarted: false,
//         hp: 255
//     },
//     "Audi A4": {
//          name: "Audi A4",
//          wheels: 4,
//          doors: 4,
//          isStarted: false,
//          hp: 201
//     },
//     "Nissan GT-R": {
//         name: "Nissan GT-R",
//         wheels: 4,
//         doors: 2,
//         isStarted: false,
//         hp: 565
//     }
// };

// function printCarNames(carsObject) {
//     for (const carName in carsObject) {
//         console.log(carName);
//     }
// }

// // Пример работы программы:
// printCarNames(cars);


// 9.10.3
// function createCar(additionalCarData) {
//     const baseCarData = {
//       wheels: 4,
//       doors: 4,
//       isStarted: false,
//     };
  
//     // Объединяем объекты, используя оператор расширения для `additionalCarData`
//     const combinedCar = { ...baseCarData, ...additionalCarData };
  
//     return combinedCar;
//   }
  
//   // Примеры работы программы:
//   console.log(createCar({ name: 'Haval', hp: 198 }));
//   console.log(createCar({ name: 'Toyota', hp: 200, color: 'red' }));
//   console.log(createCar({ model: 'BMW X5', hp: 300 })); // Обратите внимание на использование различных названий полей.



// 16.6.1
// function hello() {
//     console.log('Skill');
//   }
//   try { 
//     helo(); // Ошибка: функция helo() не определена
//   } catch (error) {
//     console.error("Ошибка: функция 'helo' не определена. Проверьте название функции.");
//   }
//   console.log('complete');

// 16.6.2
// function greeting() {
//     const username = prompt("Введите имя пользователя");
//     if (!username) {
//       throw new Error("Имя обязательно для заполнения");
//     }
//   }
//   try {
//     greeting();
//   } catch (error) {
//     alert(error.message);
//   }



// 16.6.3
// function globalError() {
//     const error = new Error('Глобальная ошибка');
//     error.name = 'GlobalError';
//     throw error;
//   }
  
//   function localError() {
//     const error = new Error('Локальная ошибка');
//     error.name = 'LocalError';
//     throw error;
//   }
  
//   function testErrorScope(fn) {
//     try {
//       fn();
//     } catch (error) {
//       if (error.name === 'LocalError') {
//         console.log('Обнаружена локальная ошибка');
//         console.error(error);
//       } else {
//         console.log('Обнаружена глобальная ошибка');
//         console.error(error);
//       }
//     }
//   }
  
//   testErrorScope(localError);
//   testErrorScope(globalError);