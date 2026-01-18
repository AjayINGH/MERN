// 2. Data Types :->

let a = 123;
let b;
console.log("the value of a is",b);      //undefined
console.log("the type of a is ",typeof(b)); //undefined


let sumValue = null;

console.log("the value of a is",sumValue); //null
console.log("the type of a is ",typeof(sumValue)); //object

let v1 ="123";
let v2 = v1 +1;  //it append not sum the number
console.log(v2);


//Type conversion example below (type conversion from one data type to another data type)
let abc =123;
let result = String(abc);
console.log(result);
console.log("type of abc",typeof(abc));  //number
console.log("type of result",typeof(result)); //string


let personName ='Rajat';
let restult3 = Number(personName);
console.log(restult3);                              //Nan  ->>> string to number (Not a Number)
console.log("type of abc",typeof(personName));
console.log("type of result",typeof(restult3));


let nameOg =0    //false
nameOg = 44555;  //true
nameOg = -4444;   //true
nameOg = Boolean(nameOg);
console.log("the value of nameOg",nameOg);
console.log("the type of nameOg ",typeof(nameOg))

