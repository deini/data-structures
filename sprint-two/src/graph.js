var Graph = function(){
  this.nodes = {};
  this.edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes[newNode] = newNode;
};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false; 
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
