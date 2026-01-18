        
        //1. Variable
        
        let name = "ajay";
        let age =27;
        let A =7;
        let B = 9;
        let sum = A+B;
        name ="Ravi";
        console.log("My name is ",name);
        console.log("My Age is",age);
        console.log(sum);
         
        const pie = 22.5;
        console.log(pie);

        var userName ="Ajaysingh";
        userName ="Amit";
        console.log(userName);


       // Notes : 1.-> let , var is mutable , const Imutable
       // 2. in Naming of variable follow CamelCase
       // 3. javascript case sensitive 
       // 4. You can update one data type to any data type 
       // 5. Javascript is a loosely type programming language
    //    ----------------------------------------

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


//3. Operators 

//1. Assignment Operator 
const ak = 10;
const bk = 9;
console.log(ak+bk);


//2. Airthematic Operator
const e =5;
const f = 6;
let sums = e+ f;
console.log(sums);



//3. Increment Operator

sums++;
console.log(sums);


//4. Decrement Operator 
sums--;
console.log(sums);


//5. Pree Increment 
let sk = 10;
console.log(sk);
console.log("Pree increment ",++sk);  //it increment in same line 



//6. Post Increment 
console.log("Post Increment",sk++); //it increment in next line or print incremented value in next line 
console.log(sk);



//7. Pree Decrement 
let vk =9;
console.log(vk);
console.log("Pree Decrement ",--vk);  //it decrement in same line 


//8. Post Decrement 
console.log("Post Decrement",vk--); //it decrement in next line or print decremented value in next line 
console.log(vk);

//9.Exponentiation
let akm =2;
let bkm =3;
const results = akm ** bkm;
console.log(results);

// 10. short hand operator 
//a = a+b ;   a+=b;
// a = a-b;   a-=b;
// a = a*b;   a*=b;
// a = a/b;   a/=b;
// a = a%b;   a%=b;
// a = a**b;  a**=b;
let tk =3;
let ck = 6;
console.log(tk);

tk +=ck;    //short hand 
console.log(tk);

//11. Comparison operator
// Assignment (=);
// Equals (==)
// Strict Equals (===)

let mk = 5;
let nk = '5';
console.log("equals",mk ==nk);
console.log("strick equals",mk === nk);  // it check on data type level also 
 nk =3;
console.log(mk>nk);
nk = '5';
console.log("equals",mk !=nk);
console.log("strick equals",mk !== nk);  // it check on data type level also 

//12. Logical Operator 
//Logical AND (&&)
const rk = false;
const lk = true;
const resultset = rk && lk ;
console.log(resultset);


//Logic OR (||)

const resultsets = rk || lk ;
console.log(resultsets);

// Logic Not (!)
const nt = false;
console.log(!nt);






