var imageNous = document.getElementById("Nous")
var result = document.getElementById("result")
var resultScore = document.getElementById("res-score")
var gameScore = document.getElementById("gamescore")
var countYou = 0
var countIA = 0

function onButtonClickPierre(){
  imageNous.setAttribute("src", "https://img-premium.flaticon.com/png/512/1867/premium/1867572.png?token=exp=1633447815~hmac=cbe9927961604b80bd945d6341de1374")
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
    result.innerHTML = "That's great! You won!"
  } else if (countYou < 3 && countIA >= 3){
    countYou = 0
    countIA = 0
    result.innerHTML = "Boo-hoo! You lose!"
  }
  setImageIA(random)
  score()
}

function onButtonClickFeuille(){
  imageNous.setAttribute("src", "https://img-premium.flaticon.com/png/512/3152/premium/3152875.png?token=exp=1633447333~hmac=ff774f49d217bc0e70a0b440e44edec5")
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
  imageNous.setAttribute("src", "https://img-premium.flaticon.com/png/512/732/premium/732457.png?token=exp=1633447365~hmac=c9a1754ee055a5089779e878d6969d33")
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
    result.innerHTML = "That's great! You won!"
  } else if (countYou < 3 && countIA >= 3){
    countYou = 0
    countIA = 0
    result.innerHTML = "Boo-hoo! You lose!"
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
    imageIA.setAttribute("src", "https://img-premium.flaticon.com/png/512/1867/premium/1867572.png?token=exp=1633447815~hmac=cbe9927961604b80bd945d6341de1374")
  } else if (num === 2) {
    imageIA.setAttribute("src", "https://img-premium.flaticon.com/png/512/3152/premium/3152875.png?token=exp=1633447333~hmac=ff774f49d217bc0e70a0b440e44edec5")
  } else {
    imageIA.setAttribute("src", "https://img-premium.flaticon.com/png/512/732/premium/732457.png?token=exp=1633447365~hmac=c9a1754ee055a5089779e878d6969d33")
  }

}

function score(){
  resultScore.innerHTML = `Your score is ${countYou} while your opponent's is ${countIA}`
}

