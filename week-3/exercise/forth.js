/*
 Loops
 */

var outputString = '';
for (var i = 0; i < 4; i++) {
  outputString = outputString + 'added ' + i + ', ';
}
// alert(outputString);
//output: "added 0, added 1, added 2, added 3, "


var counter = 0;

var logCount = function(count) {
  console.log('counter ', count, counter);
};

console.log(logCount());

while(counter < 10) {
  var delay = 1000 * counter;
  // setTimeout(logCount, delay, counter);
  counter++;
  // console.log('counter ', counter);
}

var myArrayOfStrings = ['Hello', 'Boot', 'Camp', 'lovely', 'people'];

myArrayOfStrings = myArrayOfStrings.concat('we\'re', 'glad', 'to');

// console.log(myArrayOfStrings.join(','), myArrayOfStrings.toString());

console.log(myArrayOfStrings.concat('have', 'you'));


var subArray = myArrayOfStrings.slice(0, 3);
subArray.push('!');
// subArray[subArray.length] += '!';
// var myNewArray = ['One'];

console.log(subArray);

// // Write a function to reverse a string.

// /*
//  Scope
//  */

(function() {
  var awesome = 'This is cool';
  // awesome.join(' ');
})();


(function() {
  console.log('hello');
})();
