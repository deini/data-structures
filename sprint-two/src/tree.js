var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  if (this.children) {
    this.children.push(child);
  } else {
    this.children = [child];
  }
};

treeMethods.removeFromParent = function() {

  // if parent is not null (truthy)
  // go to parent.children list and 
  // remove this from the list
  if (this.parent) {
    var kids = this.parent.children;
    for (var i = 0; i < kids.length; i++) {
      if (kids[i] === this) {
        this.parent.children.splice(i, 1);
      }
    }
    this.parent = null;
  }

  // set parent = null

};

treeMethods.contains = function(target){

  if(this.value === target) {
    return true;
  }
  if (this.children) {
    for (var i = 0; i < this.children.length; i++ ) {
      if (this.children[i].contains(target))
        return true;
    }
  }
  return false;
};

treeMethods.traverse = function(func) {
  func(this.value);
  if (this.children) {
    for (var i = 0; i < this.children.length; i++ ) {
      this.children[i].traverse(func);
    }
  }
};

// // BinarySearchTree.prototype.depthFirstLog = function(func) {
//   var results = [];

//   var recurse = function(node) {
//     if(node) {
//       results.push(func(node.value));
//       recurse(node.left);
//       recurse(node.right);
//     }
//   };

//   recurse(this);
//   return results;
// };

