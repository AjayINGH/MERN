//else-if ladder

// const marks =89;
// if(marks>=90)
// {
//     console.log("A+");
// }else if(marks>=80)
// {
//     console.log("A");
// }else if(marks>=70)
// {
//     console.log("B+");
// }else if(marks>=60)
// {
//     console.log("B");
// }else if(marks>=50)
// {
//     console.log("Need to Improve");
// }


//Switch Condition

const marks =61;

switch(marks)
{
    case 90 :
        console.log("A+");
        break;
    case 80:
        console.log("A");
        break;
    case 70:
        console.log("B");
        break;
    case 60:
    case 61:
        console.log("C");
        break;
    default:
        console.log("need to improve");
        break;
}


const score = 'C';
// console.log(typeof(score));

switch(score)
{
    case 'A':
        console.log("Good work");
        break;
    case 'B':
        console.log('work fine');
        break;
    case 'C':
        console.log("work");
        break;
    case 'D':
        console.log("Need to improve");
        break;
    default:
        console.log("failed");
        break;
}


// To check the shape 
const shape={
    type :"rectangle"
};
console.log(typeof(shape));


function isSquare(shape) {
  return shape.type === "square";
}

function isRectangle(shape) {
  return shape.type === "rectangle" || shape.type === "square";
}

function isQuadrilateral(shape) {
  return ["square", "rectangle", "rhombus", "trapezium"].includes(shape.type);
}

function isCircle(shape) {
  return shape.type === "circle";
}

switch (true) {
  case isSquare(shape):
    console.log("This shape is a square.");
  // Fall-through, since a square is a rectangle as well!
  case isRectangle(shape):
    console.log("This shape is a rectangle.");
  case isQuadrilateral(shape):
    console.log("This shape is a quadrilateral.");
    break;
  case isCircle(shape):
    console.log("This shape is a circle.");
    break;
    default:
        console.log("no any shape");
        
}


// print what is your name ?
const foo =3;
let output ="output :";
switch(foo)
{
    case 0:
        output += "SO ";
    case 1:
        output += "What ";
        output += "Is ";
    case 2:
        output +="Your ";
    case 3:
        output +="Name ";
    case 4:
        output += ' ?';
        console.log(output);
        break;
    case 5:
        output +=" !";
        console.log(output);
        break;
    default :
       console.log("pick the no in between 1 to 5 !");
}