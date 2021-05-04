const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function censor(replacementString, wordToCensor){

  // Making the text an array
  const arrayOfStrings = text.split(" ")

  // Going through each word
  for (let i = 0; i<arrayOfStrings.length; i++){
    const string = arrayOfStrings[i];

  // If it matches
    if (string.toLowerCase() === wordToCensor.toLowerCase()) {
      arrayOfStrings[i] = replacementString;
    }
  }  

  // Put it back into a paragraph from an array
  return arrayOfStrings.join(" ")
}

let result = censor("****", "nulla")

console.log("This is what censor returned:", result)