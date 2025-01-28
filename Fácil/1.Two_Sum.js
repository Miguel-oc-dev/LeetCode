/* Dado un arreglo de enteros 'nums' y un numero entero 'target' devuelve el indice de los dos numeros que suman el valor 'target' */


/*Se define una funcion llamada 'twoSum' que toma dos parametros
    * 'nums': un arreglo de numeros
    * 'target': un numero que querremos que sumen del array */

function twoSum(nums, target){

    const map = {};
    for(let i = 0; i < nums.length; i++){
        const complemento = target - nums[i];
        if(complemento in map){
            return[map[complemento], i];
        }
        map[nums[i]] = 0;
    }
}