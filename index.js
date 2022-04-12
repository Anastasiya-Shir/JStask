
"use strict"


// // variables task




// let admin;
// let name;
// name = "Джон";
// admin = name;
// console.log(admin);


// // prompt
// let age = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age} лет!`);
// // confim
// let isBoss = confirm("Ты здесь главный?");

// alert(isBoss)
// //new type

// let value = true;
// console.log(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// console.log(typeof value); // string

// // if
// let a = prompt("input you age");

// let b = (a > 10) ? "Верно" : "Неверно";
// alert(`Your age more than 10 - ${b}`);
// function quater() {
//   let min = prompt("input numper from 0 to 59");

//   if (min >= 0 & min < 15) {
//     alert(" first quater")
//   }

//   else if (min >= 15 & min < 30) {
//     alert(" second quater")
//   }

//   else if (min >= 30 & min < 45) {
//     alert(" third quater")
//   }

//   else if (min >= 45 & min < 60) {
//     alert(" fourth quater")
//   }

//   else (min > 60 || min == undefined)
//   alert(" not correct value")

// }
// quater();


// function zero() {
//   let a = prompt('choise 1,-3 or 0')
//   let b = (a == 0) ? "Верно" : "Неверно"
//   alert(b);
// }
// zero();


// function zeroSecond() {
//   let a = prompt('choise 1,-3 or 0')
//   let b = (a > 0) ? "Верно" : "Неверно"
//   alert(b);
// }
// zeroSecond();

//logic

// function logicFunctional() {
//   let a = prompt('choise -3,2,5, 3 or 0')
//   let b = (a > 0 && a < 5) ? "Верно" : "Неверно"
//   alert(b);
// }
// logicFunctional();


// function logicFunctionalSecond() {
//   let a = prompt('choise -3,2,5 or 0')
//   a = Number(a);
//   let b = (a == 0 || a == 2) ? a + 2 : a / 10
//   alert(b);
// }
// logicFunctionalSecond();



// function logicFunctionalThird() {
//   let a = prompt('choise 1,0,3 ')
//   let b = prompt('choise 3,6,5 ')

//   a = Number(a);
//   b = Number(b);
//   let c = (a <= 1 && b >= 3) ? a + b : a - b
//   alert(c);
// }
// logicFunctionalFourth();

// function logicFunctionalFourth() {
//   let a = prompt('input number')
//   let b = prompt('input number ')

//   a = Number(a);
//   b = Number(b);
//   let c = ((a > 2 && a < 11) || (b >= 6 && b < 14)) ? "True" : "False"
//   alert(c);
// }
// logicFunctionalFourth();



//For, while

// function countFor() {
//   let i = 1;
//   for (i; i <= 50; i++)
//     document.writeln(i);
// }

// countFor()

// function countwhile() {
//   let i = 1;
//   while (i < 51) {
//     document.writeln(i++);
//   }
// }
// countwhile()

// function countwhileThird() {
//   let i = 1;
//   let a = 0;
//   while (i < 101) {
//     if (i % 2 == 0) {

//       a = a + i
//       document.writeln(`четное число ${i + '<br>'}`);
//       document.writeln(`сумма ${a + '<br>'}`);
//     }
//     i++
//   }
// }
// countwhileThird()
// function countInteration() {
//   let i = 0;
//   let n = 1000;
//   while (n > 50) {
//     n = n / 2;
//     let k = n;

//     i++;

//   }
//   // if (n < 50) n = n * 2;

//   document.writeln(`последнее число ${n + '<br>'}`);

//   document.writeln(`количество интераций ${i + '<br>'}`);
// }
// countInteration()



// //switc;

// let num = prompt(" Введите число от 1 до 4")
// let result;
// num = Number(num);
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "лето";
//     break;
//   case 4:
//     result = "осень";
//     break;
//   default:
//     result = "Вы ввели не то число";
// }
// document.writeln(result);

//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// function getdDecadeOfTheMoth() {
//   let day = prompt("Введите число месяца");
//   day = Number(day);
//   if (day >= 1 && day < 8) {
//     alert("Первая Декада");
//   }
//   else if (day >= 8 && day < 16) {
//     alert("Первая Декада");
//   }
//   else if (day >= 16 && day < 23) {
//     alert("Третья Декада");
//   }
//   else if (day >= 23 && day <= 30) {
//     alert("Четверая Декада");
//   }
//   else {
//     alert("Недопустимое значение")
//   }

// }
//getDecadeOfTheMoth()


// function getDecadeOfTheYear() {
//   let month = prompt("Введите номер текущего месяца");
//   month = Number(month);
//   if ((month >= 1 && month < 3) || month == 12) {
//     alert("Зима");
//   } else if (month >= 3 && month < 6) {
//     alert("Весна");
//   } else if (month >= 6 && month < 9) {
//     alert("Лето");
//   } else if (month >= 9 && month < 12) {
//     alert("Осень");
//   } else {
//     alert("Недопустимое значение")
//   }

// }
// getDecadeOfTheYear()
//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// function getSymbolString() {
//   let str = "ahjdkjd"
//   let i = str[0];
//   let k = (i == "a") ? "Верно" : "Неверно"
//   alert(k);

// }
// getSymbolString()
//Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// function getNumberInString() {
//   let str = "7234"
//   let i = str[0];
//   let k = (i == "1" || i == "2" || i == "3") ? "да" : "нет"
//   alert(k);

// }
// getNumberInString()

// Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// function writeSumOfString() {
//   let str = "183"
//   let first = Number(str[0]);
//   let second = Number(str[1]);
//   let third = Number(str[2]);
//   let sum = first + second + third;
//   console.log(sum);

// }
// writeSumOfString()


// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "124123"
// let num;
// let i = 0;
// let sumfirst = 0;
// let sumSecond = 0;
// let l = str.length;
// for (i; i < l; i++) {
//   num = Number(str[i]);
//   if (i < 3) {
//     sumfirst = sumfirst + num;
//   }
//   else {
//     sumSecond = sumSecond + num;
//   }
// }
// switch (sumfirst) {
//   case sumSecond:
//     alert("True");
//     break;
//   default:
//     alert("false");
// }

// Задача. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.


// function getElementFromString() {

//   let str = "abcde";
//   let i = 0;
//   for (i; i < str.length; i++) {
//     document.writeln(`${str[i] + '<br>'}`);
//   }
// }
// getElementFromString()


// function countTheNumberOfSecondsInDays() {
//   let numberOfDay = prompt("Введите количество дней")

//   let numberOfSeconds = numberOfDay * 24 * 60 * 30;
//   alert(` В ${numberOfDay} днях ${numberOfSeconds} cекунд`)
// }
// countTheNumberOfSecondsInDays()

// Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки: var num = 1;num = num + 12;num = num - 14;num = num * 5;num = num / 7;num = num + 1;num = num - 1;alert(num);


// var num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);


// Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

// function GetAddingString() {
//   let str1 = 'Привет, '
//   let str2 = 'Мир!'
//   let sumOfstrings = str1 + str2;
//   alert(sumOfstrings)
// }

// GetAddingString()

//    Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

// let name = "Nastiya";
// document.write(` Hi, ${name}`)

// Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
// let someNumber = 5;
// let square = someNumber ** 2;
// alert(square);


// Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

// function getTheProductOfNumber() {
//   let str = "12345";
//   let product = 1;
//   let i = 0;
//   for (i; i < str.length; i++) {
//     product *= str[i];

//   }
//   document.writeln(product);
// }
// getTheProductOfNumber();

//   }


// }
// Задача 1. Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
// function getWhichNumberMore(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return 2;
//   } else
//     return 0;
// }



// let getWhichNumberMore = (a, b) => { return (a > b ? 1 : (a < b ? 2 : 0)); }


// let a = prompt("введите первое число");
// let b = prompt("введите второе число");
// alert(getWhichNumberMore(a, b))
// function getSquare(a, b) {
//   let square;
//   b === undefined ? square = a ** 2 : square = a * b;
//   return square;
// }

// console.log(getSquare(8, 3))


//
// Задача 1
// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
// let calcEvenOrNotEven = (a, b) => {
//   let remain;
//   a % 2 == 0 && b % 2 == 0 ? remain = a * b : a % 2 != 0 && b % 2 != 0 ? remain = a + b : a % 2 == 0 ? remain = a : remain = b;
//   return remain;


// }
// console.log(calcEvenOrNotEven(5, 8))
// Функция sequence(start, step) при вызове возвращает функцию-генератор. Каждый вызов генератора возвращает новое число в числовой последовательности. start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1).
// function sequence(start, step) {
//   for (let i = 1; i <= step; i++) {
//     generator(start);
//     start = start + step
//   }
// }

// function generator(a) {
//   return alert(a);
// }

// sequence(11, 4)



// Задача 1. Напишите функцию, которая принимает произвольное количество аргументов в виде строк и выводит их через пробел с помощью document.write() в тело html-документа. Например, функция  showWords("I've", "been", "learning", "JavaScript", "for", "a", "month") должна вывести фразу "I've been learning



// function getString() {
//   let str = "";
//   for (let i = 0; i < arguments.length; i++) {
//     str += arguments[i] + " ";
//   }
//   return document.write(str);
// }

// getString("I've", "been", "learning", "JavaScript", "for", "a", "month");

// Задача 2. Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел и возвращает 1 многозначное число. Например, функция с именем complexDigit() при вызове  complexDigit(3,6,7) вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.
function getOneNumber() {
  var num = "";
  for (let i = 0; i < arguments.length; i++) {
    num += arguments[i];
  }
  return document.write(num);
}
getOneNumber(1, 2, 4, 0, 7);