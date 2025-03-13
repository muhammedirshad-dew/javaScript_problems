// function to calculate simple interest 

function interest(principal,time,rate){
    // calcualte simple interest using the formula
     let simpleInterest =(principal * time * rate)/100;

    //  print the result 
    console.log ("simple interest is :",simpleInterest);

}

// call the function with sample values 
interest(1000,2000,5); //assuming rate is 5%