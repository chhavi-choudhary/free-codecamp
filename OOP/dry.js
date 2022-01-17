Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };


  
  function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Bird.prototype = {
    constructor: Bird
  };
  
  Dog.prototype = {
    constructor: Dog
  };