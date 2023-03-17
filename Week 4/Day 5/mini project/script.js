function playTheGame() {
    const wantsToPlay = confirm("Would you like to play the game?");
  
    if (!wantsToPlay) {
      alert("No problem, goodbye!");
      return;
    }
  
    let userNumber;
    do {
      userNumber = Number(prompt("Enter a number between 0 and 10:"));
    } while (!isValidNumber(userNumber));
  
    let tries = 0;
    let computerNumber;
    while (tries < 3) {
      tries++;
      if (tries === 1) {
        computerNumber = Math.floor(Math.random() * 11);
      }
      
      const result = compareNumbers(userNumber, computerNumber);
      if (result === "win") {
        alert("WINNER!");
        return;
      } else if (result === "higher") {
        userNumber = prompt("Your number is bigger than the computer's, guess again:");
      } else {
        userNumber = prompt("Your number is smaller than the computer's, guess again:");
      }
    }
  
    alert("Sorry, you are out of chances. The number was " + computerNumber);
  }
  
  function isValidNumber(number) {
    if (isNaN(number)) {
      alert("Sorry, not a number. Please enter a valid number.");
      return false;
    }
  
    if (number < 0 || number > 10) {
      alert("Sorry, not a valid number. Please enter a number between 0 and 10.");
      return false;
    }
  
    return true;
  }
  
  function compareNumbers(userNumber, computerNumber) {
    if (userNumber == computerNumber) {
      return "win";
    } else if (userNumber > computerNumber) {
      return "higher";
    } else {
      return "lower";
    }
  }

  // The variable computerNumber is declared outside the while loop, 
  // but it is only assigned a value inside the loop when tries is equal to 1. 
  // After the first guess, computerNumber stays the same for the remaining two tries.