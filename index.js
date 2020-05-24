// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const inputArr = [1,2,3,4,5];

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

console.log(recursiveReverse(inputArr));