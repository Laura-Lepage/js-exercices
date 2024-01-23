let myTitle = document.querySelector("h1")
let time = new Date()

let day = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

let heure = time.getHours()
let minute = time.getMinutes()

myTitle.innerHTML = day[time.getDay()] + " " + heure + " heure(s) et " + minute + " minute(s)"
