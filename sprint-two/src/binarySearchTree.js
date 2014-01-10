var BinarySearchTree = function(value){

  this.left  = null;
  this.right = null;
  this.value = value;

};

BinarySearchTree.prototype.insert = function(value) {
  if(this.value > value) {
    if(this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};
