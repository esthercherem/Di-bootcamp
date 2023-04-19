// //OPTION1

// //array of drum sound file names

// const drumSounds = {
//     kick: `./sounds/kick.wav`,
// snare: `./sounds/snare.wav`,
// hiHat: `./sounds/hihat.wav`
// };


// //add event listener to each button

// const kickBtn = document.querySelector(`.kick`);
// kickBtn.addEventListener(`click`, () => {
//     const kickSound = new Audio(drumSounds.kick);
//     kickSound.play();
// });

// const snareBtn = document.querySelector(`.snare`);
// snareBtn.addEventListener(`click`, () => {
//     const snareSound = new Audio(drumSounds.snare);
//     snareSound.play();
// });

// const hiHatBtn = document.querySelector(`.hihat`);
// hiHatBtn.addEventListener(`click`, () => {
//     const hiHatSound = new Audio(drumSounds.hiHat);
// hiHatSound.play();
// });




        // SOLUTION 3 ADD KEYS BEST PRACTICE

        // Array of drum sound file names
        const drumSounds = {
            kick: './sounds/kick.wav',
            snare: './sounds/snare.wav',
            hiHat: './sounds/hihat.wav',
            boom: `./sounds/boom.wav`,
            clap: `./sounds/clap.wav`,
            openhat: `./sounds/openhat.wav`,
            ride: `./sounds/ride.wav`,
            tink: `./sounds/tink.wav`,
            tom: `./sounds/tom.wav`

        };
        
        // Add event listeners to each button
        const kickBtn = document.querySelector('.kick');
        kickBtn.addEventListener('click', () => {
            playSound(drumSounds.kick);
        });
        
        const snareBtn = document.querySelector('.snare');
        snareBtn.addEventListener('click', () => {
            playSound(drumSounds.snare);
        });
        
        const hiHatBtn = document.querySelector('.hi-hat');
        hiHatBtn.addEventListener('click', () => {
            playSound(drumSounds.hiHat);
        });

        const boomBtn = document.querySelector('.boom');
        boomBtn.addEventListener('click', () => {
            playSound(drumSounds.boom);
        });
        
        const clapBtn = document.querySelector('.clap');
        clapBtn.addEventListener('click', () => {
            playSound(drumSounds.clap);
        });
        
        const openhatBtn = document.querySelector('.openhat');
        openhatBtn.addEventListener('click', () => {
            playSound(drumSounds.openhat);
        });

        const rideBtn = document.querySelector('.ride');
        rideBtn.addEventListener('click', () => {
            playSound(drumSounds.ride);
        });
        
        const tinkBtn = document.querySelector('.tink');
        tinkBtn.addEventListener('click', () => {
            playSound(drumSounds.tink);
        });
        
        const tomBtn = document.querySelector('.tom');
        tomBtn.addEventListener('click', () => {
            playSound(drumSounds.tom);
        });
        
        // Add event listeners to trigger drum sounds on key press
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyA') {
                playSound(drumSounds.kick);
            } else if (event.code === 'KeyS') {
                playSound(drumSounds.snare);
            } else if (event.code === 'KeyD') {
                playSound(drumSounds.hiHat);
            }
            else if (event.code === `KeyB`) {
                playSound(drumSounds.boom);
            }
            else if (event.code === `KeyC`) {
                playSound(drumSounds.clap);
            }
            else if (event.code === `KeyO`) {
                playSound(drumSounds.openhat);
            }
            else if (event.code === `KeyR`) {
                playSound(drumSounds.ride);
            }
            else if (event.code === `KeyI`) {
                playSound(drumSounds.tink);
            }
            else if (event.code === `KeyT`) {
                playSound(drumSounds.tom);
            }

        });
        
        // Function to play a drum sound
        function playSound(sound) {
            const audio = new Audio(sound);
            audio.play();
        }
        function playSound(soundFile) {
            const sound = new Audio(soundFile);
            const button = document.querySelector(`.${soundFile.split('.')[0]}`);
            button.classList.add('active');
            sound.addEventListener('ended', () => {
              button.classList.remove('active');
            });
            sound.play();
          }
        
        
        
        
        
        









