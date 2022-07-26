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
  const story = document.create
  const firstL = document.createElement("LI")
  firstL.innerHTML = "Use your left and right arrow keys or a and d keys to move left and right"
  const secL = document.createElement("LI")
  secL.innerHTML = "Use W key or up arrow to shoot!"
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
  constructor() {
    this.health = 100;
    this.name = ""
    this.score = 0
    this.count = 0
  }
  move() {
    console.log(`move ${this.name}`);
    const coconut = document.createElement("DIV")
    coconut.setAttribute("id", "coconut")
    coconut.innerHTML = '<img src="images/coconuts2.png" />';
    const play = document.getElementById("play")
    play.appendChild(coconut)

    makeBirds()


    window.addEventListener("keydown", function cMove() {
      switch(event.code) {
        case "KeyA":
        case "ArrowLeft":
          moveLeft()
          break;
        case "KeyD":
        case "ArrowRight":
        moveRight()
          break;
      }
    })
    coconut.style.left = "46.5vw"
    function moveLeft() {
        coconut.style.left = parseInt(coconut.style.left) - 5 + "vw";
    }
    function moveRight() {
        coconut.style.left = parseInt(coconut.style.left) + 5 + "vw";
    }

    setTimeout(playBall(), 30000)

  }
  shoot() {
    console.log("something");

    window.addEventListener("keydown", function cShoot() {
      switch(event.code) {
        case "KeyW":
        case "ArrowUp":
          coco()
          break;
      }
    })
  }
}

const p1 = new Player()
const p2 = new Player()

const player1Values = () => {
  const pName1 = document.getElementById("p1").value;
  p1.name = pName1

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

  playBall()
}

const player2Values = () => {
  const pName2 = document.getElementById("p2").value;
  p2.name = pName2

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

const playBall = () => {
  const back = document.getElementById("play")
  const cont = document.createElement("BUTTON")
  cont.setAttribute("id", "cont")
  cont.innerHTML = "CONTINUE"
  back.appendChild(cont)

  cont.addEventListener("click", begin)

}

let turn = true

// taking turns
const begin = () => {
  const play2 = p2.name
  const cont = document.getElementById("cont")

  if (play2 == "") {
    const char = document.getElementById("p2")
    const charB = document.getElementById("pb2")

    char.remove()
    charB.remove()

    p1.move()
    p1.shoot()

  } else {

    if (turn && p1.count > 0) {
      const play1 = document.getElementById("coconut")
      play1.remove()
      p1.move()
      p1.shoot()
      turn = !turn
      p1.count = p1.count +=1
    } else if (turn) {
      p1.move()
      p1.shoot()
      turn = !turn
      p1.count = p1.count +=1
    } else {
      const play1 = document.getElementById("coconut")
      play1.remove()
      p2.move()
      p2.shoot()// console.log(x);
  // console.log(y);
      turn = !turn
      p2.count = p2.count +=1
    }
  }

  cont.remove()
}

// creating canvas
const canvas = document.createElement("CANVAS")
const can = document.getElementById("can")
can.appendChild(canvas)
canvas.setAttribute("id", "canvas")
canvas.setAttribute("width", "1000")
canvas.setAttribute("height", "500")
const ctx = canvas.getContext("2d");

// function for birds & movement
function component (width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGame() {

    bird.newPos();
    bird.update();
}

let bird;

// makes the birds
const makeBirds = () => {
  bird = new component(120, 50, "images/bird.png", 500, 5, "image");
  setInterval(updateGame, 15);
  console.log("bird");



  // const birdD = new Image(150, 20)
  // birdD.src = 'images/bird.png'
  //
  // birds.onload = function load() {
  //   for(let i = 0; i < 3; i++) {
  //     ctx.drawImage(birds, 0 + 200 * i, 5)
  //   }
  //   for(let i = 0; i < 3; i++) {
  //     ctx.drawImage(birds, 0 + 200 * i, 100)
  //   }
  //   for(let i = 0; i < 3; i++) {
  //     ctx.drawImage(birds, 0 + 200 * i, 150)
  //   }
  // }
}

// shoots "coconuts"
let tCoco;
let axisX
let axisY
const coco = () => {


  const lCoco = document.getElementById("coconut")
  let location = lCoco.getBoundingClientRect()
  let lx = location.left - 165;
  let ly = location.top - 15;
  // console.log(lx);
  // console.log(ly);

  let x = lx
  let y = canvas.height - 50
  let dx = 0;
  let dy = -2;

  // const tCoco = new Image(50, 52)
  // tCoco.src = 'images/coconuts.png'

  function load() {
    // ctx.translate(0, -300)
    // ctx.drawImage(tCoco, x, y)
    // window.requestAnimationFrame(load)

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    // ctx.fillStyle = "#964B00";
    // ctx.fill();
    ctx.closePath();

    tCoco  = new component(30, 30, "images/coconuts.png", x, y, "image");
    tCoco.newPos()
    tCoco.update()

  }

  const newValue = () => {
    y = y
    axisY = y + 50
  }

  setInterval(newValue, 50)

  axisX = x + 50



  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    load()
    x += dx;
    y += dy;
  }
  setInterval(draw, 10)

  setInterval(impact, 10)
}

// collision recognition
const impact = () => {
  // let birdXRight = bird.x + bird.width
  // let cocoXRight = axisX
  // let birdYBottom = bird.y + bird.height
  // let cocoYBottom = axisY

  // const overlapX = (bird.x <= cocoXRight && bird.x >= tCoco.x) ||
  //   (birdXRight <= cocoXRight && birdXRight >= tCoco.x);
  // const overlapY = (bird.y <= cocoYBottom && bird.y >= tCoco.y) ||
  //    (birdYBottom <= cocoYBottom && birdYBottom >= tCoco.y);
  // const isColliding = overlapX && overlapY;

  if((axisX > bird.x) && (axisX < bird.x+bird.width) && (axisY > bird.y) && (axisY < bird.y + bird.height)) {
                    console.log("it hit");
                }

  // if (isColliding) {
  //   console.log("It hit!!");
  // }
}

// starts the whole sequence
const startButton = document.getElementById("start")
startButton.addEventListener("click", instructions)
