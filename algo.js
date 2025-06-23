
let characterCount = 0;
let wordCount = 1;
let vowelCount = 0;
let sentence = prompt("Enter a sentence ending with a period ('.'):");


for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    characterCount++;

    if ("aeiouAEIOU".includes(char)) {
        vowelCount++;
    }

    if (char === ' ') {
        wordCount++;
    }

    if (char === '.') {
        break; 
    }
}
console.log("Number of characters:", characterCount);
console.log("Number of words:", wordCount);
console.log("Number of vowels:", vowelCount);
