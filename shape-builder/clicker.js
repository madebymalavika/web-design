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


function deleteDiv()
{
      const max = 25;
      var total;
      total = document.querySelectorAll(".shape");
    if (total.length>=max)
    {
      console.log("deleting")
      total[1].remove()
    }
}


const colours = [
"red",
"purple",
"neonblue",
"green",
"pink",
"yellow",
"orange",
"navy",
"liquidgreen",
"neonpurple"
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
  "rotate-square",
  "chasing"
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

    // random speed
    var max = 3000
    var min = 500
    var speed = Math.floor((Math.random() * (max - min + 1) + min))
    div.style.animationDuration = speed + "ms";

//triangle
    if (shape2 == "triangle" ) {
      var move = Math.floor(Math.random() * triangl.length)
      move2 = triangl[move]
      console.log(shape2, col2, move2, speed)
      div.classList.add(move2)

      if (move2 == "chasing")
      {
        div.borderColor = "transparent transparent transparent transparent"
        d = document.createElement('div')
        div.append(d)
        d.className += 'triangle dot'
        d.classList.add(col2)
        d.style.width = 0.4*size;
        d.style.height = 0.4*size;

        d2 = document.createElement('div');
        div.append(d2);
        d2.className += 'triangle dot two'
        d2.classList.add(col2)
        d2.style.width = 0.4*size;
        d2.style.height = 0.4*size;
      }

      var max = 120
        var min = 40
        var size = Math.floor(Math.random() * (max - min + 1) + min)
        div.style.borderTopWidth = 0;
        div.style.borderRightWidth = size/2;
        div.style.borderBottomWidth = size;
        div.style.borderLeftWidth = size/2;
    }


//square
  else if (shape2 == "square" )
  {
    var move = Math.floor(Math.random() * squar.length)
    move2 = squar[move]
    console.log(shape2, col2, move2, speed)
    div.classList.add(move2)

    var max = 100
      var min = 50
      var size = Math.floor(Math.random() * (max - min + 1) + min)
      div.style.height = size
      div.style.width = size

    if (move2 == "chasing")
    {
      d = document.createElement('div');
      div.append(d);
      d.className += 'square dot';
      d.classList.add(col2)
      d.style.width = 0.4*size;
      d.style.height = 0.4*size;

      d2 = document.createElement('div');
      div.append(d2);
      d2.className += 'square dot two';
      d2.classList.add(col2)
      d2.style.width = 0.4*size;
      d2.style.height = 0.4*size;
    }

    if (move2 == "chase")
    {

      div.style.width = div.style.height = "100px";
    }

    // // randomize size

  }

//circle
  else if (shape2 == "circle" )
  {
    var move = Math.floor(Math.random() * circ.length)
    move2 = circ[move]
    console.log(shape2, col2, move2, speed)
    div.classList.add(move2)

    // // randomize size
    var max = 130
      var min = 40
      var size = Math.floor(Math.random() * (max - min + 1) + min)
      div.style.height = size
      div.style.width = size

    if (move2 == "chasing")
    {
      if (move2 == "chasing")
      {
        d = document.createElement('div');
        div.append(d);
        d.className += 'circle dot';
        d.classList.add(col2)
        d.style.width = 0.4*size;
        d.style.height = 0.4*size;

        d2 = document.createElement('div');
        div.append(d2);
        d2.className += 'circle dot two';
        d2.classList.add(col2)
        d2.style.width = 0.4*size;
        d2.style.height = 0.4*size;
      }

    }

    if (move2 == "chase")
    {

      div.style.width = div.style.height = "100px";
    }
  }
  document.body.appendChild(div)
}


document.body.addEventListener("click", function (event) {
  event.preventDefault()

  if ( event.pageX > 82 && event.pageY >82)
      {

        placeShape(event.pageX, event.pageY)
        deleteDiv()
      }

  else if ((event.pageX <= 80 && event.pageX >=40) && (event.pageY <= 80 && event.pageY >= 40))
      {
        console.log("i am inside this box")
        stopAnimation()
      }
})


var state = true;
function pause()
{
var x, i, dot;
  x = document.body.querySelectorAll("div");
  // dot = document.querySelectorAll(".dot");

    if (state == true)
    {
          for (i = 0; i < x.length; i++)
          {
            // x[i].style.animationPlayState = "paused";
            x[i].classList.add("paused");
          }

          console.log(state)
          state = false
    }

    else
    {
          for (i = 0; i < x.length; i++)
          {
            // x[i].style.animationPlayState = "running";
            x[i].classList.remove("paused");
          }
          console.log(state)
          state = true
    }
}

function stopAnimation() {
 console.log("button was clicked")
 const pl = document.querySelector(".btn")

 pause()

       if (pl.classList.contains('play'))
       {
         pl.classList.remove('play')
         pl.classList.add('pause')
       }

       else
       {
       pl.classList.remove('pause')
       pl.classList.add('play')
       }

}
