var HashTable = function(){
  this._limit = 8 ;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0;
};

HashTable.prototype.insert = function(k, v){
  if (++this._pairs >= (this._limit * 0.75)) {
    this.doubleHash();
  }  
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(i))) {  //OMG BUG!!! if (Array.isArray(this._storage[i])) {
    var arr = this._storage.get(i);
    for (var i = 0; i<arr.length; i++) {
      if (arr[i][0] === k) {
        //this._pairs--;
        arr[i][1] = v;
        return this._storage.set(arr);
      } 
    }
    arr.push([k, v]);
    this._storage.set(i, arr); // OMG BUG!  this._storage.set(arr); 
  } else { 
    this._storage.set(i, [[k, v]]);
  }
}; //When we do the doubleHash() we lose 1 item.

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if(arr) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[j][0] === k) {
        return arr[j][1];
      }
    }
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  // debugger;
  this._pairs--;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket) {
    for(var j = 0; j < bucket.length; j++) {
      if(bucket[j][0] === k) {
        bucket.splice(j, 1);
      }
    }
  }
  if(this._pairs <= this._limit * 0.25) {
    this.halveHash();
  }
};

HashTable.prototype.doubleHash = function() {
  var temp = [];
  this._storage.each(function(bucket) {
    if(bucket) {// added this line
      for (var key in bucket) {
        temp.push(bucket[key]);
      }
    }
  });

  this._limit *= 2;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0; // OMG ..... we didn't had this

  for (i = 0; i < temp.length; i++) {
    this.insert(temp[i][0], temp[i][1]);
  }
};

HashTable.prototype.halveHash = function() { 
  debugger;
  var temp = [];
  this._storage.each(function(bucket) {
    if(bucket) { // added this line 
      for (var key in bucket) {
        temp.push(bucket[key]);
      }
    }
  });

  this._limit /= 2;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0; // OMG ..... we didn't had this

  for (var i = 0; i < temp.length; i++) {
    this.insert(temp[i][0], temp[i][1]);
  }

};

