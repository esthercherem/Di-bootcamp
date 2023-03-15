// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// setTimeout(function(){
//     alert("hello world")
// },2000)


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// setTimeout(function(){
//     let container = document.getElementById("container");
//     let newParagraph = document.createElement("p");
//     newParagraph.innerText = "hello world";
//     container.appendChild(newParagraph);

// },2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

 let intervalId = setInterval(function(){
     let container = document.getElementById("container");
     let newParagraph = document.createElement("p");
     newParagraph.innerText = "hello world";
     container.appendChild(newParagraph);

     if (container.childElementCount === 5) {
         clearInterval(intervalId);
         container.remove()
     }

 },2000);


// document.getElementById("clear").addEventListener("click", function(){
//     clearInterval(intervalId);
//     container.remove()
// });



// 🌟 Exercise 2 : Move The Box
// Instructions

// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions


// function myMove() {
//     let elem = document.getElementById("animate");
//     let container = document.getElementById("container");
//     let pos = 0;
//     let posY = 0;
//     let id = setInterval(frame, 1);

//     function frame() {
//         if(pos === container.offsetWidth - elem.offsetWidth && posY === container.offsetHeight- elem.offsetHeight) {
//             clearInterval(id);
//         } else {
//             if(pos < container.offsetWidth - elem.offsetWidth){
//                pos++; 
//             }
//             if(posY < container.offsetHeight - elem.offsetHeight) {
//                 posY++;
//             }
        
//             elem.style.left = pos + `px`;
//             elem.style.top = posY + `px`;
//         }
//     }
// }



//  function myMove() {
//      let elem = document.getElementById("animate");
//      let container = document.getElementById("container");
//      let pos = 0;
//      let id = setInterval(frame, 1);

//      function frame() {
//          if(pos === container.offsetWidth - elem.offsetWidth) {
//              clearInterval(id);
//          } else {
//              pos++;
//              elem.style.left = pos + `px`;
//          }
//      }
//  }

// function myMove() {
//     let elem = document.getElementById("animate");
//     let container = document.getElementById("container");
//     let pos = math.floor(math.random() * (container.offsetWidth - elem.offsetWidth));
//     let posY = math.floor(math.random()* (container.offsetHeight - elem.offsetHeight));
//     let dx = (math.random() - 0.5) * 2;
//     let dy = (math.random () - 0.5) * 2;

//     function frame () {
//         if(pos <= 0 || pos >= container.offsetWidth -  elem.offsetWidth) {
//             dx = -dx;
//             // elem.style.backgroundColor = solid blue
//         }
//         if (posY <= 0 || posY >= container.offsetHeight - elem.offsetHeight) {
//             dy = -dy;
//         }

//     pos += dx;
//         posY += dy;
//         elem.style.left = pos + `px`;
//         elem.style.top =posY + `px`;

        
//     }

//     setInterval(frame, 10);
// }


// function stop() {
//     clearInterval(myMove)

// }



let intervalID;

  function myMove() {
    let elem = document.getElementById("animate");
    let container = document.getElementById("container");
    let pos = Math.floor(Math.random() * (container.offsetWidth - elem.offsetWidth));
    let posY = Math.floor(Math.random() * (container.offsetHeight - elem.offsetHeight));
    let dx = (Math.random() - 0.5) * 2; // Random horizontal direction
    let dy = (Math.random() - 0.5) * 2; // Random vertical direction

    function frame() {
      if (pos <= 0 || pos >= container.offsetWidth - elem.offsetWidth) {
        dx = -dx; // Reverse horizontal direction if box hits container boundary
        elem.style.backgroundColor = getRandomColor();
      }
      if (posY <= 0 || posY >= container.offsetHeight - elem.offsetHeight) {
        dy = -dy; // Reverse vertical direction if box hits container boundary
        elem.style.backgroundColor = getRandomColor();
      }
      pos += dx;
      posY += dy;
      elem.style.left = pos + 'px';
      elem.style.top = posY + 'px';
    }
    intervalID = setInterval(frame, 10);
  }

  function stopMove() {
    clearInterval(intervalID);
  }

  function getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
    }   

// The getRandomColor() function generates a random color using hexadecimal characters.
// First, the function initializes a string called letters that contains all the possible
// hexadecimal digits.
// Next, it initializes a string called color with a hash symbol (#), which is a standard 
// prefix used for defining hexadecimal color codes in HTML and CSS.
// Then, the function enters a loop that iterates 6 times, which is the number of digits 
// needed for a valid hexadecimal color code.
// Within the loop, the function generates a random integer between 0 and 15 using 
// Math.random() and Math.floor(). This integer is used to select a random character 
// from the letters string.
// Finally, the selected character is appended to the color string, and the loop repeats 
// until all 6 digits are generated.
// The function then returns the resulting color string, which represents a random color 
// in hexadecimal format.


  // BONUS: ADD <img id="animate" src="rock.png"> instead of div or inside


//   🌟 Exercise 3: Drag & Drop
// Instructions
// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

let box = document.getElementById('box');


box.addEventListener('mousedown', function(e) {

 e.preventDefault();

  let shiftX = e.clientX - box.getBoundingClientRect().left;
 let shiftY = e.clientY - box.getBoundingClientRect().top;

 moveAt(e.pageX, e.pageY);

 function moveAt(pageX, pageY) {
   box.style.left = pageX - shiftX + 'px';
   box.style.top = pageY - shiftY + 'px';
 }

 function onMouseMove(e) {
   moveAt(e.pageX, e.pageY);
 }

 document.addEventListener('mousemove', onMouseMove);


 box.onmouseup = function() {
   document.removeEventListener('mousemove', onMouseMove);
   box.onmouseup = null;
  
   if (isInside(box, target)) {
     alert('Dropped in target!');
   }
 };
});

function isInside(box, target) {
 let boxRect = box.getBoundingClientRect();
 let targetRect = target.getBoundingClientRect();

 return boxRect.left > targetRect.left &&
        boxRect.right < targetRect.right &&
        boxRect.top > targetRect.top &&
        boxRect.bottom < targetRect.bottom;
}