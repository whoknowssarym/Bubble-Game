var timer = 60;
var score = 0;
var hitRn ;
function makeBubble(){
        let clutter = ""
    for (var i =  1 ; i <= 194 ; i++){
        var rn  = Math.floor(Math.random() * 10);
        clutter += `<div class="bubbles">${rn}</div>`;
    }

    document.querySelector("#p-Play").innerHTML = clutter;
}

function hitVal(){
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector(".hit-hit").textContent = hitRn;
}

function scoreVal(){
    score += 10;
    document.querySelector(".scoreVal").textContent = score;
}

function runTimer(){
    var timeint = setInterval(()=>{
        if (timer > 0){
            timer --;
            document.querySelector(".timerval").textContent = timer;
        }else{
            clearInterval(timeint);
            document.querySelector("#p-Play").innerHTML = `<h1> GAME OVER</>`;
        }        
    },1000);
}

document.querySelector("#p-Play")
.addEventListener("click",(dets) => {  // dets means details
    var clickedNumber = (Number(dets.target.textContent));  // dets.target sy pura div agaya or .textContent sy us div ka number yani data agaya
    if (clickedNumber === hitRn){
        scoreVal();
        hitVal();
        makeBubble();
    }
});

hitVal();
runTimer();
makeBubble();