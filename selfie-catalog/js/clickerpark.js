const images = [
  "images/park/01.jpg",
  "images/park/02.jpg",
  "images/park/03.jpg",
  "images/park/04.jpg",
  "images/park/05.jpg",
  "images/park/06.jpg",
  "images/park/07.jpg",
  "images/park/08.jpg",
  "images/park/09.jpg",
  "images/park/10.jpg",
  "images/park/11.jpg",
  "images/park/12.jpg",
  "images/park/14.jpg",
  "images/park/13.jpg"
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

document.getElementById("container").addEventListener("click", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.getElementById("container").addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

$(document).ready(function() {
   // $(document).mousemove(function(event){
   //    $("#light").css({"top": event.pageY - 250, "left": event.pageX - 250});
   // });
});
