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
