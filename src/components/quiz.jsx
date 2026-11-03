import { Question } from "./question.jsx";
import { Answer } from "./answer.jsx";
import { useState, useEffect } from "preact/hooks";

function isSame(string1, string2) {
  return string1.trim().toLowerCase() === string2.trim().toLowerCase();
}
/**
 * @param {string} guess
 * @param {string[]} potential words
 */
function matchesPhoneticAlphabetWords(guess, words) {
  return words.filter((w) => isSame(guess, w)).length > 0;
}

export function Quiz({ questions, alphabet, onWin }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const letters = questions[currentQuestionIndex]
    .split("")
    .filter((e) => e != " ");
  const currentLetter = letters[currentLetterIndex].toUpperCase();
  const potentialWords = alphabet
    .filter((mapping) => mapping.letter === currentLetter)
    .map((mapping) => mapping.word);

  useEffect(() => {
    document.getElementById("answer").focus();
  }, []);

  const onInputChange = (e) => {
    if (matchesPhoneticAlphabetWords(e.target.value, potentialWords)) {
      if (currentLetterIndex === letters.length - 1) {
        if (currentQuestionIndex === questions.length - 1) {
          onWin();
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentLetterIndex(0);
        e.target.value = "";
        return;
      }
      setCurrentLetterIndex(currentLetterIndex + 1);
      e.target.value = "";
    }
  };
  return (
    <>
      <Question
        questionContent={questions[currentQuestionIndex]}
        currentLetterIndex={currentLetterIndex}
      />
      <Answer onInputChange={onInputChange} />
    </>
  );
}
