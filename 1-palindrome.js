import { removeAccents } from "./utils.js";

function Palindrome(word = "") {
  let wordVerification = word ? word : false;

  if (wordVerification != false) {
    let splitWord = removeAccents(wordVerification)
      .toLowerCase()
      .replace(/\s/g, "")
      .trim()
      .split("");
    let reverseSplit = [];
    splitWord.forEach((element) => {
      reverseSplit.unshift(element);
    });

    let result = splitWord.every((ele, index) =>
      ele === reverseSplit[index] ? true : false
    );
    return result;
  } else {
    return "The given word is Empty, please enter a valid word";
  }
}

console.log(Palindrome("Alí tomó tila"));
