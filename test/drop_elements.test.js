var assert = require('assert');
var algo   = require('../src/drop_it.js');

describe('Drop It', function() {
  describe('dropElements()', function() {

    it('should return [1, 2, 3]', function() {
      assert.equal(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3])
    });

    it('should return []', function() {
      assert.equal(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), []);
    });

    it('should return [7, 4]', function() {
      assert.equal(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4]);
    });

    it('should return [3, 9, 2]', function() {
      assert.equal(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2]);
    });

  });
});
