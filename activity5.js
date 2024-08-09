        // three objects for 3 pets 
        let pet1 = {
            name: "Fluffy",
            type: "cat",
            color: "orange"
        };

        let pet2 = {
            name: "Stuffy",
            type: "hamster",
            color: "white"
        };

        let pet3 = {
            name: "Bluffy",
            type: "dog",
            color: "brown"
        };
        // fourth object
        let myPets = {
            number: 3,
            pet1: pet1,
            pet2: pet2,
            pet3: pet3
        };

        // Execute the console.log statements for the output
        console.log(`I have ${myPets.number} pets. Their names are ${myPets.pet1.name},
        ${myPets.pet2.name} and ${myPets.pet3.name}.`);
        console.log(`${myPets.pet1.name} is an ${myPets.pet1.color} ${myPets.pet1.type}, 
        ${myPets.pet2.name} is a ${myPets.pet2.color} ${myPets.pet2.type} and  
        ${myPets.pet3.name} is a ${myPets.pet3.color} ${myPets.pet3.type} `);