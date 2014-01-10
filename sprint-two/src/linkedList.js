var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail) {
      list.tail.next = makeNode(value);
      list.tail.next.prev = list.tail;
      list.tail = list.tail.next;
    } else {
      list.tail = list.head = makeNode(value);
    }
  };

  list.removeHead = function(){
    if (list.head){
      var result = list.head.value;
      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
      } else {
        list.head = list.head.next;
      }
      return result;
    }
    return undefined;
  };

  list.removeTail = function() {
    if (list.tail) {
      var result = list.tail.value;
      if (list.tail === list.head){
        list.head = null;
        list.tail = null;
      }
      list.tail = list.tail.prev;
      list.tail.next = null;
      return result;
    } 
    return undefined;
  };

  list.contains = function(target, node){
    var current = list.head;
    while(current) {
      if (current.value === target){
        return true;
      }
      current = current.next;
    }
    return false;
  };

  list.addToHead = function(value) {
    if (list.tail) {
      list.head.prev =  makeNode(value);
      list.head.prev.next = list.head;
      list.head = list.head.prev;
    } else {
      list.head = list.tail =  makeNode(value);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
