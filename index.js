var imageNous = document.getElementById("Nous")
var result = document.getElementById("result")
var resultScore = document.getElementById("res-score")
var gameScore = document.getElementById("gamescore")
var countYou = 0
var countIA = 0

function onButtonClickPierre(){
  imageNous.setAttribute("src", "./NicePng_cartoon-rock-png_951765.png")
  var random = randomImage()
  if (random === 1){
    result.innerHTML = "It's a draw! Try again"
  } else if (random === 2){
    result.innerHTML = "You lose! Maybe next time"
    countIA += 1
  } else {
    result.innerHTML = "You win! Congratulation"
    countYou += 1
  }
  if (countYou >= 3 && countIA < 3){
    countYou = 0
    countIA = 0
    result.innerHTML = ""
    gameScore.innerHTML = "That's great! You won!"
  } else if (countYou < 3 && countIA >= 3){
    countYou = 0
    countIA = 0
    result.innerHTML = ""
    gameScore.innerHTML = "Boo-hoo! You lose!"
  }
  setImageIA(random)
  score()
}

function onButtonClickFeuille(){
  imageNous.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/010/792/121/non_2x/text-box-cartoon-free-png.png")
  var random = randomImage()
  if (random === 1){
    result.innerHTML = "You win! Congratulation"
    countYou += 1
  } else if (random === 2){
    result.innerHTML = "It's a draw! Try again"
  } else {
    result.innerHTML = "You lose! Maybe next time"
    countIA += 1
  }
  if (countYou >= 3 && countIA < 3){
    countYou = 0
    countIA = 0
    result.innerHTML = ""
    gameScore.innerHTML = "That's great! You won!"
  } else if (countYou < 3 && countIA >= 3){
    countYou = 0
    countIA = 0
    result.innerHTML = ""
    gameScore.innerHTML = "Boo-hoo! You lose!"
  }
  setImageIA(random)
  score()
}

function onButtonClickCiseaux(){
  imageNous.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/5604/5604391.png")
  var random = randomImage()
  if (random === 1){
    result.innerHTML = "You lose! Maybe next time"
    countIA += 1
  } else if (random === 2){
    result.innerHTML = "You win! Congratulation"
    countYou += 1
  } else {
    result.innerHTML = "It's a draw! Try again"
  }
  if (countYou >= 3 && countIA < 3){
    countYou = 0
    countIA = 0
    result.innerHTML = ""
    gameScore.innerHTML = "That's great! You won!"
  } else if (countYou < 3 && countIA >= 3){
    countYou = 0
    countIA = 0
    result.innerHTML = ""
    gameScore.innerHTML = "Boo-hoo! You lose!"
  }
  setImageIA(random)
  score()
}


function randomImage(){
  min = 1
  max = 3
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function setImageIA(num){
  var imageIA = document.getElementById("IA")

  if (num === 1){
    //  1 == Pierre
    imageIA.setAttribute("src", "./NicePng_cartoon-rock-png_951765.png")
  } else if (num === 2) {
    // 2 == Feuille
    imageIA.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/010/792/121/non_2x/text-box-cartoon-free-png.png")
  } else {
    // 3 == Ciseaux
    imageIA.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/5604/5604391.png")
  }

}

function score(){
  resultScore.innerHTML = `Your score is ${countYou} while your opponent's is ${countIA}`
}

