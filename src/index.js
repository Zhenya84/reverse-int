module.exports = function reverse (n) {
  let result = '';
  if (number === 0) return 0;
  if (number < 0) return -reverse(-number);
  while (number > 0){
   result = result + (number%10);
   number = parseInt(number/10);
  }
  return result;
}
