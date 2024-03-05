let num;
let count = 0;
let result;
let correctAudio = new Audio('sounds/correct-6033.mp3');
let wrongAudio = new Audio('sounds/wronganswer-37702.mp3');
let failedAudio = new Audio('sounds/fail-jingle-stereo-mix-88784.mp3');

function generateNum() {
    num = Math.ceil(Math.random() * 10);
}
generateNum();
Array.from(document.getElementsByClassName("btn")).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (num == button.value) {
            button.style.color = "white";
            button.style.backgroundColor = "rgb(114, 246, 114)";
            count++;
            button.disabled = true;
            result = 11 - count;
            correctAudio.play();
            if (count == 1) {
                document.getElementById("left").innerText = 3 - count + ' chances were left';
            }
            else {
                document.getElementById("left").innerText = 3 - count + ' chance was left';
            }
            document.getElementById("passed").innerHTML = "Great, You done it. Your score was " + result;
            Array.from(document.getElementsByClassName("btn")).forEach((button) => {
                button.disabled = true;
            })
        }
        else {
            button.style.color = "white";
            button.style.backgroundColor = "rgb(255, 119, 119)";
            count++;
            button.disabled = true;
            if (count == 1) {
                document.getElementById("left").innerText = 3 - count + ' chances left';
            }
            else {
                document.getElementById("left").innerText = 3 - count + ' chance left';
            }
            wrongAudio.play();
            Array.from(document.getElementsByClassName("btn")).forEach((button) => {
                if (count == 3) {
                    button.disabled = true;
                    failedAudio.play();
                    document.getElementById("failed").innerHTML = "You Failed ! The number was " + num;
                }
            })
        }
    })
})