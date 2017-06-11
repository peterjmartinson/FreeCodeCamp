var outs = {};

outs.addTogether = function() {
  if ( arguments.length == 2 && typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
    return arguments[0] + arguments[1];
  } else if ( arguments.length == 1 && typeof arguments[0] == 'number' ) {
    var first_arg = arguments[0];
    var addAnother = function(val) {
      if ( typeof val === 'number' ) {
        return first_arg + val;
      } else {
        return undefined;
      }
    }
    return addAnother;
  }
  return undefined;
}

  

module.exports = outs;
