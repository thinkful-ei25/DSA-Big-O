let count = 0; 
function areYouHere(arr1, arr2) {
    //GOES THROUGH FIRST ARRAY TWICE
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        console.log('i', i); 
        count ++; 
        for (let j=0; j<arr2.length; j++) {
            count++; 
            console.log('j', j);
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    console.log(count); 
    return false;
}
const arr1 = [2, 3, 4, 5]; 
// const arr2 = [12, 13, 14, 15]; 
const arr2 = []; 
areYouHere(arr1, arr2); 

//If j > 0
//O(j^2)

//Else 
//0(n)