let num;
let count = 0;
let result;

let correctAudio = new Audio('sounds/correct-6033.mp3');
let wrongAudio = new Audio('sounds/wronganswer-37702.mp3');

const Btn = document.getElementsByClassName("btn");
const chancesLeft = document.getElementById("left");
let passedMsg = document.getElementById("passed");
let failedMsg = document.getElementById("failed");

function generateNum() {
    num = Math.ceil(Math.random() * 10);
}
generateNum();
Array.from(Btn).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (num == button.value) {
            button.style.color = "white";
            button.style.backgroundColor = "rgb(114, 246, 114)";
            count++;
            button.disabled = true;
            result = 11 - count;
            correctAudio.play();
            if (count == 1) {
                chancesLeft.innerText = (3 - count) + ' chances were left';
            }
            else {
                chancesLeft.innerText = (3 - count) + ' chance was left';
            }
            passedMsg.innerHTML = "Great, You done it. Your score was " + result;
            Array.from(Btn).forEach((button) => {
                button.disabled = true;
            })
        }
        else {
            button.style.color = "white";
            button.style.backgroundColor = "rgb(255, 119, 119)";
            count++;
            button.disabled = true;
            if (count == 1) {
                chancesLeft.innerText = (3 - count) + ' chances left';
            }
            else {
                chancesLeft.innerText = (3 - count) + ' chance left';
            }
            wrongAudio.play();
            Array.from(Btn).forEach((button) => {
                if (count == 3) {
                    button.disabled = true;
                    failedMsg.innerHTML = "You Failed! The number was " + num;
                }
            })
        }
    })
})