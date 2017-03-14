'use strict'
module.exports = {

reverseString: function(myString){
    var newstr
  if (myString === ''){
    return null;
  } else if (myString !== ''){
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
  } if (joinArray === mystring){
      newString =  true;
    } else{
      newstr = joinArray;
    }
    return res;
}
}