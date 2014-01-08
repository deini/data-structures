var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size+first] = value;
    size++;
  };

  instance.dequeue = function(){
    size = size && --size;
    var result = storage[first];
    delete storage[first];
    first++;
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
