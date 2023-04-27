// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.



function isAnagram(str1, str2) {
    // Remove whitespace from both strings and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Convert the strings to arrays of characters
    const arr1 = str1.split('');
    const arr2 = str2.split('');

    // Sort the arrays of characters
    arr1.sort();
    arr2.sort();

    // Convert the sorted arrays back to strings
    const sortedStr1 = arr1.join('');
    const sortedStr2 = arr2.join('');

    // Compare the sorted strings and return true if they are equal, indicating an anagram
    return sortedStr1 === sortedStr2;
}


// const str1 = "Astronomer"; // "school master" // "here come dots" // "hello"
// const str2 = "moon starter"; //"the classroom" // "the morse code" //"world"
// console.log(isAnagram(str1, str2)); //true or false



function compareAnagrams() {
    // Get input values from user
    const str1 = document.getElementById('inputStr1').value; //Hello
    const str2 = document.getElementById('inputStr2').value; //World

    // Call isAnagram() function to check if the input strings are anagrams
    const result = isAnagram(str1, str2);

    // Display result to user
    const output = document.getElementById('output');
    if (result) {
        output.innerHTML = '"' + str1 + '" and "' + str2 + '" are anagrams.';
    } else {
        output.innerHTML = '"' + str1 + '" and "' + str2 + '" are not anagrams.';
    }
}