//Simon Says
console.log('Simon Says');


//creazione e visualizzazione dell'array di numeri casuali da ricordare
const numbersToGuess = [];
getArrayOfRandomInts(1, 100, 5)

console.log(numbersToGuess);

alert('I numeri da ricordare sono: ' + numbersToGuess)


//parte un timer di 30 secondi
const countDownDOMElement = document.getElementById('count-down')
// console.log(countDownElement)

//inizializiamo il countdown
// let counter = 30
// countDownDOMElement.innerHTML = counter

// let idInterval = setInterval(onInterval, 1000)


//creazione dell'array di numeri scelti dall'utente
const userNumbers = [];
askNumbers(1, 100, 5);

console.log(userNumbers);


//creazione dell'array di confronto tra i due array
//in questo array sono presenti solo i numeri scritti correttamente dall'utente
const solutionNumbers = [];

for (i = 0; i < userNumbers.length; i++){
    const currentNumber = userNumbers[i];

    if(numbersToGuess.includes(currentNumber)){
        solutionNumbers.push(currentNumber);
    }
}

console.log(solutionNumbers);

const pointsDOMElement = document.getElementById('points')
pointsDOMElement.innerHTML = 'Hai totalizzato ' + solutionNumbers.length + ' punti su 5'




// !!!!!-----FUNZIONI-----!!!!!



// chiedi all'utente tot numeri ('length') che vanno da min a max (non copreso)
function askNumbers(min, max, length){
    while (userNumbers.length < length){
        const n = prompt('Inserisci uno dei numeri visualizzati in precedenza')
        console.log(n);
        //SE quello inserito dall'utente è un numero E numero>=min E numero<max E il numero non è già presente nell'array
        //      PUSHA i numeri all'interno dell'array
        if(isNaN(n) === false && n >= min && n < max && userNumbers.includes(parseInt(n)) === false){
            userNumbers.push(parseInt(n));
        } 
    }
}


//produce l'intervallo del countdown, il quale comincia con l'inizializzazione del counter e finisce a 0
// function onInterval() {
//     counter--

// 	if (counter === 0) {
// 		clearInterval(idInterval)
//         countDownDOMElement.innerHTML = '';
// 	} else {
// 		countDownDOMElement.innerHTML = counter
// 	}
// }

//produce un array di tot numeri casuali ('length') compresi tra min e max (non compreso)
function getArrayOfRandomInts(min, max, length){
    //FINCHE non sono presenti tot numeri da indovinare
    while (numbersToGuess.length < length) {
        //estrai numeri casuali da min a max
        const n = getRandomInt(min, max);

        console.log(n);
        
        //se (l'array NON include n)
        // pushamo n all'interno dell'array
        if (numbersToGuess.includes(n) === false){
            numbersToGuess.push(n)
        }
    }
}

// numeri casuali
function getRandomInt(min, max){
    return parseInt(Math.random() * (max - min) + min);
}