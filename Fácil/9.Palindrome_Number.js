/*Dado un número entero , devuelve si es un xtruex
palíndromo
y de otro modo.false

Ejemplo 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.*/

function palindromeNumber(x){
    if(x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let reversed = 0;
    let original = x;
    while(x < 0){
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return original === reversed;
}