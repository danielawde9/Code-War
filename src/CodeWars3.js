import react from "react";

export function accum(s) {
  // lower the whole string
  s=s.toLowerCase()
  // to make the string to array
  var arr = [...s]
 
  arr.forEach(function(value,index){
    // make the letter upper case 
    var upper = arr[index].toUpperCase();
    // combine the upper case with the multiply of the letters
    var newArr = upper + arr[index].repeat(index)
    // replace the current value with the new value
    arr.splice(index,1,newArr)
   
  })
  // join the whole array -
   return arr.join('-');
}
