let mas = [118,117,120];
function num(mas) {
    let letters = mas.map(i => String.fromCharCode(i));
    let keys = mas.map(i => String(i));
    let obj = {};
    for(let i = 0;i < mas.length; i++) {
        obj[keys[i]] = letters[i];
        let copy = obj;
        mas[i] = copy;
        obj = {};
    }

  return  mas;
}
console.log(num(mas));
