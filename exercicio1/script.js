// Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47



let array = [
    [27, 14, 20, 13, 14],
    [11, 15, 12, 18, 19],
    [15, 15, 12, 16, 14],
    [20, 33, 11, 12, 19],
    [13, 13, 24, 15, 10]
]

// for (let i in array){
//     let gols = ("Jogador",Number(i)+1)

//     for (let t of array[i]){
//         gols += t +", "
//     }
//     console.log(gols)
// }

console.log("           1ºT ","2ºT ","3ºT ","4ºT ","5ºT ")
for (let i in array){
        let gols = `Jogador ${Number(i)+1}:| `
       
 for (let e of array[i]){
          
  gols += e +" | "
 }
 console.log (gols)
} 


