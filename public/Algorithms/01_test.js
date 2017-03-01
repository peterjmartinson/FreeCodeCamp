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
    console.log(strArray.reverse().join(''));
    return strArray.reverse().join('');
  }
}

module.exports = new Algorithm();
