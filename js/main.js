
// function arrayFill(value, length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }
// console.log("Задание №1:", arrayFill('x', 5));
//
//
// function isNumberInRang (num){
//     if (num > 0){
//         if (num < 10){
//             return true;
//         }else{
//             return false;
//         }
//     }else{
//         return false;
//     }
// }
// console.log("Задание №2:", isNumberInRang(1));
//
//
// function isEven (num) {
//     return num % 2 === 0;
// }
// console.log("Задание №3:",isEven(4))
//
//
// var arr = [0,4,7,3,5,6,9,5,4,7,8,3,2,4,56,6,8,69];
// var result = [];
//
// function isEvene(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// for (var i=0; i<arr.length; i++) {
//     if (isEvene(arr[i])) {
//         result.push(arr[i]);
//     }
// }
// console.log("Задание №4:",result);
//
//
// function math (a,b){
//     console.log("Задание №5:", a**b)
// }
// math(5, 2)
//
//
//
// function checkAge(age) {
//     if (age >= 16) {
//         return true;
//     } else {
//     }
// }
// let age = prompt('Задание №6: Сколько вам лет?', );
// if ( checkAge(age) ) {
//     alert( 'Добро пожаловать' );
// } else {
//     alert( 'Вы еще молоды' );
// }
//
//
// let age1 = prompt('Задание №7: Сколько вам лет?');
// function checkAge1(age1) {
//     if (age1===undefined) {
//     return 'Введите возраст';
//   }
//   if (age1 > 16) {
//     return ('Добро пожаловать');
//   }
//    else {
//     return ('Вы еще молоды');
//     }
// }
// console.log(checkAge1(age1))
//
//
//
// let age2 = prompt('Задание №7.1: Сколько вам лет?', );
//     function checkAge2(age2) {
//         age2 = age2 ||'ttt'
//         if (age2 === 'ttt') {
//             return 'Введите возраст';
//         }
//         if (age2 > 16) {
//             return 'Добро пожаловать';
//         }
//         else {
//             return 'Вы еще молоды';
//         }
//     }
//     console.log(checkAge2(age2))
//
//

//
// let str = 'Задание №8: какой то текст'
// let res =[]
// let arr = str.split(' ')
// for (let i=0; i < arr.length; i++){
//     res.push(ucFirst(arr[i]))
// }
// let newStr =res.join(' ')
// console.log(newStr)
// function ucFirst(word) {
//   return word[0].toUpperCase() + word.substr(1);
// }
//


//
// function ucfirst(str) {
//   return str[0].toUpperCase()+ str.substr(1)
// }
// var str = 'Задание №9:var_text_hello';
// var res = [];
// var newArr = str.split('_');
// res.push(newArr[0]);
// for (let i = 1; i < newArr.length; i++) {
//   var newStr = ucfirst(newArr[i]);
//   res.push(newStr);
// }
// var final = res.join('');
// console.log(final);



// function inArray(value,arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === value) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }
// //
// // let mas = [4,6,78,432,6,5,7,8,9,3,4,5,6,7];
// //
// // console.log("Задание №10:", inArray(1,mas));