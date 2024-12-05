function depth(obj) {
    if(obj === null || typeof obj !== 'object' || Object.values(obj).length == 0  || Array.isArray(obj)) {
      return 0;
    }
    var d = 0;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        d = Math.max(d, depth(obj[key]));
      
      }
    }
      return d + 1;
  }
  console.log(depth({a: 1, b: {c: 2}, d :[1, 2]}))