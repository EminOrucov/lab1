// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let a = []
    for(let i = 0; i < n; i++){
        let row = []
        for(let j = 0; j < n; j++){
            row.push(0)
        }
        a.push(row)
    }
    let i = 0, j = 0, next = 1
    while(a[i][j] === 0){
        while(j + 1 < n && a[i][j + 1] === 0) {
            a[i][j] = next
            next++
            j++;
        }
        while(i + 1 < n && a[i + 1][j] === 0) {
            a[i][j] = next
            next++
            i++
        }
        while(j - 1 >= 0 && a[i][j - 1] === 0) {
            a[i][j] = next
            next++
            j--
        }
        while(i - 1 >= 0 && a[i - 1][j] === 0){
            a[i][j] = next
            next++
            i--
        }
        a[i][j] = next
        next++
        j++
    }    
    return a
}


module.exports = matrix;
