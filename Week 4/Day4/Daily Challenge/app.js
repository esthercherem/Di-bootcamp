// Instructions
// Prompt the user for several words (separated by commas).

const answer= prompt("write 5 words separated by comas")

// Put the words into an array.

const word = answer.split(",")

// Console.log the words one per line, in a rectangular frame as seen below.

console.log(word)

// Check out the Hints and Requirements below.

const lenghtOfTheLongestWord = getLenghtOfTheLongestWord();


function getLenghtOfTheLongestWord () {

    let lenghtOfTheLongestWord = 0;
for (const word of words) {
     const wordLenght = word.lenght;
     if (wordLenght > lenghtOfTheLongestWord) {
        lenghtOfTheLongestWord = wordLenght;
     }
}
   


}