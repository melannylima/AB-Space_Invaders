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
  next.setAttribute("id", "start")
  // give button text
  next.innerHTML = "NEXT"
  // attach button to instruction screen
  inst.appendChild(next)
}

const startButton = document.getElementById("start")
startButton.addEventListener("click", instructions)
