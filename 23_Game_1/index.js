const colorNames = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Purple",
  "Cyan",
  "Magenta",
  "Orange",
  "Pink",
  "Brown",
  "Lime",
  "Olive",
  "Teal",
  "Navy",
  "Maroon",
  "Silver",
];

let winingScore = 3;
let targetColor = "";
let score = 0;
let timer = 120;
let gameInterval,timerInterval;

let setRandomColor = () =>{
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell =>{
        const randomIndex = Math.floor(Math.random()*colorNames.length)
        const randomColor = colorNames[randomIndex]
        cell.style.backgroundColor  = randomColor;
        cell.setAttribute('data-color',randomColor)
    })
}

let setTargetColor = () =>{
     const randomIndex = Math.floor(Math.random() * colorNames.length);
     targetColor = colorNames[randomIndex]
     document.getElementById("targetColor").textContent = targetColor;
}

let formateTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

let updateTimer = () => {
  timer--;
  document.getElementById("timer").textContent = formateTime(timer);

  if(timer <=0){
    endGame(false);
  }
};



let initializeGame = () =>{
    score = 0;
    timer = 120;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = formateTime(timer)
    document.getElementById("congratsOverlay").style.display = 'none';
    document.getElementById("loseOverlay").style.display = "none";
    setRandomColor()
    setTargetColor();

    const bgm = document.getElementById("backgroundMusic");
    // bgm.play()
    
    gameInterval = setInterval(setRandomColor,1000)
    timerInterval = setInterval(updateTimer,1000)

}


let endGame = (isWin) =>{
    clearInterval(gameInterval)
    clearInterval(timerInterval)

    document.getElementById("backgroundMusic").pause();

    const overlay = isWin
      ? document.getElementById("congratsOverlay")
      : document.getElementById("loseOverlay");

      overlay.style.display = 'block'

      if(isWin){
        document.getElementById("winMusic").play();
      }else{
        document.getElementById("loseMusic").play();

      }

}


let handleClick = (e) => {
  const clickedColor = e.target.getAttribute("data-color");

  if (clickedColor === targetColor) {
    score++;
    document.getElementById("score").textContent = score;

    if (score === winingScore) {
      endGame(true);
    }
    setRandomColor();
    setTargetColor();
    document.getElementById("correctMusic").play();
  } else {
    document.getElementById("incorrectMusic").play();
  }
};

document.querySelectorAll('.cell').forEach(cell=>{ 
    cell.addEventListener('click',handleClick)
})


document.getElementById("restartGameOverlay").addEventListener('click',initializeGame);
document
  .getElementById("restartGameOverlayLose")
  .addEventListener("click", initializeGame);

initializeGame()
