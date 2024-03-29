var Graph = function(){
  this.nodes = {};
  this.edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){

  if(toNode) {
    this.addEdge(newNode, toNode);
  }
  else {
    var keys = Object.keys(this.nodes);
    if (keys.length === 1) {
      this.addEdge(this.nodes[keys[0]], newNode);
    }  
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
  if (this.edges[fromNode] && this.edges[fromNode][toNode]) {
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
  var removeEdgelessNodes = function(graph, node) {
    var exists = false;
    
    for(var keys in graph.edges) {
      if(graph.getEdge(keys, node)) {
        exists = true;
      }
    }
    if(!exists) {
      graph.removeNode(node);
    }
  };

  delete this.edges[fromNode][toNode];

  if(Object.keys(this.edges[fromNode]).length === 0) {
    delete this.edges[fromNode];
    removeEdgelessNodes(this, fromNode);
  }

  if(!this.edges[toNode]) {
    removeEdgelessNodes(this, toNode);
  }
};