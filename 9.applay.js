//The JavaScript apply() Method--

// The apply() method is similar to the call() method .

// In this example the fullName method of person is applied on person1:
  

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
     firstName: "John",
     lastName: "Doe"

}

// this will return "John Doe":
console.log(person.fullName.apply(person1)); // John Doe


// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.



// The apply() Method with Arguments
// The apply() method accepts arguments in an array:


const person5 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person6 = {
    firstName: "John",
    lastName: "Doe"
}
console.log(person5.fullName.apply(person6, ["Oslo", "Norway"])); // John Doe,Oslo,Norway


