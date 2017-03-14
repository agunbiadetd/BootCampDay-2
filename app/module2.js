'use strict'
module.exports = {

reverseString: function(str){
    var res
  if (str === ''){
    return null;
  } else if (str !== ''){
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
  } if (joinArray === str){
      res =  true;
    } else{
      res = joinArray;
    }
    return res;
}
}