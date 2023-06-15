// //valores formulas
// const a = 3;
// const b = 4;
// const c = 5.2;
// const e = 3.14159;
// //area do triangulo retangulo que tem A por base e C por altura
// console.log((a*c)/2);

// //a area do circulo de raio C. (pi = 3,14159)
// console.log(e*c**2);
// //a area do trapezio que tem A e B por base e C por altura
// console.log((a+b)*c/2);
// //a area do quadrado que tem lado B
// console.log(b**2);
// //a area do retangulo que tem lados A e B
// console.log(a*b);

//Verdadeiro ou Falso
// const numero = 6;
// if(numero%2 ==0){
//     console.log("par");
// }
// else{
//     console.log("impar");
// }

//atividade imc
// const imc = 40;
// if(imc>=0&&imc<=18.5){
//     console.log("magreza");
// }
// else if(imc>=18.5&&imc<=24.9){
//     console.log("normal");
// }
// else if(imc>=24.9&&imc<=29.9){
//     console.log("sobrepeso");
// }
// else if(imc>=29.9&&imc<=34.9){
//     console.log("obesidade grau I");
// }
// else if(imc>=34.9&&imc<=40){
//     console.log("obesidade grau II");
// }
// else if(imc>40){
//     console.log("obesidade grau III");
// }



// 0 - 400.00  15%
// 400.01 - 800.00     12%
//800.01 - 1200.00    10%
// 1200.01 - 2000.00   7%
// acima de 2000.00     4%

//entrada
//salario com ponto flutuante

//exemplo de saida
//novo salario 460
//reajuste ganho 60
//em percentual 15%

const salario = 1201;

if(salario>=0&&salario<=400.00){
    const contaA = ((salario*15)/100);
    const salarioAtualA = (salario+contaA);
    console.log("novo salario: R$",salarioAtualA,"reajuste ganho: R$",contaA,"em percentual 15%.");
}
else if(salario>=400.00&&salario<=800){
    const contaB = ((salario*12)/100);
    const salarioAtualB = (contaB+salario);
    console.log("novo salario: R$",salarioAtualB,"reajuste ganho: R$",contaB,"em percentual 12%.");
}
else if(salario>=800&&salario<=1200.00){
    const contaC = ((salario*10)/100);
    const salarioAtualC = (contaC+salario);
    console.log("novo salario: R$",salarioAtualC,"reajuste ganho: R$",contaC,"em percentual 10%.");
}
else if(salario>=1200&&salario<=2000.00){
    const contaD = ((salario*7)/100);
    const salarioAtualD = (salario+contaD);
    console.log("novo salario: R$",salarioAtualD,"reajuste ganho: R$",contaD,"em percentual 7%.");
}
else if(salario>=2000){
    const contaE = ((salario*4)/100);
    const salarioAtualE = (salario+contaE);
    console.log("novo salario: R$",salarioAtualE,"reajuste ganho: R$",contaE,"em percentual 4%.");
}

