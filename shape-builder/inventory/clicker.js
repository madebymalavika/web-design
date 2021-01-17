// const images = [
//   "images/times/01.jpg",
//   "images/times/2.jpg",
//   "images/times/3.jpg",
//   "images/times/4.jpg",
//   "images/times/5.jpg",
//   "images/times/6.jpg",
//   "images/times/7.jpg",
//   "images/times/8.jpg",
//   "images/times/9.jpg",
//   "images/times/12.jpg",
//   "images/times/13.jpg",
//   "images/times/14.jpg",
//   "images/times/15.jpg"
// ]

const colours = [
"blue",
"pink",
"yellow",
"navy",
"dark"
]

const shape = [
"triangle",
"square",
"circle"
]

// const movement = [
// "roll",
// "circlebounce",
// "chasing",
// "pulse-inside",
// "squarebounce",
// "pulse",
// "chase",
// "move",
// "roll2",
// "morph",
// "rope",
// "crazybounce",
// "crazybounce-left",
// "rotate-square"
// ]

// let i=0

const circ =
[
    "roll",
    "circlebounce",
    "move",
    "rope",
    "rotate-square",
    "chasing",
    "chase"
]

const squar =
[
    "roll",
    "squarebounce",
    "move",
    "morph",
    "rope",
    "roll2",
    "rotate-square",
    "crazybounce",
    "crazybounce-left",
    "chasing",
    "chase"
]

const triangl =
[
  "move",
  "roll2",
  "rotate-square"
]

function placeShape(x, y) {

  const div = document.createElement("div")
  div.setAttribute("draggable", "false")

  div.className += 'shape'

  div.style.left = x - 50 + "px"
  div.style.top = y - 50 + "px"

    var col = Math.floor(Math.random() * colours.length)
    col2 = colours[col]
    // console.log(col2)
    div.classList.add(col2)

    var shapex = Math.floor(Math.random() * shape.length)
    shape2 = shape[shapex]
    // console.log(shape2)
    div.classList.add(shape2)

//triangle
    if (shape2 == "triangle" ) {
      var move = Math.floor(Math.random() * triangl.length)
      move2 = triangl[move]
      console.log(shape2, col2, move2)
      div.classList.add(move2)
    }

//square
  else if (shape2 == "square" )
  {
    var move = Math.floor(Math.random() * squar.length)
    move2 = squar[move]
    console.log(shape2, col2, move2)
    div.classList.add(move2)

    //randomize size
    var max = 150
      var min = 50
      var size = Math.floor(Math.random() * (max - min + 1) + min)
      div.style.height = size
      div.style.width = size
  }

//circle
  else if (shape2 == "circle" )
  {
    var move = Math.floor(Math.random() * circ.length)
    move2 = circ[move]
    console.log(shape2, col2, move2)
    div.classList.add(move2)

    //randomize size
    var max = 150
      var min = 50
      var size = Math.floor(Math.random() * (max - min + 1) + min)
      div.style.height = size
      div.style.width = size

    if (move2 == "chase")
    {
      // div.pseudoStyle("before","background-color",col2);
      // div.pseudoStyle("after","background-color",col2);
    }
  }

  //random speed
  var max = 4
  var min = 0.5
  var speed = (Math.random() * (max - min + 1) + min)
  div.style.animationDuration = speed + "s";

  document.body.appendChild(div)

}

document.body.addEventListener("click", function (event) {
  event.preventDefault()
  placeShape(event.pageX, event.pageY)
})

document.body.addEventListener("touchend", function (event) {
  event.preventDefault()
  placeShape(event.pageX, event.pageY)
})
