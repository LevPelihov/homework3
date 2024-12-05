function solution (data, replace) {
    if (typeof data !== "object" || data === null) {
      return data;
    }
    for(let key in data) {
      if( key == "dynamic"){
        key = replace;
      }
      if( typeof data[key] === "object"){
        solution(data[key], replace);
      }
      else if( data[key] === "dynamic"){
        data[key] = replace;
      }
    }
    return data;
  
  }// Код домашки




  const obj = {
    foo: "dynamic",
    bar: {
      baz: ["dynamic"]
    },
    dynamic: true
  };
  const replace = "replace";
  
  console.log(solution (obj, replace));
  