console.log("Beach Invaders!");

// This game has 3 rounds and has to take the input of 2 players
// There has to be several screens: start, instructions, play, winner screen

// start to instructions transition

const instructions = () => {
  // Remove start screen
  const startScreen = document.getElementById("toStart");
  startScreen.remove();

  // create title element for the instruction screen
  let screenH = document.createElement("H1");
  // Add the actual title to the title element
  screenH.innerHTML = "Instructions:"

  // create unordered list
  const instList = document.createElement("UL")
  // create list items
  const firstL = document.createElement("LI")
  firstL.innerHTML = "Example"
  const secL = document.createElement("LI")
  secL.innerHTML = "Example step 2"
  // append list items to unordered list
  instList.appendChild(firstL)
  instList.appendChild(secL)

  // get the instruction screen
  const inst = document.getElementById("inst")

  // attach the title to the instruction screen
  inst.appendChild(screenH)
  // attach unordered list to instruction screen
  inst.appendChild(instList)

  // create next button
  const next = document.createElement("BUTTON")
  // give name to button
  next.setAttribute("id", "next")
  // give button text
  next.innerHTML = "NEXT"
  // attach button to instruction screen
  inst.appendChild(next)

  const nextButton = document.getElementById("next")
  nextButton.addEventListener("click", letsPlay)
}

// instructions to play transition

const letsPlay = () => {
  // remove instructions screen
  const inst = document.getElementById("inst")
  inst.remove()
  //change screen
  const back = document.getElementById("gamezone")
  back.setAttribute("id", "level")

  // receive name for players 1 & 2
  const player1 = document.createElement("INPUT")
  const playerb1 = document.createElement("BUTTON")
  const playZone = document.getElementById("name")
  player1.setAttribute("type", "text")
  playerb1.setAttribute("id", "pb1")
  playerb1.setAttribute("class", "pb")
  player1.setAttribute("placeholder", "Player 1 Name")
  playerb1.innerHTML = "submit"
  player1.setAttribute("id", "p1")
  playZone.appendChild(player1)
  playZone.appendChild(playerb1)
  playerb1.addEventListener("click", player1Values)

  const player2 = document.createElement("INPUT")
  const playerb2 = document.createElement("BUTTON")
  player2.setAttribute("type", "text")
  playerb2.setAttribute("id", "pb2")
  playerb2.setAttribute("class", "pb")
  player2.setAttribute("placeholder", "Player 2 Name")
  playerb2.innerHTML = "submit"
  player2.setAttribute("id", "p2")
  playZone.appendChild(player2)
  playZone.appendChild(playerb2)
  playerb2.addEventListener("click", player2Values)

  // impact
}

// create players and allow them to move and "shoot"
class Player {
  constructor(name) {
    this.health = 100;
    this.name = name
    this.score = 0
  }
  move() {
    console.log("move");
  }
  shoot() {
    console.log("something");
  }
}

const player1Values = () => {
  const pName1 = document.getElementById("p1").value;
  const p1 = new Player(pName1)

  const char = document.getElementById("p1")
  const charB = document.getElementById("pb1")
  char.remove()
  charB.remove()

  // demonstrate score for player 1
  const stat = document.getElementById("p1score")
  stat.setAttribute("class", "stat1")
  const name = document.createElement("H2")
  name.innerHTML = p1.name
  stat.appendChild(name)

  const score = document.createElement("H3")
  score.innerHTML = `Score: ${p1.score}`
  stat.appendChild(score)

  const life = document.createElement("H3")
  life.innerHTML = `Health: ${p1.health}`
  stat.appendChild(life)
}

const player2Values = () => {
  const pName2 = document.getElementById("p2").value;
  const p2 = new Player(pName2)

  const char = document.getElementById("p2")
  const charB = document.getElementById("pb2")
  char.remove()
  charB.remove()

  // demonstrate score for player 2
  const stat2 = document.getElementById("p2score")
  stat2.setAttribute("class", "stat2")
  const name = document.createElement("H2")
  name.innerHTML = p2.name
  stat2.appendChild(name)

  const score2 = document.createElement("H3")
  score2.innerHTML = `Score: ${p2.score}`
  stat2.appendChild(score2)

  const life2 = document.createElement("H3")
  life2.innerHTML = `Health: ${p2.health}`
  stat2.appendChild(life2)
}

const startButton = document.getElementById("start")
startButton.addEventListener("click", instructions)
