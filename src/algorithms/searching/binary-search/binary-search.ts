// // Program to implement iterative Binary Search

// // A iterative binary search function. It returns
// // location of x in given array arr[l..r] is present,
// // otherwise -1

// function binarySearch(arr : number [], x:number)
// {
//     let low = 0;
//     let high = arr.length - 1;
//     let mid;
//     while (high >= low) {
//         mid = low + Math.floor((high - low) / 2);

//         // If the element is present at the middle
//         // itself
//         if (arr[mid] == x)
//             return mid;

//         // If element is smaller than mid, then
//         // it can only be present in left subarray
//         if (arr[mid] > x)
//             high = mid - 1;

//         // Else the element can only be present
//         // in right subarray
//         else
//             low = mid + 1;
//     }

//     // We reach here when element is not
//     // present in array
//     return -1;
// }

// Linear search function
function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target if found
        }
    }
    return -1; // Return -1 if the target is not found
}

// // let arr: number[] = new Array(2, 3, 4, 10, 40);
// let arr: number[] = Array.from({ length: 100000 }, (_, index) => index + 1);

// let x: number = 490000;
// let n: number = arr.length;


// console.time("binary search")
// let result: number = binarySearch(arr, x);
// if (result == -1){
//     console.log("Element is not present in array")
// }else{
//     console.log("Element is present at index " + result);
// }
// console.timeEnd("binary search")



// // Example of using the linear search
// console.time("linear search")
// result = linearSearch(arr, 999999);
// if (result == -1){
//     console.log("Element is not present in array")
// }else{
//     console.log("Element is present at index " + result);
// }
// console.timeEnd("linear search")

// Binary search function
function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // Check if target is at mid
        if (arr[mid] === target) {
            return mid;
        }
        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            low = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            high = mid - 1;
        }
    }

    // If we reach here, the element is not present
    return -1;
}

export namespace func{

    // Populate array with numbers from 1 to 100000
    let arr: number[] = Array.from({ length: 1000000 }, (_, index) => index + 1);
    
    // Define target for binary search
    let x = 500000;
    
    // Measure time for binary search
    console.time("binary search");
    let result: number = binarySearch(arr, x);
    if (result == -1) {
        console.log("Element is not present in array");
    } else {
        console.log("Element is present at index " + result);
    }
    console.timeEnd("binary search");
    
    // Measure time for linear search
    console.time("linear search");
    result = linearSearch(arr, 999999);
    if (result == -1) {
        console.log("Element is not present in array");
    } else {
        console.log("Element is present at index " + result);
    }
    console.timeEnd("linear search");
}

