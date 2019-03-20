/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let arr = preferences;

    for (let i=0; i<arr.length; i++) {
        let first = arr[i];
        let second = arr[first-1];
        let third = arr[second-1];

        if (third == i+1 && arr[i]!== i+1) {
            count++;
            arr[i] = -1;
            arr[first-1] = -1;
            arr[second-1] = -1;
        }
    }
    return count;

};
