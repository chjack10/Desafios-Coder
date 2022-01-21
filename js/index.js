let numberOfSubjects;
let userInput;
let gradesSum = 0;
let repeat;

alert( "Vamos a calcular el promedio de tus notas de la facu." );

do {
  userInput = parseInt(prompt('Ingresá la cantidad de materias rendidas').trim());

  if ( isNaN(userInput) || userInput < 1 ) {
    alert('Error: Ingresá una cantidad de materias válida.');
  } else {
    numberOfSubjects = userInput;
  }

} while ( !numberOfSubjects );

for (let i = 1; i < numberOfSubjects + 1; i++) {
  
  do {
    repeat = true;

    userInput = parseInt(prompt(`Ingresá la nota final de la materia nro ${i}`).trim());
    
    if (isNaN(userInput) || userInput < 0 || userInput > 10) {
      alert('Error: Ingresá una nota válida.');
    } else {
      gradesSum += userInput;
      repeat = false;
    }
  
  } while (repeat);
}

alert(`Tu promedio es ${ (gradesSum / numberOfSubjects).toFixed(2) }`);