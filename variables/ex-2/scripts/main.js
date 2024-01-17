let number = 10
document.querySelector("p").innerHTML = number


let myButtonPlus = document.querySelector("#add")
myButtonPlus.addEventListener('click', function(){
    document.querySelector("p").innerHTML = number + 1;
    
    
    

})
let myButtonMinus = document.querySelector("#remove")
myButtonMinus.addEventListener('click', function(){
    document.querySelector("p").innerHTML = number - 1;
    

})
