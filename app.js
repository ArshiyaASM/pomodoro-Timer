const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");


let setI;

let click_c = 0;

start.addEventListener("click", ()=>{
    if(click_c == 0){
        setI = setInterval(timer, 500)
        click_c = 1;
    }
})

reset.addEventListener("click", ()=>{
    sec.innerHTML = "00";
    min.innerHTML = "25";
    click_c = 0;
    clearInterval(setI);
})

stop.addEventListener("click", ()=>{
    clearInterval(setI);
    click_c = 0; 
})


function timer() {
    let seconds = sec.innerHTML;
    let minutes = min.innerHTML;
    if(seconds > 0){
        seconds--;
        if(seconds < 10) {
            sec.innerHTML = `0${seconds}`
        }else {
            sec.innerHTML = seconds;
        }
    }else {
        if(minutes > 0){
            minutes--;
            if(minutes < 10) {
                min.innerHTML = `0${minutes}`
            }else {
                min.innerHTML = minutes;
            }
            sec.innerHTML = 59;
        }else {
            return
        }
    }
}