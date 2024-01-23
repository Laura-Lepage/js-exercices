let numberArray = [4, 60, 88, 127, 36, 95, 44, 55]
let sum = 0


for (let i=0; i<numberArray.length; i++){
    document.querySelector("ul").innerHTML += //+= sert à rajouter sans écraser le précédent
    ` <li>${numberArray[i]}</li> `

    sum += numberArray[i];
}

let myBouton = document.querySelector("button")
myBouton.addEventListener('click', function(){
    document.querySelector("p").innerHTML = sum/numberArray.length 
})