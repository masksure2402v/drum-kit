document.querySelector(".w").addEventListener("click", Wdrum);
function Wdrum() {
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play()
}

document.querySelector(".a").addEventListener("click", Adrum);
function Adrum() {
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play()
}

document.querySelector(".s").addEventListener("click", Sdrum);
function Sdrum() {
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play()
}

document.querySelector(".d").addEventListener("click", Ddrum);
function Ddrum() {
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play()
}

document.querySelector(".j").addEventListener("click", Jdrum);
function Jdrum() {
    var audio = new Audio("sounds/snare.mp3")
    audio.play()
}

document.querySelector(".l").addEventListener("click", Ldrum);
function Ldrum() {
    var audio = new Audio("sounds/crash.mp3")
    audio.play()
}

// document.addEventListener("keypress", Ldrum);
// function Ldrum(evt) {
//     if (evt.key === "keypress"  true){new Audio("sounds/crash.mp3");audio.play()}
    
    

   
    
// }   
