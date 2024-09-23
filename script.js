let Rock = false
let Paper = false
let Scissors = false
let player_score =  0
let  computer_score = 0
let Round = 0

document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
    document.getElementById("player_score").innerHTML = "player score:  " + player_score

let jajaken = {
    get value() {
      return Math.floor(Math.random() * 3);
    }
  }

  function ROCK(){
    let jaja = jajaken.value
    let rock = 0
    let paper = 1
    let scissors = 2
    Rock = true
    if (Rock == true) {
        Scissors = false
        Paper = false
    }

    if (jaja == rock && Rock == true) {
      document.getElementById("RPS").innerHTML = "Rock vs Rock, It's a Tie!"
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }
  
     if (jaja == paper && Rock == true) {
      document.getElementById("RPS").innerHTML = "Paper covers Rock, Computer wins"
      computer_score += 1
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }

     if (jaja == scissors && Rock == true) {
      document.getElementById("RPS").innerHTML = "Rock crushes Scissors, Player wins"
      player_score  += 1
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }
      
     if (computer_score == 6){
         computer_score = 0
         player_score = 0
         Round += 1
         document.getElementById("Round").innerHTML ="Rounds: " + Round 
     }

      if (player_score == 6){
         computer_score = 0
         player_score = 0
         Round += 1
         document.getElementById("Round").innerHTML ="Rounds: " + Round 
     }
}

function PAPER(){
  let jaja = jajaken.value
    let rock = 0
    let paper = 1
    let scissors = 2
  Paper = true
    if (Paper == true) {
        Scissors = false
        Rock = false
    }

    if (jaja == rock && Paper == true) {
      document.getElementById("RPS").innerHTML = "Paper covers Rock, Player wins"
      player_score  += 1
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }

     if (jaja == paper && Paper == true) {
      document.getElementById("RPS").innerHTML = "Paper vs Paper, It's a Tie!"
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }

     if (jaja == scissors && Paper == true) {
      document.getElementById("RPS").innerHTML = "Scissors  cuts Paper, Computer wins"
      computer_score += 1
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }
    
     if (computer_score == 6){
         computer_score = 0
         player_score = 0
         Round += 1
         document.getElementById("Round").innerHTML ="Rounds: " + Round 
     }

      if (player_score == 6){
         computer_score = 0
         player_score = 0
         Round += 1
         document.getElementById("Round").innerHTML ="Rounds: " + Round 
     }
}

function SCISSORS(){
  let jaja = jajaken.value
    let rock = 0
    let paper = 1
    let scissors = 2
  Scissors = true
    if (Scissors == true) {
        Rock = false
        Paper = false
    }

    if (jaja == rock && Scissors == true) {
      document.getElementById("RPS").innerHTML = "Rock smashes Scissors, Computer wins"
      computer_score += 1
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }

     if (jaja == paper && Scissors == true) {
      document.getElementById("RPS").innerHTML = "Scissors cuts Paper, Player wins"
      player_score  += 1
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }

     if (jaja == scissors && Scissors == true) {
      document.getElementById("RPS").innerHTML = "Scissors vs Scissors, It's a Tie!"
      document.getElementById("comp_score").innerHTML = "computer score:  " + computer_score
      document.getElementById("player_score").innerHTML = "player score:  " + player_score
     }

     if (computer_score == 6){
         computer_score = 0
         player_score = 0
         Round += 1
         document.getElementById("Round").innerHTML ="Rounds: " + Round 
     }

      if (player_score == 6){
         computer_score = 0
         player_score = 0
         Round += 1
         document.getElementById("Round").innerHTML ="Rounds: " + Round 
     }
    }
