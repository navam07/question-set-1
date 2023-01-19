/*  
console.log("Name   : Alexandra Abramov" ); 
console.log ("DOB  : July 14, 1975  ");
console.log( "Mobile : 99-9999999999");
*/ /*
const country ="abc";
const continent ="bcd";
let population = 44 / 2;
population++;

console.log(country);
console.log(continent);
console.log(population);
console.log(population > 6);
console.log(population < 33);


let isIsland = false;
console.log(isIsland);

let language = "english";
console.log(language);

let description = `${country}  is in   ${continent}  , and its  ${population}   million people speak  ${language}`;
console.log(description);
*/

/*
1 .Given a number N, print sum of all even numbers from 1 to N.
2. convert fahrenheit to Celsius
3.Convert binary to decimal
4.Write a program to input an integer N and print the sum of all its even digits and sum of all its odd digits separately.
5.Write a program that asks the user for a number N and a choice C. And then give them the possibility to choose between computing the sum and computing the product of all integers in the range 1 to N (both inclusive).
*/
/*
function suma(N){
    let sum = 0;
    for (let i = 2; i <= N; i += 2)
    {sum += i;
    }
    return sum;
}
 console.log(suma(10));
 */

/*
 function conversion(Farhreheit) {
    let Celsius = (Farhreheit - 32) * 5 / 9;
    return Celsius;
 }
 console.log(conversion(212));
 */


function evenOdd(n) {
    let evenNo = 0;
    let oddNo = 0;
    while (n > 0) {
        let remainder = n % 10;
        if (remainder % 2 == 0) {
            evenNo += remainder;
        } else {
            oddNo += remainder;
        }
    }}
    console.log(evenOdd(12254))

/*
function binaryToDecimal(binary) {
    let decimal = parseInt(binary, 2);
    return decimal;
}
console.log(binaryToDecimal("11100001"));

*/

function computeSumOrProduct(n, c) {
    let result = 0;
    if (c === "sum") {
        for (let i = 1; i <= n; i++) {
            result += i;
        }}
else (c === "product"){
    result = 0;
    for (let i = 1; i <= n, i++){
        result *= i;
    }
}
