// Bai 1
function findSecondLargest(arr){
    if(arr.length<2){
        return null;
    }

let largest=arr[0];
let secondLargest =arr[0];

for(let num of arr){
    if(num>largest){
        secondLargest=largest;
        largest=num;
    }
    else if(num>secondLargest && num!==largest){
        secondLargest=num;
    }
}
    return secondLargest;
}


const numbers=[9,8,3,5,6,2,7,9];
console.log(findSecondLargest(numbers));

// Bai 2
function quickSort(arr){
    if(arr.length<=1) return arr;
    let pivot=arr[arr.length-1];
    let left=[], right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}

const classA=[15,2,8,10];
const classB=[8,11,15,9];
const mergedClass=[...classA, ...classB];

const uniqueIDs=[...new Set(mergedClass)];

const sortedIDs=quickSort(uniqueIDs);

console.log(sortedIDs);