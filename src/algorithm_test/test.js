QUnit.module('tests');

test( "basic_test says hello", function( assert ) {
  assert.equal(basic_test(), "");
  assert.equal(basic_test(), "Hello World");
});


