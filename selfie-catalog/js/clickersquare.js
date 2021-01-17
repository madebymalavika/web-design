const images = [
  "images/washington/01.jpg",
  "images/washington/02.jpg",
  "images/washington/03.jpg",
  "images/washington/04.jpg",
  "images/washington/05.jpg",
  "images/washington/07.jpg",
  "images/washington/08.jpg",
  "images/washington/09.jpg",
  "images/washington/10.jpg",
  "images/washington/11.jpg",
  "images/washington/12.jpg",
  "images/washington/13.jpg",
  "images/washington/14.jpg",
  "images/washington/15.jpg",
  "images/washington/16.jpg",
  "images/washington/17.jpg",
  "images/washington/18.jpg",
  "images/washington/19.jpg",
  "images/washington/20.jpg",
  "images/washington/21.jpg"
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
