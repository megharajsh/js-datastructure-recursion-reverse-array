// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Datastructure | Recursion - Reverse Array</h1><hr>`;

const inputArr = [1,2,3,4,5];
appDiv.innerHTML += `<br><br>Input Array: ${inputArr}`;

var recursiveReverse = function(arr) {
  let reversedArr = [];

  var addIems = function(orderedArr) {
    if (orderedArr.length > 0) {
      reversedArr.push(orderedArr.pop());
      addIems(orderedArr);
    }
    return;
  }
  addIems(arr);
  return reversedArr;
}

const outputArr = recursiveReverse(inputArr);
appDiv.innerHTML += `<br><br>Output Array: ${outputArr}`;
console.log();