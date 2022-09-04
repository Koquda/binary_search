const $ = selector => document.querySelector(selector);

let firstIter = true;
let iteration = 0;

function binarySearch(arr, left, right, x, prevArr){
    iteration++;
    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        // If the part of the array where to be search is length 1
        if (arr.slice(left, mid + 1).length === 1) {
            showSlicedArray([x], prevArr, x);
            firstIter = false
            return x;
        }

        // If the element is present at the middle
        // itself
        // if (arr[mid] == x){
        if (prevArr.length % 2 === 0) {
            if (arr[mid] == x){
                showSlicedArray([x], prevArr, x);
                firstIter = false
                return mid + 1;
            }
        }   
        else {
            if (arr[mid + 1] == x){
                showSlicedArray([x], prevArr, x);
                firstIter = false
                return mid + 1;
            }        
        }

 
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x){
            console.log(arr.slice(left, mid + 1));
            // toggleCmpAnimation(arr[])
            showSlicedArray(arr.slice(left, mid + 1), prevArr, x);
            firstIter = false
            return binarySearch(arr, left, mid - 1, x, arr.slice(left, mid + 1));
        }

        // Else the element can only be present
        // in right subarray
        console.log(arr.slice(mid + 1, right + 1));
        // este es el "correcto" showSlicedArray(arr.slice(mid + 1, right + 1), prevArr, x);
        showSlicedArray(arr.slice(mid + 1, right + 2), prevArr, x);
        firstIter = false
        return binarySearch(arr, mid + 1, right, x, arr.slice(mid + 1, right + 1));
    }
 
    // We reach here when element is not
    // present in array
    return -1;
}


// Shows the sliced array, also will call the animations
function showSlicedArray(slicedArr, arr, x){

    const container = document.createElement('div');
    container.className = 'array_container';
    container.id = `array_container${iteration}`;
    
    // Display if the mid element is higher or lower than the search value
    
    const comparison = document.createElement('div');
    comparison.className = 'array_container';
    comparison.id = `comparison${iteration}`;
    let str = getCompareString(arr[Math.floor((arr.length - 1) / 2)], x);
    comparison.innerHTML = str;
    document.getElementById('visualizer_container').append(comparison);
        
    // Adds the sliced array
    let outputStr = "";
    for (let i = 0; i < slicedArr.length; i++)
    {
        if (slicedArr[i] == slicedArr[Math.floor((slicedArr.length - 1) / 2)])
        {
            outputStr += `<div class="array_element" id="mid_element">${slicedArr[i]}</div>`;            
        }
        else
        {        
            outputStr += `<div class="array_element">${slicedArr[i]}</div>`;
        }
    }
    container.innerHTML += outputStr;
    document.getElementById('visualizer_container').append(container);
    
    
    // Remove the comparison
    // document.getElementById('comparison').remove();
}

// Returns the string of the comparison
function getCompareString(mid, x){
    let str = "";
    str += `<div class="array_element" id="mid_element">${mid}</div>`;
    if (mid > x) {
        str += `<div class="compare_element" id="compare_operator">></div>`;
    }
    else if (mid < x){
        str += `<div class="compare_element" id="compare_operator"><</div>`;
    }
    else {
        str += `<div class="compare_element" id="compare_operator">=</div>`;
    }
    str += `<div class="array_element" id="x_element">${x}</div>`;
    return str;
}

function getIteration()
{
    return iteration;
}