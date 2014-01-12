var Graph = function(){
  this.nodes = {};
  this.edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var keys = Object.keys(this.nodes);

  if (keys.length === 1) {
    this.addEdge(this.nodes[keys[0]], newNode);
  }
  this.nodes[newNode] = newNode;
};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false; 
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.edges[fromNode][toNode]) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.edges[fromNode]) {
    this.edges[fromNode] = {};
  }
  this.edges[fromNode][toNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
