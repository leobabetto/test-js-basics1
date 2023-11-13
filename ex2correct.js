
const riempiArray = (numeroElementi, Min, Max) => {

    const randomnum = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const array = [];
    for(let i=0; i<numeroElementi; i++){
        const numeroCasuale = randomnum (Min, Max);
        array.push(numeroCasuale);
    }
    return array;
}

const array = riempiArray(10, 2, 50);

const contPariDispari = () => {
    const obj = {
        pari: 0,
        dispari: 0
    };
    for(let j=0; j<array.length; j++){
        const numero = array[j];
        if(numero % 2 === 0){
            obj.pari ++;
        }else{
            obj.dispari ++;
        }
    }
    return obj;
  
}
const risultato2 = contPariDispari(array);
console.log(array, risultato2);