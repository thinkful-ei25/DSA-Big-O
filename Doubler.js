function doubleArrayValues(array) {
    //GOES THROUGH ARRAY ONCE
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//O(n)