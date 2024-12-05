function cake(string, value){
    var recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocoa powder': 55};
    for(let key in recipe) {
      if(key == string) {
        let cof = recipe[key] / value;
        for(let key in recipe) {
          recipe[key] = Math.round((recipe[key] / cof) * 10) / 10;
          if(key != 'eggs') {
          recipe[key] = recipe[key] + "g";
          }
        }
      }
    }
    return recipe;
  }
  console.log( cake('butter', 85));