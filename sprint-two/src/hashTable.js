var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[i])) {
    var arr = this._storage.get(i);
    arr.push([k, v]);
    this._storage.set(arr);
  } else { 
    this._storage.set(i, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if(arr && arr.length > 0) {
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
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for(var j = 0; j < bucket.length; j++) {
    if(bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }
};

