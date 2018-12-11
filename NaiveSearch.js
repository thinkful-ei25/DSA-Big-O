function naiveSearch(array, item) {
    //GOES THROUGH LOOP ONCE
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//O(n)