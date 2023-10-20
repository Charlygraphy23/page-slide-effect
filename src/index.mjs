import "./styles.css";

let isGrabbed = false;
let dragging = false;


const left = document.querySelector(".layer2")

document.addEventListener("mousedown" , (e) => {
  isGrabbed = true
  const percentage = (e.clientX / window.innerWidth) * 100
  left.style.width = `${percentage}%`
})

document.addEventListener("mouseup" , (e) => {
  isGrabbed = false
})

document.addEventListener("onmouseleave" , (e) => {
  isGrabbed = false
})

document.addEventListener("mousemove" , (e) => {
  if(!isGrabbed) return;
  
  const percentage = (e.clientX / window.innerWidth) * 100

  left.style.width = `${percentage}%`
})