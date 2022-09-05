# BINARY SEARCH VISUALIZER
#### Video Demo:  <https://youtu.be/pRHKLiX_-64>
#### Description:
The project is an alogrithm visualizer, specifically a binary search algorithm.
It is design to be a tool for students to learn how the algorithm works.
The idea was to make it as a web page, and it turned out like that. The project is made in vanilla JavaScript, HTML and CSS.
Designed to be responsive and interactive, it works on mobile devices as well.

#### How to use:
The page by default shows a length 20 sorted array because that is one of the conditions before executing the algorithm.
In the page there are two forms, one for the array and one for the search value. The one for the array lets the user to create a new array of the designated length, and the one for the search value lets the user to change the value to be searched.
The user can input a number in the search input field, and click on the "Search" button. The algorithm will search for the number in the array, and will highlight and scale it using css animations to show the number if it is found. If the number is not found, the algorithm will alert the user that the number is not in the array.

### Files:
* index.html
* style.css
* main.js
* binarySearch.js

### index.html:
The html file is the main file of the project. It contains the structure of the page, and the links to the css and js files. Also the pico css framework is linked in the head of the file.
It contains a form for the array, and a form for the search value. It also contains a button to execute the algorithm. Though the divs with the sliced arrays are not in the html file, they are created dynamically by the js file.

### style.css:
The css file contains the styles for the page. It uses the pico css framework to make the page responsive. It also uses css animations to highlight and scale the searched number.

### main.js:
The js file contains the main logic of the project. It contains the functions to start the algorithm, to create the array.

### binarySearch.js:
The js file contains the binary search algorithm. It is a recursive function that takes the array, the value to be searched, the start index and the end index as parameters. It returns the index of the value if it is found, and -1 if it is not found. Also it contains several helper functions to make the algorithm work and to show the algorithm results in the page.

