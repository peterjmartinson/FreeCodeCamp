var assert = require('assert');
var algo   = require('../algorithms/drop_it.js');

describe('Drop It', function() {
  describe('.steamrollArray(arr):', function() {

    it('`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` should return [3, 4]', function() {
      assert.deepEqual(algo.dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) , [3, 4])
    });

    it('`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` should return [1, 0, 1]', function() {
      assert.deepEqual(algo.dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1]);
    });

    it('`dropElements([1, 2, 3], function(n) {return n > 0;})` should return [1, 2, 3]', function() {
      assert.deepEqual(algo.dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3]);
    });

    it('`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` should return []', function() {
      assert.deepEqual(algo.dropElements([1, 2, 3, 4], function(n) {return n > 5;}), []);
    });

    it('`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` should return [7, 4]', function() {
      assert.deepEqual(algo.dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4]);
    });

    it('`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` should return [3, 9, 2]', function() {
      assert.deepEqual(algo.dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2]);
    });

  });
});
