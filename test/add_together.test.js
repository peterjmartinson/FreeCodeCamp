var assert = require('assert');
var a      = require('../algorithms/add_together.js');

describe('Arguments Optional', function() {
  describe('it exists', function() {
    it('should be a function', function() {
      assert.equal(typeof a, 'object');
      assert.equal(typeof a.addTogether, 'function');
    });
  });
  describe('it returns values', function() {
    it('should return a number with two arguments', function() {
      assert.equal(typeof a.addTogether(1,1), 'number');
    });
    it('should return a function with one argument', function() {
      assert.equal(typeof a.addTogether(1), 'function');
    });
  });
  describe('it should pass all the tests', function() {
    it('should return 5', function() {
      assert.equal(a.addTogether(2, 3) ,5);
    });
    it('should return 5', function() {
      assert.equal(a.addTogether(2)(3) ,5);
    });
    it('should return undefined', function() {
      assert.equal(a.addTogether("http://bit.ly/IqT6zt") ,undefined);
    });
    it('should return undefined', function() {
      assert.equal(a.addTogether(2, "3") ,undefined);
    });
    it('should return undefined', function() {
      assert.equal(a.addTogether(2)([3]) ,undefined);
    });

  });
});
