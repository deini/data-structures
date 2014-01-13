var Queue = function(){
  this._storage = new LinkedList();
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
  this._size++;
  this._storage.addToTail(value);
};

Queue.prototype.dequeue = function() {
  this._size = this._size && --this._size;
  return this._storage.removeHead();
};

Queue.prototype.size = function() {
  return this._size;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this._head = null;
  this._tail = null;
};

LinkedList.prototype.removeHead = function(){
  if(this._head) {
    var tempHead = this._head;
    this._head = this._head.next;
    return tempHead.value;
  }
  return null;
};

LinkedList.prototype.addToTail = function(value) {
  if(this._head) {
    this._tail.next = new Node(value);
    this._tail = this._tail.next;
  } 
  else {
    this._head = this._tail = new Node(value);
  }
};