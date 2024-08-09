        // Define the array
        let weekdays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];

        // Push 'Thursday' and 'Friday' to the array
        weekdays.push('Thursday', 'Friday');

        // this is a new array called workdays 
        let workdays = weekdays.slice(2);

        // Using map() and join() create a string that lists 
        let workdaysString = workdays.map((day, index) => `${index + 1})${day}`).join('\n');
        console.log(workdaysString);

        // Using splice() remove 'Wednesday' from workdays
        workdays.splice(2, 1);

        //this is a string using forEach() 
        let finalString = '';
        workdays.forEach((day, index) => {
            finalString += `${index + 1})${day}\n`;
        });
        console.log(finalString);
