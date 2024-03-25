// Challenge 1: Student Grade Generator (Toy Problem)
// Write a program that prompts the user to input student marks.
// The input should be between 0 and 100. Then output the correct grade: 


// Prompt the user to input student marks
const marks = prompt("Enter student marks");


    // Determine the grade based on the input marks
    // If marks are greater than 79, 
    if (marks > 79) {
        console.log('A'); // Output will be A 
    } 
    // If marks are between 60 and 79, 
    else if (marks >= 60) {
        console.log('B'); // Output will be B
    } 
    // If marks are between 49 and 59, 
    else if (marks >= 49) {
        console.log('C'); // Output will be C
    }
    // If marks are between 40 and 49, 
    else if (marks >= 40) {
        console.log('D'); // Output will be D
    }
    // Otherwise, If marks are less than 40, 
    else {
        console.log('E'); // Output will be E
    }


