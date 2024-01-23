let utilisateur = {
    nom: "Lepage",
    prenom: "Laura",
    age: 35
}

document.body.innerHTML = `<h1>${utilisateur.nom} ${utilisateur.prenom} <sub>${utilisateur.age}</sub></h1>`