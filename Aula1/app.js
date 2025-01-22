//VARIABLES
let numeroMaximoPosible = 20;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;
let intentosRestantes = maximosIntentos;


while(numeroUsuario != numeroSecreto) {
 numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

console.log(typeof(numeroUsuario));

/*PARA COMPARAR CON CONDICIONAL IF*acertamos, fue verdadera la condicion*/
if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
} else{
    if (numeroUsuario > numeroSecreto) {
        alert(`El numero que has introducido es mayor que el numero secreto`);
    } else {
        alert(`El numero que has introducido es menor que el numero secreto`);

    }
   
}

//incremento el contador cuando no acierta
//intentos = intentos + 1;
intentos ++;
}