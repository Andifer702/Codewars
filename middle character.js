//You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  //Code goes here!
  var l = s.length;
  //for even number letter words, return the middle 2 index
  if (l%2 === 0){
    return s.slice(l/2-1, l/2+1);
  } else {
  //for odd number letter words, return the middle index
  //trunc is used to drop the decimal
    return s[Math.trunc(l/2)]
    };
}
