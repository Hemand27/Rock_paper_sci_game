
var computer = Math.floor((Math.random() * 3) + 1)

var score = document.getElementById("score")
score.textContent = localStorage.getItem("score")

var effectLeft = document.getElementById("one")
var effectRight = document.getElementById("two")
var userImage1 = document.getElementById("userImg1")
var userImage2 = document.getElementById("userImg2")
var userImage3 = document.getElementById("userImg3")

var div1 = document.createElement("div")
var div2 = document.createElement("div")

var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var rock = document.getElementById("rock")
var round = document.getElementsByClassName("round")

var win = document.getElementById("win")
var lose = document.getElementById("lose")
var tie = document.getElementById("tie")

var titleOne=document.getElementById("titleOne")
var titleTwo=document.getElementById("titleTwo")



var output
var user
var ans

if (localStorage.getItem("Paper_value") == null) {
    if (localStorage.getItem("Scissors_value") == null) {
        user = "3"
        userImage3.className = "text-center respUser rock "
    } else {
        user = "2"
        userImage2.className = "text-center respUser scissors "
    }
} else {
    user = "1"
    userImage1.className = "text-center respUser paper "
}
    
setTimeout(function(){

    if (computer == 1) {
        paper.className = " respComp text-center paper "
        round[0].className = "d-none round mx-auto"
    } else if (computer == 2) {
        scissors.className = " respComp text-center scissors"
        round[0].className = "d-none round mx-auto"
    }else{
        rock.className = " respComp text-center rock"
        round[0].className = "d-none round mx-auto"
    }

    if(computer == user){
        tie.className = "col-md-4 my-auto order-3 order-md-2 d-block"
    }else{
        switch (user) {

            case "1":

                if(computer == 2){
                    lose.className = "col-md-4 my-auto order-3 order-md-2 d-block"
                    output = "lose"
                }else{
                    win.className = "col-md-4 my-auto order-3 order-md-2 d-block"
                    output = "win"
                }
                break;

            case "2":

                if(computer == 1){
                    win.className = "col-md-4 my-auto order-3 order-md-2 d-block"
                    output = "win"
                }else{
                    lose.className = "col-md-4 my-auto order-3 order-md-2 d-block"
                    output = "lose"
                }
                break;

            case "3":

                if(computer == 1){
                    lose.className = "col-md-4 my-auto order-3 order-md-2 d-block"
                    output = "lose"
                }else{
                    win.className = "col-md-4 my-auto order-3 order-md-2 d-block"
                    output = "win"
                }

            default:
                break;
        }
    }
    if(window.innerWidth <= 375){
        if(output=="win" || output=="lose"){

            if(output=="win"){
                ++score.textContent

            }else{
                --score.textContent
            }
            effectLeft.appendChild(div1)
            div1.appendChild(div2)
            if (user == 1) {
                div2.appendChild(userImage1)
            }else if (user == 2) {
                div2.appendChild(userImage2)
            }else{
                div2.appendChild(userImage3)
            }
            effectLeft.className = "effect order-1 order-md-2"
            div1.className = 'effect1'
            div2.className = 'effect2'
            titleOne.className = "text-center text-white mt-4 mb-5 respTitle1"
            titleTwo.className = "text-center text-white mt-4 mb-5 respTitle2"
        }
    }else{

        if(output == "win"){

            ++score.textContent
            effectLeft.appendChild(div1)
            div1.appendChild(div2)
            if (user == 1) {
                div2.appendChild(userImage1)
            }else if (user == 2) {
                div2.appendChild(userImage2)
            }else{
                div2.appendChild(userImage3)
            }
            effectLeft.className = "effect order-1 order-md-2   "
            div1.className = 'effect1'
            div2.className = 'effect2'
            titleOne.className = "text-center text-white mt-4 mb-5 respTitle1"
            titleTwo.className = "text-center text-white mt-4 mb-5 respTitle2"

        }else if(output == "lose"){

            effectRight.appendChild(div1)
            div1.appendChild(div2)
            if (computer == 1) {
                div2.appendChild(paper)
            }else if (computer == 2) {
                div2.appendChild(scissors)
            }else{
                div2.appendChild(rock)
            }
            effectRight.className = "effect order-1 order-md-2"
            div1.className = 'effect1'
            div2.className = 'effect2'
            titleOne.className = "text-center text-white mt-4 mb-5 respTitle1"
            titleTwo.className = "text-center text-white mt-4 mb-5 respTitle2"

            if(score.textContent > 0){
                --score.textContent
            }
        }
    }

    localStorage.clear()
},1000)