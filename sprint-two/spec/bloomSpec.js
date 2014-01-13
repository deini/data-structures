var expect = chai.expect;

describe("Bloom Filter", function() {

  it("Should have an aproximate empirical rate of false-positives", function() {
    var hashTable = new HashTable();
    hashTable.insert("a", "A");
    hashTable.insert("b", "B");
    hashTable.insert("c", "C");
    hashTable.insert("d", "D");

    var falsies = 0;
    var positives = 0;
    var truthies = 0;

    for (var i = 0; i < 10000; i++){
      var random = (Math.random() * 200) | 0; 
      if(random >= 97 && random <= 100) {
        positives++;
      }
      if(hashTable.bloomPredict(String.fromCharCode(random))) {
        truthies++;
      }
      else {
        falsies++;
      }
    }
    console.log("False Positives = ", (truthies-positives));
    expect((truthies-positives) < 1600).to.equal(true);
  });
});
