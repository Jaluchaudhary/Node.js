function reverseText(text) {
    return text.split('').reverse().join('');
}
let testText = 'This is a test String\nThis is a second String';
console.log (`Original Text:\n${testText}`);
console.log (`Reversed Text:\n${reverseText(testText)}`);
