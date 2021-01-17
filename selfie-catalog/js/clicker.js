const images = [
  "images/times/01.jpg",
  "images/times/2.jpg",
  "images/times/3.jpg",
  "images/times/4.jpg",
  "images/times/5.jpg",
  "images/times/6.jpg",
  "images/times/7.jpg",
  "images/times/8.jpg",
  "images/times/9.jpg",
  "images/times/12.jpg",
  "images/times/13.jpg",
  "images/times/14.jpg",
  "images/times/15.jpg"
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")

  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

  document.getElementById("container").appendChild(img)

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

document.getElementById("image-container").addEventListener("click", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.getElementById("image-container").addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

$(document).ready(function() {
   // $(document).mousemove(function(event){
   //    $("#light").css({"top": event.pageY - 250, "left": event.pageX - 250});
   // });
});
