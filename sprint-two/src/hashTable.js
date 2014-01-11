var HashTable = function(){
  this._limit = 8 ;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0;
};

HashTable.prototype.insert = function(k, v){
  if (++this._pairs >= (this._limit * 0.75)) {
    this.reHash(this._limit * 2);
  }  
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(i))) {
    var arr = this._storage.get(i);

    var temp = this;
    $.each(arr, function(index) {
      if (this[0] === k) {
        this[1] = v;
        return temp._storage.set(i, arr);
      }
    });
    arr.push([k, v]);
    this._storage.set(i, arr); 
  } else { 
    this._storage.set(i, [[k, v]]);
  }
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
    $.each(bucket, function(index) {
      if( this[0] === k ) {
        bucket.splice(index, 1);
      }
    });
  }
  if(this._pairs < this._limit * 0.25) {
    this.reHash(this._limit / 2);
  }
};

HashTable.prototype.reHash = function(newLimit) { 
  var temp = [];
  this._storage.each(function(bucket) {
    if(bucket) {
      each(bucket, function(item){
        temp.push(item);
      });
    }
  });

  this._limit = newLimit;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0;

  // for (var i = 0; i < temp.length; i++) {
  //   this.insert(temp[i][0], temp[i][1]);
  // }
  // each(temp, function(item) {
  //   this.insert(item[0], item[1]);
  // });
};

var each = function(collection, iterator) {
  if(Array.isArray(collection)) {
    for(var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for(var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};