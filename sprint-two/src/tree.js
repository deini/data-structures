var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
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
  if (this.children) {
    this.children.push(makeTree(value));
  }
  else {
    this.children = [makeTree(value)];
  }
};

treeMethods.contains = function(target){
  var found = false;
  var subroutine = function(node){

  }



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

