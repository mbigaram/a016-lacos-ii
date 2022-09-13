// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


// **Utilize o for...of para resolver**
// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// // //saída
// // "1 - Rússia"
// // "2 - Canadá"
// // "3 - China"
// // "4 - EUA"
// // "5 - Brasil"
// // ```

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
for (let i in maioresPaises){    
    for (let r of i){
        console.log (Number(r)+1),
        console.log(maioresPaises[i])
    }
}

const maioresP = ["Rússia", "Canadá", "China", "EUA", "Brasil"];


    for(let i in maioresP){

     //console.log (`ranking ${i} é ${maioresPaises[i]}`)
     console.log (`O ranking é ${Number(i)+1}º ${maioresP[i]} `)
    }
