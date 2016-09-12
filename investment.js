//Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

function calculateYears(principal, interest, tax, desired) {
    // your code
    var p = principal;
    var i = interest;
    var t = tax;
    var d = desired;
    var y = 0;
    //use while loop to calculate the total sum of the principal each year
    while (p < d){
    var int = p*i
    p = p + int;
    p = p - int*t;
    y++;
    }
    return y;
};
