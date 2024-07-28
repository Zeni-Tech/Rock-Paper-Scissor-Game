let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");




const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win", userWin);
        msg.innerText=`You Win ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor="green"   
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lose", userWin);
        msg.innerText=`You Lose ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor="red"
    }
}
const genCompChoice=()=>{
    const ranDom=Math.floor(Math.random()*3)
    const options=["Rock","Paper","Scissor"];
    return options[ranDom];
}

const playGame=(userChoice)=>{
    console.log("User choice is", userChoice);
    const comChoice=genCompChoice();
    console.log("Computer choice is", comChoice);
    if(userChoice === comChoice){
        console.log("It's a Draw");
       msg.innerText=`Draw Play Again ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor="#081b31"
    }
    else{
        let userWin=true;
        if(userChoice === "Rock"){
            userWin=comChoice==="Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin=comChoice==="Scissor" ? false : true;
        }
        else{
            userWin=comChoice==="Rock" ? false : true;
        }
        showWinner(userWin , userChoice, comChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})