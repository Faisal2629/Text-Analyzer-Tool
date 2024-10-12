// index.js

// Higher-order function to add event listeners
const addEventListenerToButton = (selector, event, callback) => {
    const button = document.querySelector(selector);
    if (button) {
        button.addEventListener(event, callback);
    }
};

// Function to count words in the input text
const countWords = (text) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
};

// Function to convert text to uppercase
const toUpperCase = (text) => {
    return text.toUpperCase();
};

// Function to convert text to lowercase
const toLowerCase = (text) => {
    return text.toLowerCase();
};

// Function to check for a substring in the text
const checkSubstring = (text, substring) => {
    return text.includes(substring);
};

// Function to update the result display
const updateResultDisplay = (message) => {
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = message;
};

// Event listeners for buttons
addEventListenerToButton('#countWords', 'click', () => {
    const inputText = document.getElementById('inputText').value;
    const wordCount = countWords(inputText);
    updateResultDisplay(`Word Count: ${wordCount}`);
});

addEventListenerToButton('#toUpperCase', 'click', () => {
    const inputText = document.getElementById('inputText').value;
    const upperText = toUpperCase(inputText);
    updateResultDisplay(`Uppercase: ${upperText}`);
});

addEventListenerToButton('#toLowerCase', 'click', () => {
    const inputText = document.getElementById('inputText').value;
    const lowerText = toLowerCase(inputText);
    updateResultDisplay(`Lowercase: ${lowerText}`);
});

addEventListenerToButton('#checkSubstring', 'click', () => {
    const inputText = document.getElementById('inputText').value;
    const substring = document.getElementById('substring').value;
    const containsSubstring = checkSubstring(inputText, substring);
    updateResultDisplay(containsSubstring ? `The text contains "${substring}".` : `The text does not contain "${substring}".`);
});
