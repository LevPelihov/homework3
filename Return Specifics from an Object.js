let obj2 = {a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3};
function retpurnSpecifics(obj){
    if(Object.values(obj).length == 0){
        return "The Object is Empty";
       } 
       else {
   let mas = Object.values(obj).filter(i => typeof i === 'number' );
   let Keys = Object.entries(obj).filter(([key, i]) => typeof i === 'function') .map(([key]) => key); 
   return mas.concat(Keys);
    }
}
console.log(retpurnSpecifics(obj2))
