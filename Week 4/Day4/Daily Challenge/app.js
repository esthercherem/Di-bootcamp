// Instructions
// Prompt the user for several words (separated by commas).

const answer= prompt("write 5 words separated by comas")

// Put the words into an array.

const word = answer.split(",")

// Console.log the words one per line, in a rectangular frame as seen below.

console.log(word)

// Check out the Hints and Requirements below.

let exercise = () =>{

    let frase = prompt('into a phrase and separate by spaces')
    let matriz = frase.split(' ');
    let flags = 0;
    for(x of matriz){
        if(flags < x.length) {
            flags = x.length;
        }
    }
    
    
    let flags2 = 0;
    let line = '';
    for(i=0;i<flags;i++){
        let x=0;
        if (i === 0){
            while(x < flags+4){
                x++
                line += '*'
            }
        }
    }
    console.log(line);
    
        if(flags2 === 0){
            flags2++
            let x = 0
            let line2 = '';
            while(x < matriz.length){
                let a =(flags+2) - matriz[x].length
                matriz[x] = ('* ' + matriz[x]);
                                               
                for(y= matriz[x].length; y<= flags+2;y++) {
                    matriz[x] += ' '
                }
                matriz[x] += '*'
                console.log(matriz[x]) 
                x++
                line2 += '*'
            }
        }
        console.log(line);
    
    }
    
    exercise();


