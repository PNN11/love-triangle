/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let arr = preferences;
    arr.unshift(0)

    for (let i=0; i<arr.length; i++) {
        let first = arr[i];
        let second = arr[first];
        let third = arr[second];

        if (third == i && arr[i]!== i) {
            count++;
            arr[i] = -1;
            arr[first] = -1;
            arr[second] = -1;
        }
    }
    return count;

};
