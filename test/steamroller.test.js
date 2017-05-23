var assert = require('assert');
var A      = require('../algorithms/steamroller.js');

describe('Steamroller', function() {
  it('should have a steamrollArray method', function() {
    assert.equal(typeof A, 'object');
    assert.equal(typeof A.steamrollArray, 'function');
  });

  it('should return an array', function() {
    assert.deepEqual(A.steamrollArray([]), []);
  });

  it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]', function() {
    assert.deepEqual(A.steamrollArray([[['a']], [['b']]]), ['a', 'b']);
  });

  it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]', function() {
    assert.deepEqual(A.steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
  });

  it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]', function() {
    assert.deepEqual(A.steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
  });

  it('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]', function() {
    assert.deepEqual(A.steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
  });

});


