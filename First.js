let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const option = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawgame = ()=>{
    console.log("match is draw");
    msg.innerText = "Game was draw , play again";
   msg.style.backgroundColor = "gray";
}

const showWinner = (userWin, userchoiceId, compchoiceId) => {
  if (userWin) {
      console.log("You win!");
      userScore++;
      user_Score.innerText = userScore;
      msg.innerText = `You win! Your ${userchoiceId} beats ${compchoiceId}.`;
      msg.style.backgroundColor = "green";
      animatescore(user_Score);
  } else {
      console.log("You lose.");
      compScore++;
      comp_Score.innerText = compScore;
      msg.innerText = `You lose! ${compchoiceId} beats your ${userchoiceId}.`;
      msg.style.backgroundColor = "red";
      animatescore(comp_Score);
  }
}

const animatescore = (scoreElement) => {
  scoreElement.style.transform = "scale(2";
  setTimeout(() => {
    scoreElement.style.transform  = "scale(1)";
  }, 300);
}


const playGame = (userchoiceId)=>{
      console.log("user choice = ", userchoiceId);
      const compchoiceId = genCompChoice();
      console.log("computer choice = ", compchoiceId);

      if(userchoiceId === compchoiceId){
        drawgame();
      }
      else {
      let userWin = true;
      if(userchoiceId === "rock"){
        userWin = compchoiceId === "paper" ? false : true;
      }
      else if(userchoiceId === "paper"){
        userWin = compchoiceId === "scissors" ? false :true;
      }
      else{
        userWin = compchoiceId === "rock" ? false : true;
      }
      showWinner(userWin, userchoiceId, compchoiceId);
    }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoiceId = choice.getAttribute("id");
        // console.log("choice was clicked - " , choiceId);
        playGame(userchoiceId);
    });
});