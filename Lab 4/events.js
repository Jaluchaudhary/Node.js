        // dependency
        const EventEmitter = require('events');

        // this is EventEmitter instance
        const eventEmitter = new EventEmitter();
        if (process.argv.length !== 4) {
            console.error('Usage: node events.js <word> <sentence>');
            process.exit(1);
        }

        // Extract command line arguments
        const w = process.argv[2];
        const s = process.argv[3];

        // Function to find all occurrences of a word in a sentence
        function findOccurrences(w, s) {
            let count = 0;
            let index = -1;
        while ((index = s.indexOf(w, index + 1)) !== -1) {
                count++;
                console.log(`There is ${count} copy at position ${index}`);
            }
            return count;
        }

        // Find occurrences of the word in the sentence
        const totalOccurrences = findOccurrences(w, s);

        // Print total count of occurrences
        console.log(`'${w}' is found ${totalOccurrences} times`);
