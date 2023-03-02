// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var arry = [6, 7, 8, 9, 6, 9, 0, 7, 6, 8];
// find last repeated element in array.
let ans = -1;
for (let i = 0; i < arry.length; i++) {
  if (arry.lastIndexOf(arry[i]) !== i) {
    if (ans === -1 || arry.lastIndexOf(arry[i]) > ans) {
      ans = arry.lastIndexOf(arry[i]);
    }
  }
}
return arry[ans];

// Find frequency of elements
var obj = {};
for (var i = 0; i < arry.length; i++) {
  if (obj[arry[i]]) {
    obj[arry[i]] = obj[arry[i]] + 1;
  } else {
    obj[arry[i]] = 1;
  }
}
return obj;

// Find if they are duplicates
let obj1 = {};
for (let i = 0; i < arry.length; i++) {
  if (obj1[arry[i]]) {
    return true;
  } else {
    obj1[arry[i]] = 1;
  }
}
return false;

// Find the first repeated element
let obj2 = {};
for (let i = 0; i < arry.length; i++) {
  if (obj2[arry[i]]) {
    return arry[i];
  } else {
    obj2[arry[i]] = 1;
  }
}

// Find all the duplicate elements
let obj3 = {};
let repeatedArr = [];
for (let i = 0; i < arry.length; i++) {
  if (obj3[arry[i]]) {
    repeatedArr.push(arry[i]);
  } else {
    obj3[arry[i]] = 1;
  }
}
return repeatedArr;
// give unique elements without set
let uniqueArr = [];
for (let key in obj3) {
  if (obj3[key] === 1) uniqueArr.push(obj3[key]);
}
return uniqueArr;
// another way
uniqueArr = arry.map((i) => repeatedArr.indexOf(i) === -1);

// find all non repeated elements
let set = new Set(arry);
// if( arry.length - set.length !== 0) return 'repeated'
return Array.from(set);

// for (let key in obj) {
//   obj[key]
// }

// swap two nums
// example a =1, b=2 ans - a=2 b=1
let a = 1;
let b = 2;
let c = a;
a = b;
b = c;

// string reversal
let str = 'mythreyee';
let revStr = '';
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  revStr += str[i];
}
// doesnt work because strings are immutable.
let i = 0;
let j = str.length - 1;
while (i <= j) {
  str[i] = str[j];
  i++;
  j--;
}
return revStr;
// palendrome
let str1 = 'madam';
let i = 0;
let j = str1.length - 1;
while (i <= j) {
  if (str1[i] !== str1[j]) {
    return false;
  }
  i++;
  j--;
}
return true;
// madam - true ; naga - false

// fizzbuzz
// given array of n numbers - print fizz if i is divided by 3
// print buzz if i is divided by 5 print fizzbuzz if i is
// divided by 3 and 5
let given = [];
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('fizzbuzz');
  }
  if (i % 3 == 0) {
    console.log('Fizz');
  }
  if (i % 5 == 0) {
    console.log('Buzz');
  }
}

// closure example
const add = (num) => {
  let b = 5;
  return function () {
    return b * num;
  };
};
let closure1 = add(5);
let closure2 = add(6);
console.log(add(4)());
// multiple function
const mul = (x) => {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
};
// example add(1)(2)(3) - 6

// group an obj based on a property in the same obj
// example - group by age of given obj
// two sum problem - find pair.
const abc = () => {
  let gArr = [1, 2, 3, 4, 5, 4];
  let num = 7;
  let newArray = [];
  let ansObj = {};
  for (let i = 0; i <= gArr.length; i++) {
    if (!ansObj[gArr[i]]) {
      let reqIndex = gArr.indexOf(num - gArr[i]);
      if (reqIndex !== -1 && reqIndex !== i) {
        let temp = [];
        ansObj[gArr[i]] = true;
        ansObj[gArr[reqIndex]] = true;
        temp.push(gArr[i]);
        temp.push(gArr[reqIndex]);
        newArray.push(temp);
      }
    }
  }
  return newArray;
};
// find nth largest or smallest element
// find missing element in array of n elements
// change json objec according to given conditions.
