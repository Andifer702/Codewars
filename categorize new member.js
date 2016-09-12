//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
//In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Input will consist of a list of lists containing two items each. 
//Each list contains information for a single potential member. 
//Information consists of an integer for the person's age and an integer for the person's handicap.

function openOrSenior(data){
  // ...
  var newArray = [];
  for (var i = 0; i < data.length; i++){
    if (data[i][0] >= 55 && data[i][1] > 7){
      newArray.push("Senior");
    } else {
      newArray.push('Open');
    };
  }
  return newArray;
}
