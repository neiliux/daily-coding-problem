const matrix = [
[1,3,7,10,15,20],
[2,6,9,14,22,25],
[3,8,10,15,25,30],
[10,11,12,23,30,35],
[20,25,30,35,40,45]
];

function getCount(matrix, i1, j1, i2, j2) {
  let count = 0;
  const r = matrix.length-1;
  const c = matrix[0].length-1;
  //let i = c;
  let comp = 0;
  for (let i=matrix.length-1; i>=0; i--) {
    for (let j=0; j<matrix[i].length; j++) {
      comp++;
	    console.log(matrix[j][i]);
	    if (matrix[j][i] < matrix[i1][j1]) {
        //count++;
      	count++;
	break;
      }

     //comp++;
    }
  }
  console.log('comp is', comp);
  return count;
}

const x = getCount(matrix, 1,1,2,2);
console.log('result', x);

