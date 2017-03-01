// TITLE: Reverse the String
// module.exports = function reverseString(str) {
// var reverseString = function(str) {
  // var strArray = str.split('');
  // return strArray.reverse().join('');
  
// }

// reverseString("hello");

function Algorithm() {
  this.title = 'Reverse the String';
  this.test = 'hello';
  this.reverseString = function(str) {
    var strArray = str.split('');
    var output = strArray.reverse().join('');
    console.log(output);
    return output;
  }
}

module.exports = new Algorithm();
