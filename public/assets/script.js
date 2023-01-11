const moreButton = document.getElementById("more-button")
const hiddenText = document.getElementById("hidden-text")
const question = document.querySelectorAll(".faq-question")
const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile-menu")
const playButton = document.getElementById("play-button")
const video = document.querySelector("video")

moreButton.addEventListener("click",()=>{
    moreButton.remove()
    hiddenText.classList.remove("hidden")
})


function handleQuestion() {
    this.querySelector("svg").classList.toggle("rotate-180")
    toggleExpand(this.nextElementSibling)
}

question.forEach((e) => e.addEventListener("click", handleQuestion))

window.toggleExpand = function (element) {
    if (!element.style.height || element.style.height == '0px') {
        element.style.height = Array.prototype.reduce.call(element.childNodes, function (p, c) { return p + (c.offsetHeight || 0); }, 0) + 'px';
    } else {
        element.style.height = '0px';
    }
}

hamburger.addEventListener("click",()=>{
    hamburger.querySelectorAll("svg").forEach((e)=>e.classList.toggle("opacity-0"))
    mobileMenu.classList.toggle("opacity-0")
    mobileMenu.classList.toggle("pointer-events-none")
})

playButton.addEventListener("click",()=>{
    playButton.classList.add("hidden")
    video.play()
})

video.addEventListener("click",()=>{
    playButton.classList.remove("hidden")
    video.pause()
})