// Declare two variables and calculate their sum, product, and remainder.gti

 let a = 20;
 let b = 7;

 console.log(a*b);
 console.log(a+b);
 console.log(a%b);


// Compare the lengths of two strings and log whether they are equal or not.

let string1 = "javascript";

let string2 = "python";

  if (str1 === str2){
    console.log("equal");
  }
  else{
    console.log("not");
  }

// Declare three boolean variables and use logical operators to determine if a given combination is true or false.
let isSunny = true;
let isWarm = false;
let isWeekend = true;


if (isSunny && isWarm || isWeekend){
    console.log("it is a good day");
}
else{
    console.log("it is a boring day ")
}

// Use if-else statement to determine if a number is positive, negative, or zero.
let number = -20;
  if( number < 0 ){
    console.log("minus")
  }
  else if (number > 0){
    console.log(" positive")
  }
  else{
    console.log("Zero")
  }


// Use the ternary operator to check if a person is eligible to vote based on their age.
let age = 6;

  age > 18 ? console.log("able to vote") : console.log("you are child");
 let eligibility = age>=18 ? "you are able to vote" : "you are not able to vote as you'r age is not enough"
console.log(eligibility)


// Declare two strings and concatenate them. Check if the concatenated string is equal to "HelloWorld".

let str1 = "Hello";
let str2 = "World";

let str3 = str1+str2
let hello="HelloWorld"

if(str3 === hello){
    console.log(str3);
}
else{
    console.log("kela ghya");
}

// // Declare three numbers and use logical operators to check if they form an increasing sequence.
let num1 = 5;
let num2 = 10;
let num3 = 15;

let sequence = num1 < num2 && num2 < num3
    console.log(sequence)

//if else else if statement marks  and grade example

marks =25;

if (marks > 90 && marks < 90){
    console.log("AA");
  }
 
 else if (marks > 80 && marks <= 90){
     console.log("AB");
 }
  else if (marks > 70 && marks <= 80){
        console.log("BB");
  }
 else if( marks > 60 && marks <= 70){
         console.log("BC");
 }
 else if( marks > 50 && marks <= 60){
      console.log("CC");
 }
 else if( marks > 40 && marks <= 50){
     console.log("CD");
  }
  else if (marks >30 && marks <=40){
      console.log("DD");
  }
   else if ( marks <=30){
    console.log("FF");
   }

    
   
   
  

  
   