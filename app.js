var output = document.getElementById('output');
// function reverseString(str: string) {
//   // return str.split('').reverse().join('');
//   let revString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString += str[i];
//   }
//   return revString;
// } can even do opposite
// ES6 for (let char of str) rev string = char + revString
// or even str.split.foreach(char => revString = char + revString)
// function isPaldinrome(str: string) {
//   // return str.split('').reverse().join('') === str;
//   var revString = '';
//   str.split('').forEach((char) => (revString = char + revString));
//   return revString === str;
// }
// const result = isPaldinrome('racecars');
// function reverseInt(int) {
//   const revString = int.toString().split('').reverse().join('');
//   return parseInt(revString);
// }
// const result = reverseInt(123456);
// function capLetters(str: string) {
//   // const strArr = str.toLowerCase().split(' ');
//   // for (let i = 0; i < strArr.length; i++) {
//   //   strArr[i] =
//   //     strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   // }
//   // return strArr.join(' ');
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.substring(1))
//     .join(' ');
// }
// const result = capLetters('hi there, i like you aliot.');
// function maxCharacters(str) {
//   let charMap = {};
//   let maxNum: number = 0;
//   let maxChar: string = '';
//   str.split('').forEach((char) => {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
// const result = maxCharacters('javascript');
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('fizzBuzz');
//     } else if (i % 3 == 0) {
//       console.log('fizz');
//     } else if (i % 5 == 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// console.log(fizzBuzz());
// var longestWord = (str) => {
//   let strArr = str.split(' ');
//   let longestWordString = '';
//   let multipleLongWord = [];
//   const sorted = strArr.sort((a, b) => b.length - a.length);
//   const longestWordArr = sorted.filter(
//     (word) => word.length === sorted[0].length
//   );
//   return longestWordArr;
// };
// const result = longestWord('I like four poops that like butts');
// function chunkArray(arr, leng) {
//   let chunked = [];
//   let i = 0;
//   while (i < arr.length) {
//     chunked.push(arr.slice(i, i + leng));
//     i += leng;
//   }
//   return chunked;
// }
// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// function flattenArray(arrays) {
//   // return arrays.reduce((a, b) => a.concat(b));
//   return [].concat(...arrays);
// }
// console.log(flattenArray(([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])));
// function isAnagram(str1, str2) {
//   return formatStr(str1) === formatStr(str2);
// }
// function formatStr(str) {
//   //Can use replace with reg ex to get rid of spaces, numbers,commas
//   return str.toLowerCase().split('').sort().join('');
// }
// const result = isAnagram('dormitorY', 'dirtyroom');
// //shifts letter in string to right
// function letterChanges(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'z') {
//       result += 'a';
//     } else if (str[i] === 'Z') {
//       result += 'A';
//     } else if (str[i] === ' ') {
//       result += ' ';
//     } else {
//       result += String.fromCharCode(str.charCodeAt(i) + 1);
//     }
//   }
//   return result;
// }
// //find missing letter from alphabet and returns innerHTML
// function fearNotLetter(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let missingLetter = '';
//   let strArr = str.split('');
//   let alphabetArr = alphabet.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] !== alphabetArr[i]) {
//       missingLetter = alphabetArr[i];
//     }
//   }
//   return missingLetter;
// }
// ----- practice **************
// function reverseString(str) {
//   // return str.split('').reverse().join('');
//   let revString = [];
//   // for (let char of str) {
//   //   revString = char + revString;
//   // }
//   str.split('').forEach((char) => (revString = char + revString));
//   // for (let i = 0; i < str.length; i++) {
//   //   revString = str[i] + revString;
//   // }
//   return revString;
// }
// function isPalidnrome(str) {
//   return str.toLowerCase().split('').reverse().join('') == str.toLowerCase();
// }
// function reverseInt(int) {
//   const revInt = int.toString().split('').reverse().join('');
//   return parseInt(revInt);
// }
// function capitalizeLetter(str) {
//   let strSplit = str.split(' ');
//   for (i = 0; i < strSplit.length; i++) {
//     strSplit[i] =
//       strSplit[i].substring(0, 1).toUpperCase() + strSplit[i].substring(1);
//   }
//   return strSplit.join(' ');
// }
// function maxCharacter(str) {
//   let charMap = {};
//   let maxNum = 0;
//   let maxChar = '';
//   str.split('').forEach((char) => {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar + maxNum;
// }
// console.log(maxCharacter('javascript'));
// console.log('yo');
// function fizzBuzzer(int) {
//   for (let i = 1; i < int; i++) {
//     if (i % 15 === 0) {
//       console.log(i, 'fizzbuzz');
//     }
//     if (i % 3 === 0) {
//       console.log(i, 'fizz');
//     }
//     if (i % 2 === 0) {
//       console.log(i, 'buzz');
//     } else console.log(i);
//   }
// }
// function longestWord(sen) {
//   let splitedSen = sen.toLowerCase().split(' ');
//   let longestWord = '';
//   const sorted = splitedSen.sort((a, b) => b.length - a.length);
//   const longestWordArr = sorted.filter(
//     (word) => word.length === sorted[0].length
//   );
//   return longestWordArr;
// }
// function arrayChunking(arr, leng) {
//   let chunked = [];
//   let i = 0;
//   while (i < arr.length) {
//     chunked.push(arr.slice(i, i + leng));
//     i += leng;
//   }
//   return chunked;
// }
// console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 2));
// function flattenArray(...arr) {
//   return arr.reduce((a, b) => a.concat(b));
//   // return [].concat(..arr);
// }
// function isAnagram(str1, str2) {
//   function formatStr(str) {
//     return str.toLowerCase().split('').sort().join('');
//   }
//   console.log(formatStr(str2));
//   console.log(formatStr(str1));
//   return formatStr(str1) == formatStr(str2);
// }
// function letterShifter(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'z') {
//       newStr += 'a';
//     } else if (str[i] === 'Z') {
//       newStr += 'A';
//     } else if (str[i] === ' ') {
//       newStr += ' ';
//     } else {
//       newStr += String.fromCharCode(str.charCodeAt(i) + 1);
//     }
//   }
//   return newStr;
// }
// function capitalizeLetter(str) {
//   let newString = [];
//   let strSplit = str.split(' ');
//   for (let i = 0; i < strSplit.length; i++) {
//     newString.push(
//       strSplit[i].substring(0, 1).toUpperCase() + strSplit[i].substring(1)
//     );
//   }
//   return newString.join();
// }
// function longestWord(str) {
//   let splitStr = str.split(' ');
//   let longestWord = '';
//   let sortArr = splitStr.sort((a, b) => b.length - a.length);
//   if (sortArr[0].length > sortArr[1].length) {
//     return sortArr[0];
//   } else {
//     return sortArr.filter((word) => word.length === sortArr[0].length);
//   }
// }
// function arrayChunk(arr, len) {
//   let newArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     newArr.push(arr.slice(i, len + i));
//     i += len;
//   }
//   return newArr;
// }
// function flattenArray(...arr) {
//   return arr.reduce((a, b) => a.concat(b));
// }
// console.log(flattenArray([1, 2, 3], [4, 5], [6]));
// const result = flattenArray([1, 2, 3], [4, 5], [6]);
// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }
// function addUpTo(n) {
//   let total = 0;
//   for (i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// const result = addUpTo(200000);
// function charCount(string) {
//   let charMap = {};
//   let filteredString = string.toLowerCase().split('');
//   var letters = /^[A-Za-z]+$/;
//   // or for (var char of str)
//   filteredString.filter((char) => char.match(letters)).forEach((character) => {
//       charMap[character] = ++charMap[character] || 1;
//   }
//   return charMap;
// }
// function same(arr1, arr2) {
//   let isPossible = true;
//   if (arr1.length !== arr2.length) {
//     isPossible = false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       isPossible = false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return isPossible;
// }
// function same(arr1, arr2) {
//   let array1map = {};
//   let array2map = {};
//   for (let val of arr1) {
//     array1map[val] = ++array1map[val] || 1;
//   }
//   for (let val of arr2) {
//     array2map[val] = ++array2map[val] || 1;
//   }
//   for (let key in array1map) {
//     if (!(key ** 2 in array2map)) {
//       return false;
//     }
//     if (array2map[key ** 2] !== array1map[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// const result = same([1, 2, 3, 2, 5], [1, 4, 25, 4, 9]);
// function validAnagram(word1, word2) {
//   let word1Map = {};
//   let word2Map = {};
//   if (word1.length !== word2.length) {
//     return false;
//   }
//   for (let letter of word1) {
//     word1Map[letter] = ++word1Map[letter] || 1;
//   }
//   for (let letter of word2) {
//     word2Map[letter] = ++word2Map[letter] || 1;
//   }
//   for (let char in word1Map) {
//     console.log(char);
//     if (!(char in word2Map)) {
//       return false;
//     }
//     if (word1Map[char] !== word2Map[char]) {
//       return false;
//     }
//   }
//   return true;
// } const result = validAnagram('apple', 'appel');
// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [[arr[left]], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }
// function countUniqueValues(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   var i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       j++;
//     }
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }
// function maxSubarraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }
// function isSecondArraySquared(arr1, arr2) {
//   let arr1Obj = {};
//   let arr2Obj = {};
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let val of arr1) {
//     arr1Obj[val] = ++arr1Obj[val] || 1;
//   }
//   for (let val of arr2) {
//     arr2Obj[val] = ++arr2Obj[val] || 1;
//   }
//   for (let val in arr1Obj) {
//     if (!(val ** 2 in arr2Obj)) {
//       return false;
//     }
//     if (arr2Obj[val ** 2] !== arr1Obj[val]) {
//       return false;
//     }
//   }
//   return true;
// }
// function uniqueValues(arr1) {
//   let i = 0;
//   for (let j = 1; j < arr1.length; j++) {
//     if (arr1[i] === arr1[j]) {
//       j++;
//     }
//     if (arr1[i] !== arr1[j]) {
//       i++;
//       arr1[i] = arr1[j];
//     }
//   }
//   return i + 1;
// }
// function maxSubArraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (num > arr.length) {
//     return null;
//   }
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }
// function findLongestSubstring(arr) {
//   let maxSum = 0;
//   let tempSum = 0;
//   let obj3 = {};
//   if (arr.length == 0) {
//     return 0;
//   }
//   let arrF = arr.split('');
//   for (let i = 0; i < arrF.length; i++) {
//     if (obj3[i] > 1) {
//       tempSum = 0;
//     }
//     tempSum++;
//     obj3[i] = ++obj3[i] || 1;
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum + 1;
// }
// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }
// function collectOddValues(arr) {
//   let result = [];
//   function helper(helperArr) {
//     //the base case that gets us out of the loop
//     if (helperArr.length === 0) {
//       return;
//     }
//     if (helperArr[0] % 2 !== 0) {
//       result.push(helperArr[0]);
//     }
//     helper(helperArr.slice(1));
//   }
//   helper(arr);
//   return result;
// }
// function power(base, expo) {
//   if (expo === 0) {
//     return 1;
//   }
//   return base * power(base, expo - 1);
// }
// function factorial(arr) {
//   if (arr === 0) {
//     return 1;
//   }
//   return arr * factorial(arr - 1);
// }
// function productOfArray(arr) {
//   console.log(arr.slice(1));
//   if (arr.length === 0) {
//     return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }
// function recursiveRange(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + recursiveRange(num - 1);
// }
// function sameFrequency(int1, int2) {
//   let obj1 = {};
//   let obj2 = {};
//   if (int1.length !== int2.length) {
//     return false;
//   }
//   int1
//     .toString()
//     .split('')
//     .forEach((num) => {
//       obj1[num] = ++obj1[num] || 1;
//     });
//   int2
//     .toString()
//     .split('')
//     .forEach((num) => {
//       obj2[num] = ++obj2[num] || 1;
//     });
//   for (let key in obj1) {
//     if (!(key in obj2)) {
//       return false;
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// function areThereDuplicates(...args) {
//   let arrObj = {};
//   args.forEach((arg) => {
//     arrObj[arg] = ++arrObj[arg] || 1;
//   });
//   for (let value in arrObj) {
//     if (arrObj[value] > 1) {
//       return true;
//     }
//   }
//   return true;
// }
// function reverse(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + recursiveRange(num - 1);
// }
// function linearSearch(arr, search) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === search) return i;
//   }
//   return -1;
// }
// function binarySearch(arr, search) {
//   let leftStart = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((leftStart + end) / 2);
//   while (arr[middle] !== search && leftStart <= end) {
//     if (search < arr[middle]) end = middle - 1;
//     else leftStart = middle + 1;
//     middle = Math.floor((leftStart + end) / 2);
//   }
//   return arr[middle] === search ? middle : -1;
// }
// function sameFrequency(int1, int2) {
//   let int1Map = {};
//   let int2Map = {};
//   if (int1.length !== int2.length) return false;
//   let splitInt1 = int1.toString().split('');
//   let splitInt2 = int2.toString().split('');
//   for (let value of splitInt1) {
//     int1Map[value] = ++int1Map[value] || 1;
//   }
//   for (let value of splitInt2) {
//     int2Map[value] = ++int2Map[value] || 1;
//   }
//   for (let key in int1Map) {
//     if (!(key in int2Map)) return false;
//     if (int1Map[key] !== int2Map[key]) return false;
//   }
//   return true;
// }
// function averagePair(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;
//   if (arr.length === 0) return false;
//   while (start < end) {
//     let avg = arr[start] + arr[end] / 2;
//     if (avg === num) return true;
//     if (avg > num) {
//       end--;
//     }
//     if (avg < num) {
//       start++;
//     }
//   }
//   return false;
// }
// function maxSubarraySum(arr, num) {
//   let maxSum = 0;
//   if (num > arr.length) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   let tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum + arr[i] - arr[i - num];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }
// function swap(arr, idx1) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx1 + 1];
//   arr[idx1 + 1] = temp;
// }
// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     let noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j);
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//       var temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//     return arr;
//   }
// }
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//       console.log(arr);
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
// function areThereDuplicates(...args) {
//   let arrObj = {};
//   args.forEach((arg) => {
//     arrObj[arg] = ++arrObj[arg] || 1;
//   });
//   for (let key in arrObj) {
//     if (arrObj[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }
// function areThereDuplicates(...args) {
//   return args.sort((a, b) => a - b);
// }
// function pivot(arr, start = 0, end = arr.length + 1) {
//   let pivot = arr[start];
//   var swapIndex = start;
//   function swap(array, i, j) {
//     var temp = arr[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       swapIndex++;
//       swap(arr, swapIndex, i);
//     }
//   }
//   swap(arr, start, swapIndex);
//   return swapIndex;
// }
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }
// var sortedSquares = function (nums) {
//   let arr = nums.map((num) => num * num);
//   return arr.sort((a, b) => a - b);
// };
//returning new array
// var rotate = function (nums, k) {
//   let newArr = [];
//   let count = 0;
//   let end = nums.length;
//   for (let i = end - k; count <= nums.length - 1; i++) {
//     if (i == nums.length) {
//       i = 0;
//     }
//     newArr.push(nums[i]);
//     count++;
//   }
//   return newArr;
// };
// var strStr = function (haystack, needle) {
//   let j = 0;
//   if (needle.length === 0) return 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (
//       haystack.length === 1 &&
//       needle.length === 1 &&
//       haystack[i] === needle[j]
//     ) {
//       console.log('kk');
//       return 0;
//     }
//     if (j == needle.length) {
//       return i - needle.length;
//     }
//     if (haystack[i] === needle[j]) {
//       j++;
//     } else if (haystack[i] !== needle[j] && j > 0) {
//       j = 0;
//       i++;
//     } else {
//       i++;
//     }
//   }
//   return -1;
// };
// class Node<T> {
//   value: T;
//   next: null;
//   constructor(val: T) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class SinglyLinkedList<T> {
//   head: Node<T> | null;
//   tail: Node<T> | null;
//   length: number;
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val: T): boolean {
//     var newNode = new Node<T>(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     var current = this.head;
//     var newTail = current;
//     if (!this.head) {
//       return undefined;
//     }
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length == 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   shift() {
//     if (!this.head) return undefined;
//     if (this.length == 0) {
//       this.tail = null;
//     }
//     var currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     return currentHead;
//   }
//   unshift(val) {
//     var newNode = new Node<T>(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     let count = 0;
//     let current = this.head;
//     if (index < 0 || index >= this.length) return null;
//     while (count !== index) {
//       current = current.next;
//       count++;
//     }
//     return current;
//   }
//   set(index, value) {
//     let currentFoundNote = this.get(index);
//     if (currentFoundNote) {
//       currentFoundNote.val = value;
//       return true;
//     }
//     return false;
//   }
//   insert(index, value) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return !!this.push(value);
//     if (index === 0) return !!this.unshift(value);
//     var prev = this.get(index - 1);
//     var newNode = new Node(value);
//     var temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return null;
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) return this.shift();
//     var prevNode = this.get(index - 1);
//     var removed = prevNode.next;
//     prevNode.next = removed.next;
//     this.length--;
//     return removed;
//   }
//   print() {
//     var arr = [];
//     var current = this.head;
//     while (current) {
//       arr.push(current.val);
//       current = current.next;
//     }
//     console.log(arr);
//   }
//   reverse() {
//     var node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     var prev = null;
//     var next;
//     for (var i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
// }
// var moveZeroes = function (nums) {
//   let i = 0;
//   let pointer = 0;
//   while (i < nums.length) {
//     if (nums[pointer] === 0) {
//       nums.splice(pointer, 1);
//       nums.push(0);
//     } else pointer++;
//     i++;
//   }
//   return nums;
// };
// var twoSum = function (numbers, target) {
//   let j = numbers.length - 1;
//   let i = 0;
//   let solution = [];
//   while (i !== j) {
//     let added = numbers[i] + numbers[j];
//     console.log(added);
//     if (added > target) {
//       j--;
//     } else if (added < target) {
//       i++;
//     }
//     if (added === target) {
//       solution.push(i + 1);
//       solution.push(j + 1);
//       return solution;
//     }
//   }
//   return [];
// };
// var list = new SinglyLinkedList();
// list.push(100);
// list.push(201);
// list.push(250);
// list.push(350);
// list.push(999);
// let t1 = performance.now();
// console.log(list.print());
// list.reverse();
// var reverseString = function (s) {
//   let j = s.length;
//   let i = -1;
//   while ( i++ < j--) [s[i], s[j]] = [s[j], s[i]]
// };
// var reverseWords = function (s) {
//   let result = '';
//   let word = '';
//   for (let i = 0; i < s.length; i++) {
//     let val = s[i];
//     if (val !== ' ') {
//       word = s[i] + word;
//     } else {
//       result += word + val;
//       word = '';
//     }
//   }
//   return (result += word);
// };
//doubly linked stuff  =================================================================================
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val) {
//     var newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       var temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }
//   pop() {
//     if (!this.first) return null;
//     var temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
// //     this.size;
// //   }
// //   enqueue(val) {
// //     var newNode = new Node(val);
// //     if (!this.first) {
// //       this.first = newNode;
// //       this.last = newNode;
// //     } else {
// //       this.last.next = newNode;
// //       this.last = newNode;
// //     }
// //     return ++size;
// //   }
// //   dequeue() {
// //     if (!this.first) return null;
// //     var temp = this.first;
// //     if (this.first === this.last) {
// //       this.last = null;
// //     }
// //     this.first = this.first.next;
// //     this.size--;
// //     return temp.value;
// //   }
// // }
// var Node = /** @class */ (function () {
//   function Node(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
//   return Node;
// })();
// var BinarySearchTree = /** @class */ (function () {
//   function BinarySearchTree() {
//     this.root = null;
//   }
//   BinarySearchTree.prototype.insert = function (value) {
//     var newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       var current = this.root;
//       while (true) {
//         if (value === current.value) return undefined;
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = newNode;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = newNode;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   };
//   BinarySearchTree.prototype.find = function (value) {
//     if (this.root === null) return false;
//     var current = this.root;
//     var found = false;
//     while (current && !found) {
//       if (value < current.value) {
//         current = current.left;
//       } else if (value > current.value) {
//         current = current.right;
//       } else {
//         return current;
//       }
//     }
//     return false;
//   };
//   BinarySearchTree.prototype.BFS = function () {
//     var data = [];
//     var queue = [];
//     var node = this.root;
//     queue.push(this.root);
//     while (queue.length) {
//       node = queue.shift();
//       data.push(node);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return data;
//   };
//   BinarySearchTree.prototype.DFS = function () {
//     var data = [];
//     var current = this.root;
//     function traverse(node) {
//       data.push(node);
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//     }
//     traverse(current);
//     return data;
//   };
//   BinarySearchTree.prototype.DFSPostorder = function () {
//     var data = [];
//     var current = this.root;
//     function traverse(node) {
//       data.push(node.value);
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//     }
//     traverse(current);
//     return data;
//   };
//   BinarySearchTree.prototype.DFSInorder = function () {
//     var data = [];
//     var current = this.root;
//     function traverse(node) {
//       node.left && traverse(node.left);
//       data.push(node.value);
//       node.right && traverse(node.right);
//     }
//     traverse(current);
//     return data;
//   };
//   return BinarySearchTree;
// })();
// var MaxBinaryHeap = /** @class */ (function () {
//   function MaxBinaryHeap() {
//     this.values = [41, 39, 33, 18, 27, 12];
//   }
//   MaxBinaryHeap.prototype.insert = function (element) {
//     this.values.push(element);
//     this.bubbleUp();
//   };
//   MaxBinaryHeap.prototype.bubbleUp = function () {
//     var idx = this.values.length - 1;
//     var element = this.values[idx];
//     while (idx > 0) {
//       var parentIdx = Math.floor((idx - 1) / 2);
//       var parent_1 = this.values[parentIdx];
//       if (element <= parent_1) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent_1;
//       idx = parentIdx;
//     }
//   };
//   MaxBinaryHeap.prototype.extractMax = function () {
//     var max = this.values[0];
//     var end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return max;
//   };
//   MaxBinaryHeap.prototype.sinkDown = function () {
//     var idx = 0;
//     var length = this.values.length;
//     var element = this.values[0];
//     while (true) {
//       var leftChildIdx = 2 * idx + 1;
//       var rightChildIdx = 2 * idx + 2;
//       var leftChild = void 0,
//         rightChild = void 0;
//       var swap = null;
//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild > element) {
//           swap = leftChildIdx;
//         }
//       }
//       if (rightChildIdx < length) {
//         rightChild = this.values[rightChildIdx];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && rightChild > leftChild)
//         ) {
//           swap = rightChildIdx;
//         }
//       }
//       if (swap === null) break;
//       this.values[idx] = this.values[swap];
//       this.values[swap] = element;
//       idx = swap;
//     }
//   };
//   return MaxBinaryHeap;
// })();
// var PNode = /** @class */ (function () {
//   function PNode(val, priority) {
//     this.val = val;
//     this.priority = priority;
//   }
//   return PNode;
// })();
// var PriorityQueueHeap = /** @class */ (function () {
//   function PriorityQueueHeap() {
//     this.values = [];
//   }
//   PriorityQueueHeap.prototype.enqueue = function (val, priority) {
//     var newNode = new PNode(val, priority);
//     this.values.push(newNode);
//     this.bubbleUp();
//   };
//   PriorityQueueHeap.prototype.bubbleUp = function () {
//     var idx = this.values.length - 1;
//     var element = this.values[idx];
//     while (idx > 0) {
//       var parentIdx = Math.floor((idx - 1) / 2);
//       var parent_2 = this.values[parentIdx];
//       if (element.priority >= parent_2.priority) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent_2;
//       idx = parentIdx;
//     }
//   };
//   PriorityQueueHeap.prototype.dequeue = function () {
//     var min = this.values[0];
//     var end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return min;
//   };
//   PriorityQueueHeap.prototype.sinkDown = function () {
//     var idx = 0;
//     var length = this.values.length;
//     var element = this.values[0];
//     while (true) {
//       var leftChildIdx = 2 * idx + 1;
//       var rightChildIdx = 2 * idx + 2;
//       var leftChild = void 0,
//         rightChild = void 0;
//       var swap = null;
//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild.priority < element.priority) {
//           swap = leftChildIdx;
//         }
//       }
//       if (rightChildIdx < length) {
//         rightChild = this.priority[rightChildIdx];
//         if (
//           (swap === null && rightChild.priority < element.priority) ||
//           (swap !== null && rightChild.priority < leftChild.priority)
//         ) {
//           swap = rightChildIdx;
//         }
//       }
//       if (swap === null) break;
//       this.priority[idx] = this.priority[swap];
//       this.priority[swap] = element;
//       idx = swap;
//     }
//   };
//   return PriorityQueueHeap;
// })();
// var er = new PriorityQueueHeap();
// var HashTable = /** @class */ (function () {
//   function HashTable(size) {
//     if (size === void 0) {
//       size = 53;
//     }
//     this.keyMap = new Array(size);
//   }
//   HashTable.prototype._hash = function (key) {
//     var total = 0;
//     var WEIRD_PRIME = 31;
//     for (var i = 0; i < Math.min(key.length, 100); i++) {
//       var char = key[i];
//       var value = char.charCodeAt(0) - 96;
//       total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//     }
//     return total;
//   };
//   HashTable.prototype.set = function (key, value) {
//     var index = this._hash(key);
//     if (!this.keyMap[index]) {
//       this.keyMap[index] = [];
//     }
//     this.keyMap[index].push([key, value]);
//   };
//   HashTable.prototype.get = function (key) {
//     var index = this._hash(key);
//     if (this.keyMap[index]) {
//       for (var i = 0; i < this.keyMap[index].length; i++) {
//         if (this.keyMap[index][i][0] === key) {
//           return this.keyMap[index][i];
//         }
//       }
//     }
//     return undefined;
//   };
//   HashTable.prototype.values = function () {
//     var valuesArray = [];
//     for (var i = 0; i < this.keyMap.length; i++) {
//       if (this.keyMap[i]) {
//         for (var j = 0; j < this.keyMap[i].length; j++) {
//           if (!valuesArray.includes(this.keyMap[i][j][1])) {
//             valuesArray.push(this.keyMap[i][j][1]);
//           }
//         }
//       }
//     }
//     return valuesArray;
//   };
//   HashTable.prototype.keys = function () {
//     var keysArray = [];
//     for (var i = 0; i < this.keyMap.length; i++) {
//       if (this.keyMap[i]) {
//         for (var j = 0; j < this.keyMap[i].length; j++) {
//           if (!keysArray.includes(this.keyMap[i][j][0])) {
//             keysArray.push(this.keyMap[i][j][0]);
//           }
//         }
//       }
//     }
//     return keysArray;
//   };
//   return HashTable;
// })();
// var ht = new HashTable(17);
// ht.set('maroon', '#800000');
// ht.set('yellow', '#FFFF00');
// var Graph = /** @class */ (function () {
//   function Graph() {
//     this.adjacencyList = {};
//   }
//   Graph.prototype.addVertex = function (vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = [];
//     }
//   };
//   Graph.prototype.addEdge = function (vertex1, vertex2) {
//     this.adjacencyList[vertex1].push(vertex2);
//     this.adjacencyList[vertex2].push(vertex1);
//   };
//   Graph.prototype.removeEdge = function (vertex1, vertex2) {
//     this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(function (
//       vert
//     ) {
//       return vert !== vertex2;
//     });
//     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(function (
//       vert
//     ) {
//       return vert !== vertex1;
//     });
//   };
//   Graph.prototype.removeVertex = function (vert) {
//     while (this.adjacencyList[vert].length) {
//       var adjacentVertex = this.adjacencyList[vert].pop();
//       this.removeEdge(vert, adjacentVertex);
//     }
//     delete this.adjacencyList[vert];
//     [];
//   };
//   Graph.prototype.dfsRecursive = function (start) {
//     var adjacencyList = this.adjacencyList;
//     if (!adjacencyList[start]) return null;
//     var result = [];
//     var visited = {};
//     (function dfs(vertex) {
//       if (!vertex) return null;
//       visited[vertex] = true;
//       result.push(vertex);
//       adjacencyList[vertex].forEach(function (neigh) {
//         if (!visited[neigh]) {
//           return dfs(neigh);
//         }
//       });
//     })(start);
//     return result;
//   };
//   Graph.prototype.dfsIterative = function (start) {
//     var stack = [start];
//     var result = [];
//     var visited = {};
//     var adjacencyList = this.adjacencyList;
//     visited[start] = true;
//     var currVertex;
//     while (stack.length) {
//       currVertex = stack.pop();
//       result.push(currVertex);
//       adjacencyList[currVertex].forEach(function (neigh) {
//         if (!visited[neigh]) {
//           stack.push(neigh);
//           visited[neigh] = true;
//         }
//       });
//     }
//     return result;
//   };
//   Graph.prototype.breadthFirst = function (start) {
//     var queue = [start];
//     var result = [];
//     var obVisited = {};
//     obVisited[start] = true;
//     while (queue.length) {
//       var curV = queue.shift();
//       result.push(curV);
//       this.adjacencyList[curV].forEach(function (neigh) {
//         if (!obVisited[neigh]) {
//           obVisited[neigh] = true;
//           queue.push(neigh);
//         }
//       });
//     }
//     return result;
//   };
//   return Graph;
// })();
// var PriorityQueue = /** @class */ (function () {
//   function PriorityQueue() {
//     this.values = [];
//   }
//   PriorityQueue.prototype.enqueue = function (val, priority) {
//     this.values.push({ val: val, priority: priority });
//     this.sort();
//   };
//   PriorityQueue.prototype.dequeue = function () {
//     return this.values.shift();
//   };
//   PriorityQueue.prototype.sort = function () {
//     this.values.sort(function (a, b) {
//       return a.priority - b.priority;
//     });
//   };
//   return PriorityQueue;
// })();
// var WeightedGraph = /** @class */ (function () {
//   function WeightedGraph() {
//     this.adjacencyList = {};
//   }
//   WeightedGraph.prototype.addVertex = function (vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = [];
//     }
//   };
//   WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
//     this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
//     this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
//   };
//   WeightedGraph.prototype.Dijkstra = function (start, finish) {
//     var nodes = new PriorityQueue();
//     var distances = {};
//     var previous = {};
//     var path = []; //to return at end
//     var smallest;
//     //build up initial state
//     for (var vertex in this.adjacencyList) {
//       if (vertex === start) {
//         distances[vertex] = 0;
//         nodes.enqueue(vertex, 0);
//       } else {
//         distances[vertex] = Infinity;
//         nodes.enqueue(vertex, Infinity);
//       }
//       previous[vertex] = null;
//     }
//     // as long as there is something to visit
//     while (nodes.values.length) {
//       smallest = nodes.dequeue().val;
//       if (smallest === finish) {
//         //WE ARE DONE
//         //BUILD UP PATH TO RETURN AT END
//         while (previous[smallest]) {
//           path.push(smallest);
//           smallest = previous[smallest];
//         }
//         break;
//       }
//       if (smallest || distances[smallest] !== Infinity) {
//         for (var neighbor in this.adjacencyList[smallest]) {
//           //find neighboring node
//           var nextNode = this.adjacencyList[smallest][neighbor];
//           //calculate new distance to neighboring node
//           var candidate = distances[smallest] + nextNode.weight;
//           var nextNeighbor = nextNode.node;
//           if (candidate < distances[nextNeighbor]) {
//             //updating new smallest distance to neighbor
//             distances[nextNeighbor] = candidate;
//             //updating previous - How we got to neighbor
//             previous[nextNeighbor] = smallest;
//             //enqueue in priority queue with new priority
//             nodes.enqueue(nextNeighbor, candidate);
//           }
//         }
//       }
//     }
//     return path.concat(smallest).reverse();
//   };
//   return WeightedGraph;
// })();

var Node = /** @class */ (function () {
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  return Node;
})();

// var binTree = new BinarySearchTree();

//                     10
//               6           15
//           3      8              20
//
// BFS - 10 6 15 3 8 20    DFS - 3 6 8 10 15 20
let newTree = new Node(10);
newTree.left = new Node(6);
newTree.left.right = new Node(8);
newTree.left.left = new Node(3);
newTree.right = new Node(15);

newTree.right.right = new Node(20);

function BFSsearch(node) {
  let queue = [node];
  let returnList = [];

  while (queue.length) {
    let current = queue.shift();
    returnList.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return returnList;
}

function DFS(node) {
  let returnList = [];

  function helperF(node) {
    if (node === null) return;
    if (node.left) {
      helperF(node.left);
    }
    returnList.push(node.value);
    if (node.right) {
      helperF(node.right);
    }
  }
  helperF(node);
  return returnList;
}

var t1 = performance.now();
// console.log(binTree.BFS());
var result = DFS(newTree);
console.log(result);
// const result = twoSum([2, 7, 11, 15], 13);
var t2 = performance.now();
output.innerHTML = result + '<br>' + (t2 - t1) + ' millisecondsss';
//capitalizeletters, longestword, array chunking, is anagram, flatten array, letter shifter
