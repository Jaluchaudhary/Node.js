    let day = Math.floor(Math.random() * 7) + 1;
    let dayName;
    if (day === 1) {
        dayName = "Monday";
    } else if (day === 2) {
        dayName = "Tuesday";
    } else if (day === 3) {
        dayName = "Wednesday";
    } else if (day === 4) {
        dayName = "Thursday";
    } else if (day === 5) {
        dayName = "Friday";
    } else if (day === 6) {
        dayName = "Saturday";
    } else if (day === 7) {
        dayName = "Sunday";
    } else {
        dayName = "Invalid day";
    }

    //switch statement.

    switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
    }

    console.log(`Day ${day} is ${dayName}`);