var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._pairs = 0;
  this._bloom = Array.apply(null, new Array(18)).map(Number.prototype.valueOf,0);
};

HashTable.prototype.insert = function(k, v){
  this.insertToBloom(k);
  if (++this._pairs >= (this._limit * 0.75)) {
    this.reHash(this._limit * 2);
  }  

  var i = getIndexBelowMaxForKey(k, this._limit);

  if (Array.isArray(this._storage.get(i))) {
    var bucket = this._storage.get(i);
    var hash = this;

    each(bucket, function(item, index) {
      if (item[0] === k) {
        item[1] = v;
        return hash._storage.set(i, bucket);
      }
    });

    bucket.push([k, v]);
    this._storage.set(i, bucket); 
  } 
  else { 
    this._storage.set(i, [[k, v]]);
  }
}; 

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if(bucket) {
    var found = null;
    each(bucket, function(item, i) {
      if (item[0] === k) {
        found = item[1];
      } 
    });
    return found;
  } 
  else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  this._pairs--;

  if (bucket) {
    each(bucket, function(item, index) {
      if( item[0] === k ) {
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

  var hash = this;
  each(temp, function(item) {
    hash.insert(item[0], item[1]);
  });
};

HashTable.prototype.insertToBloom = function(key) {
  for(var j = 0; j < 3; j++) {
    this._bloom[murmurhash3_32_gc(key, j) % 18] = 1;
  }
};

HashTable.prototype.bloomPredict = function(key) {

  for(var j = 0; j < 3; j++) {
    if (this._bloom[murmurhash3_32_gc(key, j) % 18] === 0) {
      return false;
    }
  }
  return true;
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