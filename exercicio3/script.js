const resposta = prompt ("Escreva aqui sua nacionalidade").toLocaleLowerCase()
let nacionalidade = ["brasileira" , "argentina", "uruguaia", "chilena", "colombiana"]

 if (resposta === nacionalidade[0]) {
     console.log("Nacionalidade encontrada")
 } 
 else if (resposta === nacionalidade[1]) {
    console.log("Nacionalidade encontrada")
 } 
 else if (resposta === nacionalidade[2]) {
    console.log("Nacionalidade encontrada")
 }
 else if (resposta === nacionalidade[3]) {
    console.log("Nacionalidade encontrada")
 }
 else if (resposta === nacionalidade[4]) {
    console.log("Nacionalidade encontrada")
 }else {
     console.log("nacionalidade não encontrada")
 }