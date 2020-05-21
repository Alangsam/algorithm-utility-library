// Your functions go here!
//Convert Celsius to Fahrenheit
function convertToF(celsius) {
   let fahrenheit = (celsius * 9) / 5 + 32;
   return fahrenheit;
}

//Reverse a String
function reverseString(str) {
   let arr = str.split("");
   let newArr = arr.reverse();

   return newArr.join("");
}

//Factorialize a Number

function factorialize(num) {
   if (num !== 0) {
      let arr = [num];
      for (let nums = 1; nums < num; nums += 1) {
         arr.push(nums);
      }
      return arr.reduce((a, b) => a * b);
   } else {
      return 1;
   }
}

//Find the Longest Word in a String

function findLongestWordLength(str) {
   let arr = str.split(" ");
   let newStr = arr.reduce((a, b) => {
      return a.length > b.length ? a : b;
   });

   return newStr;
}

//Return Largest Numbers in Arrays

function largestOfFour(arr) {
   let newThing = [];
   newThing = arr.reduce((a, b) => {
      return a > b ? a : b;
   });
   return newThing;
}

//Confirm the Ending

function confirmEnding(str, target) {
   return str.slice(str.length - target.length) === target;
}

//Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
   let newStr = "";
   while (num > 0) {
      newStr += str;
      num -= 1;
   }
   return newStr;
}

//Truncate a String

function truncateString(str, num) {
   if (str.length > num) {
      return str.slice(0, num) + "...";
   }
   return str;
}

//Finders Keepers

function findElement(arr) {
   let num = 0;
   for (var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (num % 2 === 0) {
         return num;
      }
   }
}

//Boo who

function booWho(bool) {
   if (typeof bool == "boolean") {
      return true;
   }
   return false;
}

// Title Case a Sentence

function titleCase(str) {
   let newList = str.toLowerCase().split(" ");
   let largeLet = [];
   for (let nums = 0; nums < newList.length; nums += 1) {
      largeLet.push(
         newList[nums].replace(
            newList[nums].charAt(0),
            newList[nums].charAt(0).toUpperCase()
         )
      );
   }
   return largeLet.join(" ");
}

//Slice and Splice

function frankenSplice(arr1, arr2, n) {
   let arr = arr2.slice();
   arr.splice(n, 0, ...arr1);
   return arr;
}

//Falsy Bouncer

function bouncer(arr) {
   return arr.filter(function (value) {
      return Boolean(value);
   });
}

//Where do I Belong

function getIndexToIns(arr, num) {
   let newArr = arr.sort((a, b) => a - b);
   for (let nums = 0; nums < arr.length; nums += 1) {
      if (arr[nums] >= num) return nums;
   }
   return newArr.length;
}

//Mutations

function mutation(arr) {
   let firstWord = arr[0].toLowerCase();
   let secondWord = arr[1].toLowerCase();
   for (let nums = 0; nums < secondWord.length; nums += 1) {
      if (firstWord.indexOf(secondWord[nums]) === -1) return false;
   }
   return true;
}

//Chunky Monkey

function chunkArrayInGroups(arr, size) {
   var tempArray = [];
   for (var nums = 0; nums < arr.length; nums += size) {
      tempArray.push(arr.slice(nums, nums + size));
   }
   return console.log(tempArray);
}
