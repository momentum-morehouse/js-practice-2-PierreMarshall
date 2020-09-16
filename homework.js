// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
function remove(nameArray, member){
    let nameArray =["Cadence", "Ordel", "Marion",];
    console.log(nameArray)
    // ["Cadence", "Ordel", "Marion",]
    let pos= 3
    let n= 1
    let removeNames= nameArray.splice(p, n)
    console.log(nameArray)
    //["Cadence", "Ordel"]
    console.log(removeNames)
    //["Marion"]

}
// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
    function sumAll(numberArray){
        let sumAll= [1, 2, 3, 4, 5];
// Get sum of numberArray
        let sumAll= numberArray.reduce(function(a,b){
            return a+b;},0);
            console.log(sumAll); //Print: 15
    


    
// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function arrayAverage(array){
    let arr = 0;
    for(arrayAverage= i in array) {
        sum += arr[i];
    }
    let numbersCnt = arr.length;
    return (sum / numbersCnt);
}
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
    function minimum(numberArray) 
    console.log(Math.min(2, 3, 1));
    console.log(Math.min(-2, -3, -1));
    const array1 = [2, 3, 1];   
    console.log(Math.min(...array1));

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//  
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
function selection_sort(Array) {
    var len = A.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (A[j] < A[j_min]) {
                j_min = j;
            } else {}
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        } else {}
    }
}

function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
    
// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
