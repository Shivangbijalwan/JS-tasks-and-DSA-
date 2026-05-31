// This is Binary Search 
let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];
let index = binary(arr, 0, arr.length - 1, 67);
if (index === -1) console.log("not found")
else console.log("target found at " + index + " index")


function binary(arr, f, l, target) {
    while (f <= l) {
        let mid = Math.floor((f + l) / 2)
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
             f = mid + 1;
        }
        else {
             l = mid - 1;
        }
    }

    return -1
}
