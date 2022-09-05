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
function Moreless1(){
    let dots=document.getElementById("dots1");
    console.log(dots)
    let invesibleText=document.getElementById("invesible1");
    console.log(invesibleText)
    let Read=document.getElementById("read-more1");
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
function Moreless2(){
    let dots=document.getElementById("dots2");
    console.log(dots)
    let invesibleText=document.getElementById("invesible2");
    console.log(invesibleText)
    let Read=document.getElementById("read-more2");
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
function Moreless3(){
    let dots=document.getElementById("dots3");
    console.log(dots)
    let invesibleText=document.getElementById("invesible3");
    console.log(invesibleText)
    let Read=document.getElementById("read-more3");
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
function Moreless4(){
    let dots=document.getElementById("dots4");
    console.log(dots)
    let invesibleText=document.getElementById("invesible4");
    console.log(invesibleText)
    let Read=document.getElementById("read-more4");
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
function Moreless5(){
    let dots=document.getElementById("dots5");
    console.log(dots)
    let invesibleText=document.getElementById("invesible5");
    console.log(invesibleText)
    let Read=document.getElementById("read-more5");
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
let x =document.getElementById("hambarger");
    let y =document.getElementById("open");
    let z =document.getElementById("close");
function toggle() {



    
    if(x.style.display=='none'){
        x.style.display='block';
        
        
        }
    else{
        x.style.display='none';
       
         
        
    }
}
// ==========Dark Mode========
var darkMode=document.getElementsByClassName("switch-btn");
var darkbtncolor=document.getElementById("darkmodebtncolor");
var darkbtntxt=document.getElementById("darkbtntxt")
console.
log("hello dark more")
console.log("darkmodebtncolor")
console.log(darkbtntxt)

function darkmode(){
    document.body.classList.toggle("dark-theme")
    if(localStorage.getItem('theme')=='dark'){
        localStorage.setItem("theme","light");
        darkbtntxt.innerHTML="Dark Mode"
    }
    else{
        darkbtntxt.innerHTML="Lite Mode"
        localStorage.setItem('theme','dark')
    }
}
if(localStorage.getItem('theme')=='dark'){
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem('theme')=='light'){
    document.body.classList.add("dark-theme")
}
else{
    localStorage.setItem('theme','dark')
}
const navlinks=document.querySelectorAll(".navlinks");
const mobileview=window.matchMedia('(max-width:62em) ')
if(mobileview.matches){
    navlinks.forEach((l)=> {
        l.addEventListener('click',()=>{
            
            x.style.display='none'
        })
    
    })      
}
