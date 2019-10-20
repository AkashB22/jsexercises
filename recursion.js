function revStr(num){
    num = Number(num);
  if (num < 10) {
      return num;
  }
  let len=(num+'').length;
  return String(num%10) + revStr((num+'').slice(0, -1));
}
let rev= revStr('1234');
console.log(rev);