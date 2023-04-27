
        function generateSong() {
          let startNumber = parseInt(document.getElementById("startNumber").value);
          let songLyrics = "";
        
          for (let i = startNumber; i >= 0; i--) {
            if (i === 0) {
              songLyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>";
              songLyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";
            } else if (i === 1) {
              songLyrics += "1 bottle of beer on the wall, 1 bottle of beer.<br>";
              songLyrics += "Take it down and pass it around, no more bottles of beer on the wall.<br><br>";
            } else {
              songLyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
              songLyrics += "Take " + (i === 2 ? "1" : i-1) + " down and pass them around, ";
              songLyrics += (i === 2 ? "1" : i-1) + " bottle" + ((i === 2 ? "": "s") + " of beer on the wall.<br><br>");
            }
          }
        
          document.getElementById("songLyrics").innerHTML = songLyrics;
        }
      