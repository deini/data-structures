var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = makeLinkedList();
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage.addToTail(value);
    size++;
  };

  instance.dequeue = function(){
    size = size && --size;
    return storage.removeHead();
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
