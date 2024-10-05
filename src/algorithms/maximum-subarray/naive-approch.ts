function maxSubarray(arr: number[]) {
    let res = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // update if currSum is grater
            res = Math.max(res, currSum);
        }
    }
    return res;
}

const arr: number[] = [5, -4, -3, 8, 1, -5, 4]
console.log(maxSubarray(arr))