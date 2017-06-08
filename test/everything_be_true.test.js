var assert = require('assert');
var a      = require('../algorithms/everything_be_true.js');

describe('Everything Be True', function() {
  it('should exist', function() {
    assert.equal(typeof a.truthCheck, 'function');
    assert.equal(typeof a.truthCheck(), 'boolean');
  });

  it('should return true.', function() {
    assert.equal(a.truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true);
  });

  it('should return false.', function() {
    assert.equal(a.truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false);
  });

  it('should return false.', function() {
    assert.equal(a.truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false);
  });

  it('should return false', function() {
    assert.equal(a.truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"), false);
  });

  it('should return true', function() {
    assert.equal(a.truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"), true);
  });

  it('should return true', function() {
    assert.equal(a.truthCheck([{"single": "yes"}], "single"), true);
  });

  it('should return false', function() {
    assert.equal(a.truthCheck([{"single": ""}, {"single": "double"}], "single"), false);
  });

  it('should return false', function() {
    assert.equal(a.truthCheck([{"single": "double"}, {"single": undefined}], "single"), false);
  });

  it('should return false', function() {
    assert.equal(a.truthCheck([{"single": "double"}, {"single": NaN}], "single"), false);
  });

});

