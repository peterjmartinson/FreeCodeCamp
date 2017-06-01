var assert = require('assert');
var ba     = require('../algorithms/binary_agents.js');

describe('Binary Agents', function() {

  describe('binaryToDecimal()', function() {
    it('should return a number', function() {
      assert.equal(typeof ba.binaryToDecimal, 'function');
    });

    it('00000000 -> 0', function() {
      assert.equal(ba.binaryToDecimal('00000000'), 0);
    });

    it('00000001 -> 1', function() {
      assert.equal(ba.binaryToDecimal('00000001'), 1);
    });

    it('00000010 -> 2', function() {
      assert.equal(ba.binaryToDecimal('00000010'), 2);
    });
  });

  describe('binaryAgent()', function() {
    it('should have a binaryAgent method', function() {
      assert.equal(typeof ba, 'object');
      assert.equal(typeof ba.binaryAgent, 'function');
    });
    it('should return a string', function() {
      var str = 'Hello';
      var str_2 = '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111';
      assert.equal(typeof ba.binaryAgent(str), 'string');
      assert.equal(typeof ba.binaryAgent(str_2), 'string');
    });
  });

  describe('Final Tests', function() {
    it("should say:  Aren't bonfires fun!?", function() {
      var input  = '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111';
      var output = "Aren't bonfires fun!?";
      assert.equal(ba.binaryAgent(input), output);
    });
    it('should say:  I love FreeCodeCamp!', function() {
      var input  = '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001';
      var output = 'I love FreeCodeCamp!';
      assert.equal(ba.binaryAgent(input), output);
    });
  });

});

