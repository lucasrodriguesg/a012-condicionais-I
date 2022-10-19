//Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

const resposta = prompt ("Escreva aqui sua nacionalidade").toLocaleLowerCase()
let nacionalidade = ["brasileira" , "argentina", "uruguaia", "chilena", "colombiana"]

//Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.


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