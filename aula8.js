// let preco = 1.99
// for(let i = 0; i<=50; i++){
//     let produto = (i*preco);
//     console.log(i, produto);
// }

var prompt = require('prompt-sync')();


// let idade = Number(prompt('Qual sua idade? '));

// let a = 1
// let b  = 3
// let soma = a + b
// if (idade > 18){
//     console.log('Voce tem acesso');
//     console.log(idade);
//     console.log(soma);
// }

/*
faca um programa que calcule o valor total investido por um colecionador
em sua colecao de CDs e o valor medio gasto em cada um deles.
o usuario devera informar a quantidade de CDs e o valor para cada um.
*/


/*
let cd = Number(prompt('quantos CDs voce tem? '));
let vetor = Array(cd);
let media = 0;
let total = 0;

for(let i=0; i<vetor.length ; i++){
   
    vetor[i] = Number(prompt('valor CD? '));
   
    total = (vetor[i]+total);

}

media = Number(total/vetor.length);

console.log("o valor total investido foi de:", total,"e o valor medio pago em cada cd foi de:", media);

*/

/*
faca um programa que calcule o valor total investido por um colecionador
em sua colecao de CDs e o valor medio gasto em cada um deles.
o usuario devera informar a quantidade de CDs e o valor para cada um.
*/


/*
let quantidade = Number(prompt('quantos CDs voce tem?' ));
let vetor = Array(quantidade);
let total = 0;
let medio = 0;

for(let i=0; i<vetor.length; i++){
    vetor[i] = Number(prompt('qual o valor do CD?' ));
    total = total+vetor[i];
    
}
medio = total/quantidade;
    console.log("valor total investido",total,".Valor medio gasto", medio);
    */
    


/*
desenvolva um gerador de tabuada, capaz de gerar a tabuada
de qualquer numero inteiro entre 1 a 10.
o usuario deve informar de qual numero ele deseja ver a tabuada.
a saida deve ser conforme o exemplo a baixo:
tabuada de 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/

//   let numero = Number(prompt('tabuada de: '));


// for(let i=0; i<=10; i++){
    
//     switch(numero){
//     case 0:
//         let a = (0*i);
//         console.log(`0 x ${i} = ${a}`);
//         break;
//     case 1:
//         let b = (1*i);
//         console.log(`1 x ${i} = ${b}`);
//         break;
//     case 2:
//         let c = (2*i);
//         console.log(`2 x ${i} = ${c}`);
//         break;
//     case 3:
//         let d = (3*i);
//         console.log(`3 x ${i} = ${d}`);
//         break;
//     case 4:
//         let e = (4*i);
//         console.log(`4 x ${i} = ${e}`);
//         break;
//     case 5:
//         let f = (5*i);
//         console.log(`5 x ${i} = ${f}`);
//         break;
//     case 6:
//         let g = (6*i);
//         console.log(`6 x ${i} = ${g}`);
//         break;
//     case 7:
//         let h = (7*i);
//         console.log(`7 x ${i} = ${h}`);
//         break;
//     case 8:
//         let x = (8*i);
//         console.log(`8 x ${i} = ${x}`);
//         break;
//     case 9:
//         let j = (9*i);
//         console.log(`9 x ${i} = ${j}`);
//         break;
//     case 10:
//         let k = (10*i);
//         console.log(`10 x ${i} = ${k}`);
//         break;
//     }
// }



// let num = Number(prompt(' digite um numero de 1 a 9 '));
 
// for(let m = 0; m <10; m++){
//     console.log(`${num} X ${m+1} = ${num*(m+1)}`)
// }

/*
faca um programa que peca dois numeros, base e expoente,
calcule e mostre o primeiro numero elevado ao segundo numero.
nao utilize a funcao de potencia da linguagem.


let base = Number(prompt('numero base: '));
let expoente = Number(prompt('expoente '));
let resultado = 1

for(let i=0; i<expoente; i++){
    resultado = resultado*base;
    
}

console.log(resultado);

*/

/*
O departamento estadual de meteorologia lhe contratou para desenvolver um programa que leia as
temperaturas de um conjunto indeterminado de temperaturas.
Informe a menor e a maior temperatura e a média delas.
*/

/*
let temperatura = Number(prompt('quantas temperaturas voce gostaria de registrar?: '));
let vetor = Array(temperatura);
let media = 0

for(let i=0; i<vetor.length; i++){
    vetor[i] = Number(prompt('temperatura: '));
    media = (vetor[i]+media);
    
}
media = Number(media/vetor.length);

let maiorTemperatura = vetor[0];
let menorTemperatura = vetor[0];

for(let j=0; j<vetor.length;j++){
    
    if(vetor[j]>maiorTemperatura){
    maiorTemperatura = vetor[j];
        }
    
for(let a=0; a<menorTemperatura; a++){    
    if(vetor[a]<menorTemperatura){
            menorTemperatura = vetor[a];
        }
    }    
    
}
console.log(`a menor temperatura foi ${menorTemperatura} e a maior temperatura foi de ${maiorTemperatura}, a média das temperaturas foram de: ${media}`);
*/

/*
O sr. Manoel Joaquim expandiu seus negocios para além dos negocios de 1,99 e agora possui uma loja de conveniencias.
faça um programa que implemente uma caixa registradora rudimentar. O programa devera receber um numero desconhecido
de valores referentes aos preços das mercadorias.
um valor 0 deve ser informado pelo operador para indicar o final da compra.
O programa deve entao mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para entao
calcular e mostrar o valor do troco.
apos esta operacao, o programa devera voltar ao ponto inicial, para registrar a proxima compra.
A saida deve ser conforme o exemplo abaixo:

Lojas Tabajara
produto 1: R$ 2.20
produto 2: R$ 5.80
produto 3: R$ 0
total: R$ 9.00
dinheiro: R$ 20.00
troco: R$ 11.00
    
    com a entrada de 3 valores ordenalos de forma crescente.
*/

let produto = Number(prompt('valor do produto: R$ '));

do{
    if(produto == 0){
        break;
    }
    if(produto <=100000){
      let conta =  produto+produto;
    }
} while