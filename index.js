// 1) Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - "negative"

console.log('\n___Task №1___\n');

 const number = -1;

 if (number >= 0) {
  console.log('Number', number, 'is positive!'); // По умові вважаємо, що 0 - це позитивне число!
 } else {
  console.log('Number', number, 'is negative!');
 }

// 2) Є дві змінні - num1 і num2. Якщо num1 > num2 - вивести результат віднімання (num1 - num2), інакше - вивести результат множення (num1 * num2)

console.log('\n___Task №2___\n');

const num1 = 2;
const num2 = 2;
let task2Result;

console.log('num1 = ', num1);
console.log('num2 = ', num2);

if (num1 > num2) {
  console.log(num1, '>', num2, '->', num1, '-', num2);
  task2Result = num1 - num2;
} else {
  console.log(num1, '<=', num2, '->', num1, '*', num2);
  task2Result = num1 * num2;
}

console.log('\ntask2Result =', task2Result);

// 3) Якщо значення змінної кратно (тобто ділиться без остачі) на 7 і одночасно кратно 3 - виводимо "you win!", інакше - "you loose"

console.log('\n___Task №3___\n');

const task3Variable = 21;
const task3Divisor1 = 7;
const task3Divisor2 = 3;

console.log('task3Variable =', task3Variable);
console.log('task3Divisor1 =', task3Divisor1);
console.log('task3Divisor2 =', task3Divisor2, '\n');

if ((task3Variable % task3Divisor1 === 0) && (task3Variable % task3Divisor2 === 0)) {
  console.log('You win!');
} else {
  console.log('You loose!');
}