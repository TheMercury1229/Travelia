// PRELOADER
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load",()=>{
    preloader.classList.add("remove")
})
// ADDING MULTIPLE EVENT LISTNERS
const addEventsOnElements=function(elements,eventType,callback){
    for(let i=0, len =elements.length;i<elements.length;i++){
        elements[i].addEventListener(eventType,callback)
    }
}
// navbar toggle for mobile
const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")
const toggleNav= ()=>{
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}
addEventsOnElements(navTogglers,"click",toggleNav)
// header drop
const header= document.querySelector('[data-header]');
window.addEventListener("scroll", function () {
    header.classList[this.window.scrollY>100 ? "add" : "remove"]("active")

})