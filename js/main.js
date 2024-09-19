/*function calcularMundialesVistos() {
    const anioNacimiento = prompt("Ingrese su año de nacimiento (4 dígitos):");

    // Verificar que el ingreso sea un número de 4 dígitos
    if (!/^\d{4}$/.test(anioNacimiento)) {
        alert("Por favor, ingrese un año válido de 4 dígitos.");
        return;
    }

    const anio = parseInt(anioNacimiento, 10);

    // Verificar que el año esté en el rango válido
    if (anio < 1930 || anio > new Date().getFullYear()) {
        alert("Por favor, ingrese un año entre 1930 y el año actual.");
        return;
    }

    const mundiales = [];

    // Mundiales desde 1930 a 1962 con periodos irregulares
    const mundialesIrregulares = [1930, 1934, 1938, 1950, 1954, 1958, 1962];
    mundialesIrregulares.forEach(function (m) {
        if (anio <= m) {
            mundiales.push(m);
        }
    });

    // Mundiales desde 1966 hasta la fecha actual (cada 4 años)
    for (let m = 1966; m <= new Date().getFullYear(); m += 4) {
        if (anio <= m) {
            mundiales.push(m);
        }
    }

    alert(`Has visto ${mundiales.length} mundiales de fútbol.`);
}

calcularMundialesVistos();

*/


/*
function calculadorDeMundiales() {
    const nacimiento = prompt("Ingresa tu año de nacimiento (4 cifras):");
    const patronDeNacimiento = /^(19[0-9]{2}|20[0-9]{2})$/;//Esta expresion busca un numero que empiece con "19" o "20" seguido estrictamente de dos digitos entre el 1 y 9.

    if (!patronDeNacimiento.test(nacimiento)) {//Aca testeamos que la entrada cumpla con el patron requerido.
        alert("Por favor, ingresa un año válido de cuatro dígitos entre 1900 y el año actual.");
        return calculadorDeMundiales();//Vuelve a ejecutar el prompt. Este lo agregue yo.   
    }

    const anio = parseInt(nacimiento);//Covertimos el string a un numero entero.
    let mundiales = 0;

    const mundialesIrregulares = [1930, 1935, 1938, 1950, 1954, 1962];
    const mundialesRegulares= 1966;
    const anioactual = new Date().getFullYear();//Obtengo fecha y hora actual del momento en que se ejecuta el codigo. Luego selecciono el ano completo en numero de 4 digitos y la guardo en anioactual Incluido en js.

    // Contamos los mundiales irregulares
    mundiales += mundialesIrregulares.filter(aniodelacopa => aniodelacopa  >= anio).length;//Sumamos el valor del nuevo array a mundiales.
    console.log(mundialesIrregulares.filter(aniodelacopa => aniodelacopa  >= anio).length);//Aca vemos como se reduce el array.
    
    // Contamos los mundiales regulares
    if (anio <= mundialesRegulares) {
        mundiales += Math.floor((anioactual - mundialesRegulares) / 4) + 1;//Calculamos el numero de años transcurridos desde el nacimiento, divimos por 4 y sumamos 1 por el anio del primer mundial regular. Luego con floor redondeamos para bajo para obtener un numero entero
    } else {
        mundiales += Math.floor((anioactual - anio) / 4);
    }

    alert(`Has visto ${mundiales} mundiales de fútbol.`);
}

calculadorDeMundiales();

*/


