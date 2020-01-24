
const ACTIVE_CLASS = "slide-active";
const ID_INDEX = "id-index";
let currentId = 0;
const container = document.querySelector(".sliderContainer");
const wrapper = container.querySelector(".sliderWrapper");
const slide = container.querySelectorAll(".slide");

const containerWidth = container.offsetWidth;
const slideLength = slide.length;

function setStyle(){
    wrapper.style.width = containerWidth * slideLength + "px";
    let i = 0;
    slide.forEach((elem)=>{
        elem.setAttribute(ID_INDEX, i);
        elem.style.width = containerWidth + "px";
        i++;
    });
}
function setActiveSlide(){
    const firstSlide = wrapper.querySelector(".slide:first-child");
    const currentSlide = wrapper.querySelector("." + ACTIVE_CLASS);
    if (currentSlide){
        currentSlide.classList.remove(ACTIVE_CLASS);
    
        if (currentSlide.nextElementSibling){
            currentSlide.nextElementSibling.classList.add(ACTIVE_CLASS);
        } else {
            firstSlide.classList.add(ACTIVE_CLASS);
        }
    } else {
        firstSlide.classList.add(ACTIVE_CLASS);
        
    }
    currentId = currentSlide.getAttribute(ID_INDEX);
    transformFn(currentId);
    
}

function transformFn (idx){
    wrapper.style.transform = `translate(-${containerWidth * idx}px,0)`;
}


function init(){
    setStyle();
    setInterval(() => {
        setActiveSlide();
    }, 2000);
    
    
}

init();