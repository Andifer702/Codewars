function isTriangle(a,b,c)
{
   var array = [a,b,c];
   array = array.sort(function(x, y){return x-y})
   if(array[0] + array[1] > array[2]){
     return true;
   }
   return false;
}
