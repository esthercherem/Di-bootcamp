
alert("Contesta correctamente las tablas de multiplicacion para encestar el balon y ganar!.")
alert("A JUGAR!")



// tabla de muktiplicaciones

// funcion en la que aparece la tabla


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

// funcion para jugar 

function playRound () {
    let answer = document.getElementById("inputField").value;
    let balon = document.getElementById("balon");
    let colorInput = document.getElementById("inputField")
    let play = document.getElementById("play")
    let hits = 0;
    let mistakes = 0;
    

    colorInput.addEventListener(`click`, playRound);
    play.addEventListener(`click`, playRound);

    function playBasquetball () {
        // play.onclick   tengo que darle el onclick a la imagen del jugador
    }


    if (answer === 0 ){

        // especificar que answer es un numero y sino hay default
        
        colorInput.style.backgroundColor = "green"
        // document.getElementById("balon") agregar que se mueva el balon hacia la canasta
      balon.style.left = pos + `px`;
      balon.style.top = posY + `px`;
      
      if(answer < 0){
        colorInput.style.backgroundColor = "red"
        // document.getElementById("balonnegro") agregar que se mueva el balon fuera de la canasta
    }
    }
    
    
}

function changeColor () {

    let colorInput = document.getElementById("inputField")
    colorInput.addEventListener(`click`, playRound);

    if (answer === 0 ) {

return (colorInput = colorInput.style.backgroundColor = "green")

    }

    

}

