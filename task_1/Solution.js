let array1 = [1,2,3,4,5];
let array2 = [100, 200, 300];
let x = 107;

function compareArray (arr1, arr2, filterNumber) {
  let resultCompare = array1.some(elemArr1=>array2.find( elemArr2 => elemArr2+elemArr1 === filterNumber));
  return resultCompare;
}

console.log(compareArray(array1,array2,x));
