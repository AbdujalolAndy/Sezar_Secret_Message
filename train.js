// Alphabet and code
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let code = -5;

// Define new message
const message = "Hello, this is me, Andy!"; // Should consider Lower and Upper cases

// Checking code size
if (code > alphabet.length || code < alphabet.length * -1) {
  code %= alphabet.length;
  console.log("code: ", code);
}

// Decode the Message
function decodedMessage(message, code) {
  result = [];
  message.split(" ").forEach((word) => {
    let decodedWord = "";
    for (let letter of word) {
      if (/[^a-zA-Z]/.test(letter)) {
        decodedWord += letter;
        continue;
      }
      let index = alphabet.indexOf(letter.toLowerCase()) + code;
      if (index < 0) {
        index += alphabet.length;
      } else if (index >= alphabet.length) {
        index -= alphabet.length;
      }
      if (letter === letter.toUpperCase()) {
        decodedWord += alphabet[index].toUpperCase();
      } else {
        decodedWord += alphabet[index];
      }
    }
    result.push(decodedWord);
  });
  return result.join(" ");
}

// Encode the Message
function encodeMessage(decodedText, code) {
  const message = decodedText;
  return decodedMessage(message, code);
}

// Creating async Run function
const decodedText = decodedMessage(message, code);
console.log("Secret =>", decodedText);
setTimeout(() => {
  code *= -1;
  const encodedText = encodeMessage(decodedText, code);
  console.log("Original =>", encodedText);
}, 5000);