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
  if (Array.isArray(this._storage.get(i))) {
    var arr = this._storage.get(i);
    for (var j = 0; j<arr.length; j++) {
      if (arr[j][0] === k) {
        arr[j][1] = v;
        return this._storage.set(i, arr);
      } 
    }
    arr.push([k, v]);
    this._storage.set(i, arr); 
  } else { 
    this._storage.set(i, [[k, v]]);
  }
  console.log("pairs inside = ", this._pairs);
}; 

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
  if(this._pairs < this._limit * 0.25) {
    this.halveHash();
  }
};

HashTable.prototype.doubleHash = function() {
  var temp = [];
  this._storage.each(function(bucket) {
    if(bucket) {
      for (var key in bucket) {
        temp.push(bucket[key]);
      }
    }
  });

  this._limit *= 2;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0; 

  for (i = 0; i < temp.length; i++) {
    this.insert(temp[i][0], temp[i][1]);
  }
};

HashTable.prototype.halveHash = function() { 
  var temp = [];
  this._storage.each(function(bucket) {
    if(bucket) {
      for (var key in bucket) {
        temp.push(bucket[key]);
      }
    }
  });

  this._limit /= 2;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0;

  for (var i = 0; i < temp.length; i++) {
    this.insert(temp[i][0], temp[i][1]);
  }

};

