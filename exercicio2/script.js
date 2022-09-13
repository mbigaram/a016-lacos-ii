// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**
let num = Number(prompt("Digite um numero:"))
let div = [1,2,3,4,5,6,7,8,9,10]
for (let i in div){
    //console.log (num*i+num)
    console.log (`${Number(i)+1} X ${num} = ${i*num+num}` )
}
