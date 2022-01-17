function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }



Dog.prototype=Object.create(Animal.prototype);//ChildObject.prototype = Object.create(ParentObject.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark=function(){
  console.log('Woof!')
}//ChildObject.prototype.methodName = function() {...};




let beagle = new Dog();
beagle.eat();
beagle.bark();