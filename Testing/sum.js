// function sum(a, b) {
//     return a + b;
// }
// module.exports = sum;



function arrayDiff(a, b) {
    let sumA = 0;
    let sumB = 0;
    for ( let i = 0; i < a.length; i++){
      sumA = sumA + a[i];
      
    }
    for ( let j = 0; j < b.length; j++){
      sumB = sumB + b[j];
      
    }
    let newSum = sumA - sumB;
    
    return newSum;
  }
  console.log(arrayDiff([1,2,3], [3,4]))