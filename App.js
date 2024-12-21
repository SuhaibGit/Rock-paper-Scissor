let userScore= 0
let compScore= 0

const choices= document.querySelectorAll(".choice")
const msg= document.querySelector("#msg")
const userScorePara=document.querySelector("#user")
const CompScorePara=document.querySelector("#comp-score")


const draw=()=>{
    msg.innerText="Game was draw"
    msg.style.backgroundColor="#081b31"
}

const genCompChoice=()=>{
    const options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3) // to get number between 0-2 if 0-9 so *10
    return options[randIdx]

}

const showwinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        //When Win
        userScore++
        userScorePara.innerText=userScore
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        //when lose
        compScore++
        CompScorePara.innerText=compScore
        msg.innerText=`You lose. Computer's ${compChoice} beats ${userchoice}`  
        msg.style.backgroundColor="red"

    }
}

const playGame =(userchoice)=>{
    //generate Computer choice
    const compChoice =genCompChoice()
    if(userchoice===compChoice){
        draw()
    }else{
        let userWin = true
        if (userchoice==="rock"){
            //paper or scissor because if rock to it was a draw
            userWin=compChoice === "paper"?false:true
        }else if(userchoice==="scissor"){
            // paper or rock
            userWin=compChoice === "rock"?false:true
        }else{
            userWin=compChoice === "scissor"?false:true
        }
        showwinner(userWin,userchoice,compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playGame(userchoice)
    })
})