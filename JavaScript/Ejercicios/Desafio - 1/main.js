
let i = 0;
let year = parseInt(prompt('Ingrese año: '));
let oldyear = 0;
let acumulador = 0;
let v = true;


if(year != ""){
    oldyear = year;
    while(v){
        console.log(year);
        if(year < 2022){
            year++;
            acumulador+=1;
        }else{
            v = false;
        }
        i++;
    }
}

console.log(`Desde ${oldyear} hasta ${year} pasaron ${acumulador} años`);