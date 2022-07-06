console.log("hello")

// auto typing
let typed = new Typed("#auto-typed", {
    strings: ["Arman Ali", "Developer", "Entrepreneur", "Explorer"],
    typeSpeed: 170,
    backSpeed: 190,
    loop: true,
    startDelay: 10,
})

let popup = document.getElementById("popup");
function openpopup() {
    popup.classList.add("open-popup")
}
function closepopup() {
    popup.classList.remove("open-popup")
}

// preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = 'none';

})
// read-more
function Moreless(){
    let dots=document.getElementById("dots");
    console.log(dots)
    let invesibleText=document.getElementById("invesible");
    console.log(invesibleText)
    let Read=document.getElementById("read-more");
    console.log(Read)
    if(dots.style.display!='none'){
        dots.style.display='none';
        invesibleText.style.display='inline';
        Read.innerHTML="Read Less"
    }
    else{
        dots.style.display='inline';
        invesibleText.style.display='none';
        Read.innerHTML="Read More"
    }
}
// responsive
function toggle() {
    let x =document.getElementById("hambarger");
    let y =document.getElementById("open");
    let z =document.getElementById("close");
    if(x.style.display=='none'){
        x.style.display='block';

        
    }
    else{
        x.style.display='none';
        
    }
}