
Object.prototype.hash = function(string) {
    return string.split('.').reduce((obj, key) => {
      return (obj && obj[key] !== undefined) ? obj[key] : undefined;
    }, this);
  }// код домашки
  

  var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {

          funFact: 'I like fishing.'
        }
      }
    }
  };
  
  console.log(obj.hash('person.name')); // 'joe'
  console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
  console.log(obj.hash('person.history.homeStreet')); // undefined
  console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined
