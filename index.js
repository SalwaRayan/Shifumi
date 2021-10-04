var imageIA = document.getElementById("IA")
var img = ["https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg", 
            "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg",
            "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg"]
// var img = []
// img[0] = "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg"
// img[1] = "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg"
// img[2] = "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg"

var imageNous = document.getElementById("Nous")

var pierre = document.getElementById("pierre")
var feuille = document.getElementById("feuille")
var cideaux = document.getElementById("cideaux")

function onButtonClickPierre(){
  imageNous.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
  for (var i = 0; i < img.length; i++){
    imageIA = Math.floor(Math.random()*img.length)
  }
}
function onButtonClickFeuille(){
  imageNous.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
  for (var i = 0; i < img.length; i++){
    imageIA = Math.floor(Math.random()*img.length)
  }
}
function onButtonClickCideaux(){
  imageNous.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
  for (var i = 0; i < img.length; i++){
    imageIA = Math.floor(Math.random()*img.length)
  }
}



