            // Create new wheel object specifying the parameters at creation time.
            let theWheel = new Winwheel({
                'numSegments'  : 20,     // Specify number of segments.
                'outerRadius'  : 300,   // Set outer radius so wheel fits inside the background.
                'textFontSize' : 17,    // Set font size as desired.
                'textAlignment': 'outer',
                'segments'     :        // Define segments including colour and text.
                [
                   {'fillStyle' : '#eae56f', 'text' : 'Tout le monde'},
                   {'fillStyle' : '#89f26e', 'text' : 'Kevin'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Roulette Grecque'},
                   {'fillStyle' : '#e7706f', 'text' : 'El pimentoooo'},
                   {'fillStyle' : '#eae56f', 'text' : 'Les Kevin connus'},
                   {'fillStyle' : '#89f26e', 'text' : 'Tout le monde'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Kevin'},
                   {'fillStyle' : '#e7706f', 'text' : 'Anecdotes'},
                   {'fillStyle' : '#eae56f', 'text' : 'Prize 9'},
                   {'fillStyle' : '#89f26e', 'text' : 'Tout le monde'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Kevin'},
                   {'fillStyle' : '#e7706f', 'text' : 'Prize 12'},
                   {'fillStyle' : '#eae56f', 'text' : 'Roulette Grecque'},
                   {'fillStyle' : '#89f26e', 'text' : 'El pimentoooo'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Autour du pr\u00e9nom Kevin'},
                   {'fillStyle' : '#e7706f', 'text' : 'Prize 16'},
                   {'fillStyle' : '#eae56f', 'text' : 'Tout le monde'},
                   {'fillStyle' : '#89f26e', 'text' : 'Kevin'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Prize 19'},
                   {'fillStyle' : '#e7706f', 'text' : 'Kevin d\u00e9cide de la r\u00e8gle'}
                ],
                'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,
                    'spins'    : 6,
                    'callbackFinished' : alertPrize,
                    'callbackSound'    : playSound,   // Function to call when the tick sound is to be triggered.
                    'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
                },
                'pins' :
                {
                    'number' : 20   // Number of pins. They space evenly around the wheel.
                }
            });

            // -----------------------------------------------------------------
            // This function is called when the segment under the prize pointer changes
            // we can play a small tick sound here like you would expect on real prizewheels.
            // -----------------------------------------------------------------
            let audio = new Audio('tick.mp3');  // Create audio object and load tick.mp3 file.

            function playSound()
            {
                // Stop and rewind the sound if it already happens to be playing.
                audio.pause();
                audio.currentTime = 0;

                // Play the sound.
                audio.play();
            }

            function alertPrize(indicatedSegment)
            {
                document.getElementById('result').innerHTML = indicatedSegment.text;
            }

            // =======================================================================================================================
            // Code below for the power controls etc which is entirely optional. You can spin the wheel simply by
            // calling theWheel.startAnimation();
            // =======================================================================================================================
            let wheelPower    = 0;
            let wheelSpinning = false;

            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            function startSpin()
            {
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false) {

                        theWheel.animation.spins = 15;


                    // Disable the spin button so can't click again while wheel is spinning.
                    document.getElementById('spin_button').src       = "spin_off.png";
                    document.getElementById('spin_button').className = "";

                    // Begin the spin animation by calling startAnimation on the wheel object.
                    theWheel.startAnimation();

                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    wheelSpinning = true;
                }
            }

            // -------------------------------------------------------
            // Function for reset button.
            // -------------------------------------------------------
            function resetWheel()
            {
                document.getElementById('result').innerHTML = '';
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.

                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }

            function play(number) {
              var audio = document.getElementById(number);
              audio.play();
            }

            let run = false;



            function play3() {
              var audio = document.getElementById("losing");
              audio.play();
            }




            function playRumble() {
              var audio = document.getElementById("rumble");
              if(run == false){
              audio.play();
              run = true;
              } else {
              audio.pause();
              audio.currentTime = 0;
              run = false;}
            }