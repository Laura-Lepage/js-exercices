let monTxt = `Hello World !`
let maDiv = document.querySelector("div") //querySelector sélectionne que le premier div - fonctionne comme en CSS pour cibler 

maDiv.innerHTML = monTxt //.innerHTML est une propriété (définit l'objet) != de méthode (ce qu'on peeut faire avec l'objet)
                         // mettre += s'il y a du contenu dans la div pour rajouter car = le remplacera