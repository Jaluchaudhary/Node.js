        //three objects called shape, capacity, and pet 
        // Circle object
        let shape = {
            name: "circle",
            radius: 3.12,
            area: function() {
                return Math.PI * this.radius * this.radius;
            }
        };

        // Cube object
        let capacity = {
            name: "cube",
            side: 10,
            volume: function() {
                return Math.pow(this.side, 3);
            }
        };

        // Pet object
        let pet = {
            name: "Fluffy",
            type: "cat",
            birthYear: 2022,
            age: function() {
                let today = new Date();
                console.log(today.getFullYear());
           return today.getFullYear() - this.birthYear; // today years - birthday years
            }
        };

        // Execute the console.log statements to get output

        console.log(`The ${shape.name} has an area of ${shape.area()}`);
        console.log(`The ${capacity.name} has a volume of ${capacity.volume()}`);
        console.log(`This year my ${pet.type} ${pet.name} is ${pet.age()} years old`);
