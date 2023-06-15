//a partir do valor de exemplo printar o maior e menor valor e suas respectivas posicoes no valor

//valor de entrada let valor = [3,5,6,2,4,8,9,14];

//exemplo saida
//o maior valor é 14 e esta na posicao 7
//o menor valor e 2 e esta na posição 3

let valor = [3,5,6,2,4,8,9,14];
let maior = valor[0];
let menor = valor[0];
let posicao1 = 0;
let posicao2 = 0;

for(let i=0; i<valor.length;i++){
    
    if(valor[i]>maior){
    maior = valor[i];
        posicao1 = i;
   
    }
    for(let j=0; j<valor.length;j++){
        
    if(valor[j]<menor){
        menor = valor[j];
        posicao2 = j;
        
    }
    }

}
console.log("o maior valor é",maior,"e esta na posição",posicao1);
console.log("o menor valor é",menor,"e esta na posição",posicao2);
