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

BinarySearchTree.prototype.contains = function(target) {
  if(this.value === target) {
    return true;
  }

  if(this.value > target) {
    if(this.left) {
      if(this.left.contains(target)) {
        return true;
      }
    }
  } else {
    if(this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    } 
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  var results = [];

  var recurse = function(node) {
    if(node) {
      results.push(func(node.value));
      recurse(node.left);
      recurse(node.right);
    }
  };

  recurse(this);
  return results;
};
