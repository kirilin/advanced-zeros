module.exports = function getZerosCount(number, base) {
  //Наибольший простой делитель  будет от 2 до 128 (256/2)  т.к. `2 <= base <= 256`
  let smplNum = [127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2];
  let divider = base;
  let zeroCount = 0;

  //находим наибольший простой делитель
  for (let i = 0; i < smplNum.length; i++){
    if(base % smplNum[i] === 0) {
      divider = smplNum[i];
      break;
    }
  }
  
  //проверяем кратность второго делителя к простому
  let tmpBase = base;
  let zeroDiv = 0;
  while (tmpBase % divider === 0){ 
    tmpBase /= divider;
    zeroDiv++;
  }
  
  while (number >= divider) {
    number = Math.trunc(number / divider);
    zeroCount = zeroCount + number;
  }

  return Math.trunc(zeroCount / zeroDiv);
}