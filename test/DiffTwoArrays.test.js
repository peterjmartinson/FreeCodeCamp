var assert = require('assert');
var A      = require('../algorithms/DiffTwoArrays.js');

describe('Diff Two Arrays', function() {

  it('should have a diffArray method', function() {
    assert.equal(typeof A, 'object');
    assert.equal(typeof A.diffArray, 'function');
  });

	it('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]', function() {
    assert.deepEqual(A.diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
  });

});
