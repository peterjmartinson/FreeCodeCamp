var out = {};

out.truthCheck = function(collection, pre) {
  if(collection) {
    for (let i = 0; i < collection.length; i++) {
      var obj = collection[i];
      var flag = 0;
      for ( var key in obj) {
        if ( key == pre && obj[key]) {
          flag = 1;
        }
      }
      if ( !flag ) {
        return false
      }
    }
  }
  return true;
}

module.exports = out;


