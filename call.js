/////////////////////





//JavaScript call() Method

//The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.

// This example calls the fullName method of person, using it on person1:


const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
        }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "jane",
    lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person2)); // jane Doe


// the example calls the fullName method of person, using it on person2:


//The call() method with Arguments

//The call() method can accept arguments:


const person5 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person6 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person5.fullName.call(person6, "Oslo", "Norway")); // John Doe,Oslo,Norway  