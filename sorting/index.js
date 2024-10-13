// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let res = arr;
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res.length - i - 1; j++) {
            if(res[j] > res[j + 1]){
                [res[j + 1], res[j]] = [res[j], res[j + 1]]
            }
        }
    }
    return res
}

function selectionSort(arr) {
    let res = arr;
    for (let i = 0; i < res.length; i++) {
        let mn = i;
        for (let j = i + 1; j < res.length; j++) {
            if(res[mn] > res[j]){
                mn = j;
            }
        }
        [res[mn], res[i]] = [res[i], res[mn]]
    }
    return res
}

function mergeSort(arr) {
    if(arr.length === 1) return arr
    let left = []
    let right = []
    let mid = Math.floor(arr.length / 2);
    for (let i = 0; i < mid; i++) {
        left.push(arr[i])
    }
    for(let i = mid; i < arr.length; i++){
        right.push(arr[i])
    }
    left = mergeSort(left)
    right = mergeSort(right)
    
    let res = merge(left, right)
    
    return res
}

function merge(left, right) {
    let res = []
    let p1 = 0
    let p2 = 0
    while(p1 < left.length || p2 < right.length){
        if(p1 == left.length){
            res.push(right[p2]);
            p2++;
        }
        else if(p2 == right.length){
            res.push(left[p1]);
            p1++;
        }
        else{
            if(left[p1] < right[p2]){
                res.push(left[p1]);
                p1++;
            }
            else{
                res.push(right[p2]);
                p2++;
            }
        }
    }
    return res
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
