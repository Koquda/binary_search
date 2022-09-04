document.addEventListener('DOMContentLoaded', function() {

    const $ = selector => document.querySelector(selector);
    

    // When the page loads, create a size 20  sorted array
    let array = generateSortedArray(20);

    // When the page is loaded, display the array
    showArray();

    // Add event listener to the generate array button
    $('#generate_array_form').addEventListener('submit', (e) => {
        // The form has been submitted and checked if it's valid in the HTML
        e.preventDefault();    //stop form from submitting

        // Remove all the array containers from the page
        removeArrayContainers(); 
        
        // Get the array size value
        let array_size = $('#array_size').value;
        
        // Check if there is a value in the array size input
        if(array_size == ''){
           return alert('Must input a value for the array size');
        }

        // Generate the array
        array = generateSortedArray(array_size);
        
        // Display the array in the HTML
        showArray();

        // Enable the search button
        $('#search_btn').disabled = false;

        return;
    }, false);
    
    
    // Displays the array
    function showArray() {
        const div = document.createElement('div');
        div.id="visualizer_container";
        document.body.append(div);


        const container = document.createElement('div');
        container.className = 'array_container';
        const iter = getIteration();
        container.id = `array_container${iter}`;

        let outputStr = "";
        for (let i = 0; i < array.length; i++){
            if (array[i] == array[Math.floor((array.length - 1) / 2)]){
                outputStr += `<div class="array_element" id="mid_element">${array[i]}</div>`;
            }
            else{
                outputStr += `<div class="array_element">${array[i]}</div>`;
            }
        }
        container.innerHTML += outputStr;
        $('#visualizer_container').append(container);
    }

    // Generates a sorted array of size array_size
    function generateSortedArray(size) {
        let array = [];

        for (let i = 0; i < size; i++) {
            array.push(i+1);
        }
        
        return array;

    }

    // Add event listener to the search button
    $('#search_form').addEventListener('submit', (e) => {
        // The form has been submitted and checked if it's valid in the HTML
        e.preventDefault();    //stop form from submitting
        
        // Get the search value
        let search_value = $('#search_value').value;
        
        // Search the array
        let result = binarySearch(array, 0, array.length - 1, search_value, array);

        console.log(result);

        // Disable the button
        $('#search_btn').disabled = true;

        return;
    });

    // Removes the array containers from the page
    function removeArrayContainers(){
        const div = $('#visualizer_container');
        if (!div) return;
        div.remove();
    }
});

