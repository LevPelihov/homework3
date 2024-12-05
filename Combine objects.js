const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine() {
    let objRes = Object.assign({},arguments[0]);
     for (let i = 1; i < arguments.length; i++) {
         for (let key in arguments[i]) {
             if (objRes.hasOwnProperty(key)) {
                 objRes[key] += arguments[i][key];
             } else {
                 objRes[key] = arguments[i][key];
             }
         }
     }
     return objRes;
 }// Код домашки


console.log(objA);// Проверка , не изменился-ли объект

console.log(combine(objA, objC, objD, objB ));