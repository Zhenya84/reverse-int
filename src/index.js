module.exports = function reverse (n) {
  let result = '';
  if (n === 0) return 0;
  if (n < 0) return reverse(-n);
  if (n%10 != 0) {
   while (n > 0) {
     result = result + (n%10);
     n = parseInt(n/10);
   }
  } else {
     n = parseInt(n/10);
     while (n > 0) {
     result = result + (n%10);
     n = parseInt(n/10);
     }
    }
  return result;
}
