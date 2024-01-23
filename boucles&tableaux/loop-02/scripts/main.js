let tableau1 = [10, 55, 352, 4]
let tableau2 = [543, 40, 0, 34]
let somme = 0

for (let i=0; i<4; i++){
    somme += (tableau1[i] * tableau2[i])
    document.querySelector("div").innerHTML = somme 
}