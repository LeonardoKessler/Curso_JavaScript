/*
em uma competicao de salto em distancia cada atleta tem direito a cinco saltos.
No final da serie de saltos de cada atleta, o melhor e o pior resultados sao eliminados.
O seu resultado fica sendo a media dos tres valores restantes.
Voce deve fazer um programa que receba o nome e as cinco distancias alcancadas pelo atleta em seus saltos e
depois informe a media dos saltos conforme a descricao acima informada (retirar o melhor e o pior salto
e depois calcular a media).
Faca uso de uma lista para armazenar os saltos.
Os saltos sao informados na ordem da execucao, por tanto nao sao ordenados.

a saida do programa deve ser conforme o exemplo abaixo:

Atleta: Rodrigo Curvêllo

Primeiro salto: 6.5 m
Segundo salto: 6.1 m
Terceiro salto: 6.2 m
quarto salto: 5.4 m
quinto salto: 5.3 m

Melhor salto: 6.5 m
Pior salto: 5.3 m
Media dos demais saltos: 5.9 m

Resultado final:
Rodrigo Curvêllo: 5.9 m
*/

var prompt = require('prompt-sync')();

//variaveis nome e valores dos saltos.
let nome = prompt('Atleta: ');
let vetor = [];
let i = 0;
let salto = 0;

do{
    salto = Number(prompt(`salto ${i+1}: `));
    vetor[i] = salto;
    i++;
}while(salto != vetor[4]);

//variaveis do maior valor e menor valor do vetor.
let maiorSalto = 0;
let menorSalto = 0;
let posicaoMaior = vetor[0];
let posicaoMenor = vetor[0];

for(let j=0; j<vetor.length; j++){
    
    if(vetor[j]>maiorSalto){
        
        maiorSalto = vetor[j];
        posicaoMaior = j;
    }

    for(let n=0; n<vetor.length; n++){
    
    if(vetor[n]<vetor[j]){
        
        menorSalto = vetor[n];
        posicaoMenor = n;
    }
}

}
//variaveis que excluem o menor e maior valor do vetor. Calculo da média. 
const excluirMenor = vetor.splice(posicaoMenor, 1);
const excluirMaior = vetor.splice(posicaoMaior, 1);
const calculo = (vetor[0]+vetor[1]+vetor[2])/3;

//Finalização.
console.log(`Melhor salto: ${maiorSalto} m`);
console.log(`Pior salto: ${menorSalto} m`);
console.log(`média dos demais saltos: ${calculo} m`);
console.log('resultado final:');
console.log(`${nome}: ${calculo} m`);
