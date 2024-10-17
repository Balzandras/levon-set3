// 1. Rotate array function
function rotateArray(nums, k) {
    // Handle cases where k is larger than the array length
    k = k % nums.length;

    // Step 1: Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    
    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Step 3: Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
}

// Helper function to reverse a portion of the array
function reverse(nums, start, end) {
    while (start < end) {
        // Swap the elements at the start and end indices
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Function to perform rotation and display the result
function performRotation() {
    // Get the input value and split it into an array
    const input = document.getElementById("arrayInput").value;
    const nums = input.split(',').map(Number); // Convert string inputs to numbers

    // Get the rotation count (k)
    const k = parseInt(document.getElementById("rotationInput").value);

    // Perform the rotation
    rotateArray(nums, k);

    // Display the result on the webpage
    document.getElementById("output1").innerText = "Rotated array: " + nums.join(", ");
}

// 2. Maximum element
function findMax(arr) {
    return Math.max(...arr);
}

function displayMax() {
    // Get the input value from the correct input field
    const input = document.getElementById("arrayInputMax").value;
    const numArray = input.split(',').map(Number); // Convert string inputs to numbers
    
    // Find the maximum element
    const maxElement = findMax(numArray);
    
    // Display the result on the webpage
    document.getElementById("output2").innerText = "The maximum element is: " + maxElement;
}

// 3. Calculator JS
let chosenOperator = '';

function registerUser() {
    // Get user inputs
    const name = document.getElementById('name').value;
    chosenOperator = document.getElementById('operator').value;

    // Simple validation to check if fields are filled
    if (name && chosenOperator) {
        // Hide signup and show calculator
        document.getElementById('signup-section').style.display = 'none';
        document.getElementById('calculator-section').style.display = 'block';

        // Display the selected operation and user's name
        document.getElementById('userName').innerText = name;
        document.getElementById('chosenOperator').innerText = 
            chosenOperator === '+' ? 'Addition' : 
            chosenOperator === '-' ? 'Subtraction' : 'Multiplication';
    } else {
        alert("Please fill in all fields.");
    }
}

function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;

    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Perform the chosen operation
    if (chosenOperator === '+') {
        result = input1 + input2;
    } else if (chosenOperator === '-') {
        result = input1 - input2;
    } else if (chosenOperator === '*') {
        result = input1 * input2;
    }

    // Display the result
    document.getElementById('output3').value = result;
}
