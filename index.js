
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
//   for (1 == 1; i <= 50; i++)
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



//switc;

let num = prompt(" Введите число от 1 до 4")
let result;
num = Number(num);
switch (num) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "лето";
    break;
  case 4:
    result = "осень";
    break;
  default:
    result = "Вы ввели не то число";
}
document.writeln(result);

