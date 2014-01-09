var Stack = function(){

  this.storage = {};
  this.thesize = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.thesize] = value;
  this.thesize++;
};

Stack.prototype.pop = function() {
  if (this.thesize) {
    this.thesize--;
    var result = this.storage[this.thesize];
    delete this.storage[this.thesize];
  }
  return result;
};

Stack.prototype.size = function() {
  return this.thesize;
};

var MyStack = new Stack();