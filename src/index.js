module.exports = function reverse (n) {
  if (n < 0) return -reverse(-n); 
  let revNum = n.toString().split('').reverse().join("");
  return Number(revNum);
}
