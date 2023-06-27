var prompt = require('prompt-sync')();

/*
o cardapio de uma lanchonet é o seguinte:

Especificação   código  QTD Preço

Cachorro Quente 100      X  R$ 1,20
Bauro Simples   101      X  R$ 1,30
Bauro com ovo   102      X  R$ 1,50
Hambúrguer      103      X  R$ 1,20
Cheeseburguer   104      X  R$ 1,30
Refrigerante    105      X  R$ 1,00

Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido.
O pedido é encerrado quando o cliente digitar o código 999
controlar para que o cliente só possa digitar o codigo do menu, caso contrario (código invalido).

cod 100     15  115,00
cod 101     10  100,00

valor total 215,00
*/


console.log('Códigos:');
console.log('Cachorro Quente: 100');
console.log('Bauro Simples = 101');
console.log('Bauro com ovo = 102');
console.log('Hambúrguer = 103');
console.log('Cheeseburguer = 104');
console.log('Refrigerante = 105');
console.log('Digite 999 para finalizar o pedido.')
console.log('');



let codigo = 0;
let i = 0;
let vetor = [];
let quantidadeA = 0

let quantidadeB = 0
let quantidadeC = 0
let quantidadeD = 0
let quantidadeE = 0
let quantidadeF = 0
const a = 1.20
const b = 1.30
const c = 1.50
const d = 1.20
const e = 1.30
const f = 1
let precoA = 0
let precoB = 0
let precoC = 0
let precoD = 0
let precoE = 0
let precoF = 0


let posicaoA = 0
let posicaoB = 0
let posicaoC = 0
let posicaoD = 0
let posicaoE = 0
let posicaoF = 0


let vetorQuantidade_A = [];
let AAA = 0


let vetorQuantidade_B = [];
let BBB = 0


let vetorQuantidade_C = [];
let CCC = 0


let vetorQuantidade_D = [];
let DDD = 0


let vetorQuantidade_E = [];
let EEE = 0


let vetorQuantidade_F = [];
let FFF = 0



do{
    codigo = (Number(prompt(`Porfavor, digite o código do lanche: `)));
    vetor[i] = codigo;
     i++;
     

    if(codigo==100){
        codigo;
        quantidadeA = Number(prompt(`quantos voce quer? `));
        

            if(quantidadeA >=0){
                vetorQuantidade_A[AAA] = quantidadeA
                AAA++;
            precoA = a*quantidadeA;
            posicaoA = i;
            }
            else {
            console.log('quantidade invalida.')
            quantidadeA;

            }

        
    }
    
    else if(codigo==101){
        codigo;
        quantidadeB = Number(prompt(`quantos voce quer? `));
        

            if(quantidadeB >=0){
                vetorQuantidade_B[BBB] = quantidadeB
                BBB++;
            
            precoB = b*quantidadeB;
            posicaoB = i;
            }
            else {
                console.log('quantidade invalida.')
                quantidadeB;
            }

    }

    else if(codigo==102){
        codigo;
        quantidadeC = Number(prompt(`quantos voce quer? `));
        

            if(quantidadeC >=0){
                vetorQuantidade_C[CCC] = quantidadeC
                CCC++;
            
            precoC = c*quantidadeC;
            posicaoC = i;
            }
            else {
            console.log('quantidade invalida.')
            quantidadeC;
            }

    }

    else if(codigo==103){
        codigo;
        quantidadeD = Number(prompt(`quantos voce quer? `));
        

            if(quantidadeD >=0){
                vetorQuantidade_D[DDD] = quantidadeD
                DDD++;
           
            precoD = d*quantidadeD;
            posicaoD = i;
            }
            else {
            console.log('quantidade invalida.')
            quantidadeD;
            }

    }

    else if(codigo==104){
        codigo;
        quantidadeE = Number(prompt(`quantos voce quer? `));
        

            if(quantidadeE >=0){
                vetorQuantidade_E[EEE] = quantidadeE
                EEE++;
           
            precoE = e*quantidadeE;
            posicaoE = i;
            }
            else {
            console.log('quantidade invalida.')
            quantidadeE;
            }

    }

    else if(codigo==105){
        codigo;
        quantidadeF = Number(prompt(`quantos voce quer? `));

            if(quantidadeF >=0){
                vetorQuantidade_F[FFF] = quantidadeF
                FFF++;

            precoF = f*quantidadeF;
            posicaoF = i;
            }
            else {
            console.log('quantidade invalida.')
            quantidadeF;
            }
        
    }

    else if(codigo==999){
        console.log('pedido finalizado.');
        
        break;
    }
    
    else if(codigo!=100 && codigo!=101 && codigo!=102 && codigo!=103 && codigo!=104 && codigo!=105){
        console.log('código inválido, digite outro código ');
        codigo;
    }

}while(codigo != 999);




let A1 = 0;
let A2 = 0
let B1 = 0;
let C1 = 0;
let D1 = 0;
let E1 = 0;
let F1 = 0;
let a4 = 0;



for(let A1 = 0; A1 < vetorQuantidade_A.length; A1++){
    precoA = a*vetorQuantidade_A[A1];
    console.log(`código: 100 quantidade: ${vetorQuantidade_A[A1]} valor R$ ${precoA}`);
    
    for(let A2=0; A2<vetorQuantidade_A.length;A2++){
        a4 = vetorQuantidade_A[A2]*a
        console.log(a4);
    }
    
    
}


for(let B1 = 0; B1 < vetorQuantidade_B.length; B1++){
    precoB = b*vetorQuantidade_B[B1];
    console.log(`código: 101 quantidade: ${vetorQuantidade_B[B1]} valor R$ ${precoB}`);
}

for(let C1 = 0; C1 < vetorQuantidade_C.length; C1++){
    precoC = c*vetorQuantidade_C[C1];
    console.log(`código: 102 quantidade: ${vetorQuantidade_C[C1]} valor R$ ${precoC}`);
}

for(let D1 = 0; D1 < vetorQuantidade_D.length; D1++){
    precoD = d*vetorQuantidade_D[D1];
    console.log(`código: 103 quantidade: ${vetorQuantidade_D[D1]} valor R$ ${precoD}`);
}

for(let E1 = 0; E1 < vetorQuantidade_E.length; E1++){
    precoE = e*vetorQuantidade_E[E1];
    console.log(`código: 104 quantidade: ${vetorQuantidade_E[E1]} valor R$ ${precoE}`);
}

for(let F1 = 0; F1 < vetorQuantidade_F.length; F1++){
    precoF = f*vetorQuantidade_F[F1];
    console.log(`código: 105 quantidade: ${vetorQuantidade_F[F1]} valor R$ ${precoF}`);
}





/*
if(posicaoA){
    console.log(`código: 100 quantidade: ${quantidadeA} valor R$ ${precoA}`);
}
if(posicaoB){
    console.log(`código: 101 quantidade: ${quantidadeB} valor R$ ${precoB}`);
}
if(posicaoC){
    console.log(`código: 102 quantidade: ${quantidadeC} valor R$ ${precoC}`);
}
if(posicaoD){
    console.log(`código: 103 quantidade: ${quantidadeD} valor R$ ${precoD}`);
}
if(posicaoE){
    console.log(`código: 104 quantidade: ${quantidadeE} valor R$ ${precoE}`);
}
if(posicaoF){
    console.log(`código: 105 quantidade: ${quantidadeF} valor R$ ${precoF}`);
}
*/






