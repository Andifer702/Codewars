//A digital root is the recursive sum of all the digits in a number. 
//Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. 
//This is only applicable to the natural numbers.

function digital_root(n) {
  // ...
  var digits = (""+n).split("");
  digits = digits.map(Number);
  
  if (digits.length > 1){
    //sum all the numbers in the array
    for (var i = 0, sum = 0; i < digits.length; sum+=digits[i++]);
    //recurse if the length of the sum is more than 1 digit
    if (sum.toString().length > 1){
      return digital_root(sum)
    } else {
      return sum
    }
  }else{
    return digits[0];
  };
}
