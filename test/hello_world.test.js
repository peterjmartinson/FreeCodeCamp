var assert = require('assert');
var algo   = require('../src/algorithm_test/algorithm_test.js');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('basic_test()', function() {
  it('should return "Hello World"', function() {
    assert.equal(algo.basic_test(), "Hello World");
  });
});
