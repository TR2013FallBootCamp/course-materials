/*
 Loops
 */

var outputString = '';
for (var i = 0; i < 4; i++) {
  outputString += 'added ' + i + ', ';
}
// console.log(outputString);
//output: "added 0, added 1, added 2, added 3, "


var counter = 0;

var logCount = function(count) {
  console.log('counter', count);
};

// console.log(logCount(12));

while(counter < 10) {
  setTimeout(logCount, 1000 * counter, counter);
  counter++;
}

var myArrayOfStrings = ['Hello', 'Boot', 'Camp', 'lovely', 'people'];

myArrayOfStrings = myArrayOfStrings.concat('we\'re', 'glad', 'to');

// console.log(myArrayOfStrings + ['have', 'you']);


var subArray = myArrayOfStrings.slice(0, 3);
subArray.push('!');
// subArray[subArray.length-1] += '!';
console.log(subArray.join(' '));

// Write a function to reverse a string.

/*
 Scope
 */

(function() {
  var awesome = 'This is cool';
  // awesome.join(' ');
})();


(function() {
  console.log(awesome);
})();
