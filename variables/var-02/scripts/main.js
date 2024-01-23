let number = 10
let monP = document.querySelector("p")

monP.innerHTML = number

let myButtonPlus = document.querySelector("#add")
myButtonPlus.addEventListener('click', function(){
    monP.innerHTML = number++;
})
let myButtonMinus = document.querySelector("#remove")
myButtonMinus.addEventListener('click', function(){
    monP.innerHTML = number--;
})
