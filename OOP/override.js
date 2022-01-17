function Animal() { }//parent
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);//child

Bird.prototype.eat = function() {
  return "peck peck peck";
};

let cucu=new Bird();//subchild
console.log(cucu.eat())