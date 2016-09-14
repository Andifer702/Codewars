//Given an array, find the int that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  //happy coding!
  var count = 1
  A = A.sort(function(a,b){return a-b});
  
  //check each number with the next and increase the count each time the consecutive
  //numbers are identical. When a new number appears, check the count of previous number and see if it is odd.
  for(var i = 0; i < A.length; i++){
    if(A[i] === A[i+1]){
      count += 1;
    }else{
      if (count%2 !== 0){
        return A[i];
      }else {
        count = 1;
      }
    }
  }
}
