
console.log("First Line of the Program Flow");

const candidateAge =26;

// if(candidateAge>=18)
// {
//     console.log("Hey you can vote :-)");
//     console.log("Dummy Inner log");
    
// }

//if - else statement 
// if(candidateAge>=18)
// {
//     console.log("Hey you can vote :-)");
//     console.log("Dummy Inner log");
// }
// else{
//     console.log("You can't vote");
// }

//Nested -if statement 
// if(candidateAge>=18)
// {
//     if(candidateAge>=60)
//     {
//         console.log("Senior citizen are eligible to vote online");
//     }
//     console.log("Hey you can vote :-)");
  
// }
// else{
//     console.log("You can't vote");
// }

//else If Ladder
if(candidateAge>=60)
{
   console.log("Senior citizen are eligible to vote online");
}
else if(candidateAge>=18)
{
    console.log("Younger Citizens ! Hey you can vote");
    
}
else{
    console.log("You can't vote");
}


const marks =89;
if(marks>=90)
{
    console.log("A+");
}else if(marks>=80)
{
    console.log("A");
}else if(marks>=70)
{
    console.log("B+");
}else if(marks>=60)
{
    console.log("B");
}else if(marks>=50)
{
    console.log("Need to Improve");
}

//Ternary Operator
//condition ? True :False
const candidateAges =18;
candidateAges >=18 ? console.log("You are eligible to Vote") :console.log("You are not eligible to Vote");


console.log("Last line of the program flow");
