// // 1.) Print numbers fromt 1 to 10
// for(var i = 1; i<=10; i++) {
//     document.writeln(i)
// }

// // 2.) Print the odd numbers less than 100
// for(var i = 1; i < 100; i += 2) {
//     document.writeln(i)
// }

// // 3.) Print the multiplication table with 7
// for(i=1; i<11; i++) {
//     let multiply = i * 7
//     document.write("<br>" + i + " x " + " 7 " + " = " + multiply)
// }

// // 4.) Print all the multiplicaton tables with numbers from 1 to 10
// for(var i = 1; i < 11; i++) {
//     document.write("<br>")
//     for(var j = 1; j < 11; j++) {
//         let multiply = i * j
//         document.write("<br>" + i + " x " + j  + " = " + multiply)
//     }
// }

// // 5.) Calculate the sum of numbers from 1 to 10
// var sum = 0
// for(var i = 1; i < 11; i++) {
//     sum = sum + i
// }
// document.write(sum)

// // 6.) Calculate 10!
// var multiply = 1
// for(var i = 1; i < 11; i++) {
//     multiply *= i
// }
// document.write(multiply)

// // 7.) Calculate the sum of even numbers greater than 10 and less than 30
// var sum = 0
// for(var i = 12; i < 30; i += 2) {
//     sum += i
// }
// document.write(sum)

// 10.) Calculate the sum of numbers in an array of numbers
// let array = [1, 2, 3, 4, 5, 6, 7, 8]
// let sum = array.reduce(function(a,b) {
//     return a + b;
// }, 0)
// document.write(sum)

// The 0 in the example above is the initialValue i.e. the value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used.

// 11.) Calculate the average of the numbers in an array of numbers
// let arr = [50, 25, 10, 25, 50]
// arr.map(el => el / 5)
// document.write(arr)

// 12.)
// let arr1 = [-5, -2, 15, 14, -12, 150, -264, 250]
// function arrPos(arr) {
//     return arr.filter(el => el < 0)
// }

// var arr2 = arrPos(arr1)
// console.log(arr2)

// 13.)
let arr1 = [1, 2, 5, 15, 25, 45, 155, 1525]
let arrMax = Math.max(...arr1)
document.write(arrMax)