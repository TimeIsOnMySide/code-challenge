const findSum = function(array) {

    function myFunc(total, num) {
        return total + num;
      }
       let total = array.reduce(myFunc, 0);
    
      return total;
  };

  const findFrequency = function(array) {

    let counts = {};    //This is to store the count of an item in the array
    let compare = 0;    //This is used to compare to the count above and decide if it is more or less frequesnt in the array
    let mostFrequent;   //This will store the most frequent item in the array
    let leastFrequent;  //This will store the least frequent item in the array

    for(var i = 0, len = array.length; i < len; i++){ //Loop through every item in the array
        var word = array[i];    //set a variable equal to an array item. each loop through will set this to the next array item
     
        if(counts[word] === undefined){ //If this is the first time seeing this item -->
           counts[word] = 1;            //then set the count to one
        }else{                  
           counts[word]++;              //If the item is seen again after the first time, add one to the count.
        }
        if(counts[word] > compare){     //If the word count is larger than 0 (0 only on first loop)
           compare = counts[word];      //set the compare value to the word count value
           mostFrequent = array[i];     //Set the mostFrequent to the array item. After the loop is complete, mostFrequent will be set to the correct value.
        }

        if(counts[word] === undefined){ //If this is the first time seeing this item -->
            counts[word] = 1;            //then set the count to one  
         }else{                  
            counts[word]++;             //If the item is seen again after the first time, add one to the count.
         }
         if(counts[word] < compare){    //If the word count is lower than 0 (0 only on first loop)
            compare = counts[word];     //set the compare value to the word count value
            leastFrequent = array[i];   //Set the mostFrequent to the array item. After the loop is complete, mostFrequent will be set to the correct value.
         }
    };

    const answerObject = { most: mostFrequent, least: leastFrequent}; //Make an object that contains the two answers

    return answerObject; //return the answer object
  }

  const isPalindrome = function(str) {

    let reverseStr = str;
    reverseStr = reverseStr.toLowerCase();
    reverseStr = reverseStr.split('');
    reverseStr = reverseStr.reverse();
    reverseStr = reverseStr.join('');

    if(str === reverseStr) {
        return true;
    } else {
        return false;
    }

  };

  const largestPair = function(array) {

    let largestProduct = 0;
    for(var i = 0, x = 1; x < array.length; i++, x++) { //every loop through the array will look at two adjacent elements
        let compareProduct = array[i] * array[x];
        if(compareProduct > largestProduct) {
            largestProduct = compareProduct;
        }
    }
    return largestProduct;
  };

  const removeParenth = function(str) {

    const regex = /\([^\)]*?\)/g;

    let newStr = str.replace(regex, '');

    return newStr;
  };

  const scoreScrabble = function(str) {
    str = str.toLowerCase();
    strArr = str.split('');

    const scoreObj = {
        'a': 1,
        'b': 3,
        'c': 3,
        'd': 2,
        'e': 1,
        'f': 4,
        'g': 2,
        'h': 4,
        'i': 1,
        'j': 8,
        'k': 5,
        'l': 1,
        'm': 3,
        'n': 1,
        'o': 1,
        'p': 3,
        'q': 10,
        'r': 1,
        's': 1,
        't': 1,
        'u': 1,
        'v': 4,
        'w': 4,
        'x': 8,
        'y': 4,
        'z': 10
    };

    let totalScore = 0;
    for(var i = 0; i < strArr.length; i++) {
        totalScore = totalScore + scoreObj[strArr[i]];
        
    }
    return totalScore;
  };



  