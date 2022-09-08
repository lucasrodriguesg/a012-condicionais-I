let idade = prompt ("Sua idade")
let ensinoMedio = prompt ("Terminou o EM?")
let cursandoFaculdade = prompt ("Começou uma faculdade?")

if (idade >= 18) {
    console.log("Você é maior de idade!")
}else{
	console.log("Você é menor de idade!")
}

if (ensinoMedio === "sim" ) {
    console.log("Parabéns por terminar o EM!")
}else{
    console.log("Estude bastante!")
}

if (cursandoFaculdade === "sim") {
    console.log("Espero que goste do curso")
}else{
    console.log("Pense bem no curso!")
}