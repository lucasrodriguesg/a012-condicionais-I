//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
let idade = prompt ("Sua idade")
let ensinoMedio = prompt ("Terminou o EM?")
let cursandoFaculdade = prompt ("Começou uma faculdade?")

//Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira
//Crie um `if` para cada variável, checando as seguintes afirmacões:

//Se a pessoa tem 18 anos ou mais;
if (idade >= 18) {
    console.log("Você é maior de idade!")
}else{
	console.log("Você é menor de idade!")
}

//Se a pessoa terminou o ensino médio;
if (ensinoMedio === "sim" ) {
    console.log("Parabéns por terminar o EM!")
}else{
    console.log("Estude bastante!")
}

//Se a pessoa NÃO está cursando alguma faculdade;
if (cursandoFaculdade === "sim") {
    console.log("Espero que goste do curso")
}else{
    console.log("Pense bem no curso!")
}