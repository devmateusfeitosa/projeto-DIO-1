let nomeHeroi = "darkhunter"
let xpHeroi = 100

let matouGoblin = false

let quantAbatida = 3
let xpGoblin = 100
let xpGanho = (xpGoblin * quantAbatida)

if(matouGoblin){
    xpHeroi += xpGanho
}else{
    console.log("não matou nehum Goblin")
}
console.log("XP totais: " + xpHeroi)