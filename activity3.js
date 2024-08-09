//JavaScript object called person 
let person = {
    name: "Alice",
    age: 25,
    job: "dentist",
    sport: "tennis",
    hobby: ["cooking", "photography"]
};
//person console log
console.log(person);

// Add gender attribute to person
person.gender = "male";
// Using dot notation update age to 31
person.age = 31;

//Using bracket notation print the value 
console.log(person['age']);

//Using for/in loop iterate over the properties 
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Delete the property that has the value ‘tennis’
delete person.sport;

// array of the keys of person
let keys = Object.keys(person);

// Iterate over the array of keys to print the key: value pairs in person
for (let key of keys) {
    console.log(`${key}: ${person[key]}`);
}

//array of the values of person
let values = Object.values(person);

//Iterate over the array of values and print them out to the console
for (let value of values) {
    console.log(value);
}



