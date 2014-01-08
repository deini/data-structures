var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size++] = value;
  };

  instance.dequeue = function(){
    if(Object.keys(storage).length) {
      var key = Object.keys(storage)[0];
      var front = storage[key];
      delete storage[key];
      return front;
    } else {
      size = 0;
      return undefined;
    }
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};