import * as Tone from 'tone';
import {song} from './instruments.js';
import snare from '../../dist/assets/sounds/snare-chop_C_major.wav';
import hihat from '../../dist/assets/sounds/hi-hat-africa_C_minor.wav';
import clap from '../../dist/assets/sounds/dry-short-clap.wav';
import { Time } from 'tone';




var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// GRABBING INSTRUMENT ELEMENTS FROM DOM
const kickDiv = document.getElementsByClassName("kick__bar");
const snareDiv = document.getElementsByClassName("snare__bar");
const hihatDiv = document.getElementsByClassName("hihat__bar");
const clapDiv = document.getElementsByClassName("clap__bar");
// console.log(kickD)
kickDiv.forEach(singleKick => {
    singleKick.addEventListener('click', () => {
        if (singleKick.dataset.active === "true") {
            singleKick.dataset.active = "false"
            singleKick.style.backgroundColor = "#202020"
        } else if (singleKick.dataset.active === "false"){
            singleKick.dataset.active = "true"
            singleKick.style.backgroundColor = "red"
        }
    })
})
snareDiv.forEach(singleSnare => {
    singleSnare.addEventListener('click', () => {
        if (singleSnare.dataset.active === "true") {
            singleSnare.dataset.active = "false"
            singleSnare.style.backgroundColor = "#202020"
        } else if (singleSnare.dataset.active === "false"){
            singleSnare.dataset.active = "true"
            singleSnare.style.backgroundColor = "red"
        }

    })
})
hihatDiv.forEach(singleHihat => {
    singleHihat.addEventListener('click', () => {
        if (singleHihat.dataset.active === "true") {
            singleHihat.dataset.active = "false"
            singleHihat.style.backgroundColor = "#202020"
        } else if (singleHihat.dataset.active === "false"){
            singleHihat.dataset.active = "true"
            singleHihat.style.backgroundColor = "red"
        }

    })
})

clapDiv.forEach(singleClap => {
    singleClap.addEventListener('click', () => {
        if (singleClap.dataset.active === "true") {
            singleClap.dataset.active = "false"
            singleClap.style.backgroundColor = "#202020"
        } else if (singleClap.dataset.active === "false"){
            singleClap.dataset.active = "true"
            singleClap.style.backgroundColor = "red"
        }

    })
})


//PLAY
let getPlay = document.getElementsByClassName("play__button") 
export let loopKick = getPlay[0].addEventListener('click', () => {
    let currentState = Tone.context.state
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
            Tone.start();
        } 

        //// ACCESSING HTML ELEMENTS
        const kickRow = document.getElementsByClassName("kick__bar__container")[0];
        // const snareRow = document.getElementsByClassName("snare__bar__container")[0].children;
        // const hihatRow = document.getElementsByClassName("hihat__bar__container")[0].children;
        // const clapRow = document.getElementsByClassName("clap__bar__container")[0].children;

        //CREATING INSTRUMENTS
        const kick = new Tone.MembraneSynth().toDestination();
        //--//
        const snareInstrument  = new Tone.Sampler({
            "c2" : snare
        }).toDestination()
        //--//
        const hihatInstrument  = new Tone.Sampler({
            "c2" : hihat
        }).toDestination()
        //--//
        const clapInstrument  = new Tone.Sampler({
            "c2" : clap
        }).toDestination()

        // INSTRUMENT PLAYBACK BELOW (KICK, SNARE, HIHAT, CLAP)

        //KICK
        Tone.Transport.scheduleRepeat(time => {
            repeat(time)
        }, "4n");

       
        
        function repeat(time){
            let beat = Tone.Transport.position.split(":")[1]

            // MAKING BORDER COLOR CHANGE
                // KICK
            kickDiv.forEach(singleKickDiv => {
                if (beat === singleKickDiv.id ) {
                    singleKickDiv.style.borderColor = "yellow"
                } else if (beat !== singleKickDiv.id) {
                    singleKickDiv.style.borderColor = "#202020"
                } 

                if (beat === singleKickDiv.id && singleKickDiv.dataset.active === "true") {
                    singleKickDiv.style.backgroundColor = "#7c0000"
                } else if (beat !== singleKickDiv.id && singleKickDiv.dataset.active === "true") {
                    singleKickDiv.style.backgroundColor = "red" 
                }
            })
                // SNARE
            snareDiv.forEach(singleSnareDiv => {
                if (beat === singleSnareDiv.id) {
                    singleSnareDiv.style.borderColor = "yellow"
                } else if (beat !== singleSnareDiv.id) {
                    singleSnareDiv.style.borderColor = "#202020"
                }

                if (beat === singleSnareDiv.id && singleSnareDiv.dataset.active === "true") {
                    singleSnareDiv.style.backgroundColor = "#7c0000"
                } else if (beat !== singleSnareDiv.id && singleSnareDiv.dataset.active === "true") {
                    singleSnareDiv.style.backgroundColor = "red" 
                }
            })
                
                // HIHAT
                hihatDiv.forEach(singleHihatDiv => {
                    if (beat === singleHihatDiv.id) {
                        singleHihatDiv.style.borderColor = "yellow"
                    } else if (beat !== singleHihatDiv.id) {
                        singleHihatDiv.style.borderColor = "#202020"
                    }

                    if (beat === singleHihatDiv.id && singleHihatDiv.dataset.active === "true") {
                        singleHihatDiv.style.backgroundColor = "#7c0000"
                    } else if (beat !== singleHihatDiv.id && singleHihatDiv.dataset.active === "true") {
                        singleHihatDiv.style.backgroundColor = "red" 
                    }
                })
                // CLAP
                clapDiv.forEach(singleClapDiv => {
                    if (beat === singleClapDiv.id) {
                        singleClapDiv.style.borderColor = "yellow"
                    } else if (beat !== singleClapDiv.id) {
                        singleClapDiv.style.borderColor = "#202020"
                    }

                    if (beat === singleClapDiv.id && singleClapDiv.dataset.active === "true") {
                        singleClapDiv.style.backgroundColor = "#7c0000"
                    } else if (beat !== singleClapDiv.id && singleClapDiv.dataset.active === "true") {
                        singleClapDiv.style.backgroundColor = "red" 
                    }
                })

            // PLAY KICK
            kickDiv.forEach(singleKickDiv => {
               if (singleKickDiv.dataset.active === "true" && beat === singleKickDiv.id && currentState !== "running") {
                   kick.triggerAttackRelease("c1", "1m", time)
               }
            })

        }
        Tone.start();
        Tone.Transport.start();


        // SNARE
        Tone.ToneAudioBuffer.loaded().then(() =>{
                    Tone.Transport.scheduleRepeat(time => {
                        repeat(time)
                    }, "4n");
                    
                    
                    function repeat(time){
                        let beat = Tone.Transport.position.split(":")[1]
                        if (snareDiv[0].dataset.active === "true" && beat === "0" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareDiv[1].dataset.active === "true" && beat === "1" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareDiv[2].dataset.active === "true" && beat === "2" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareDiv[3].dataset.active === "true" && beat === "3" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
            
                    }
                    Tone.Transport.start();  
        });

    
    
        // HIHAT
        Tone.ToneAudioBuffer.loaded().then(() =>{
                    Tone.Transport.scheduleRepeat(time => {
                        repeat(time)
                    }, "4n");
                    
                    function repeat(time){
                        let beat = Tone.Transport.position.split(":")[1]
                        if (hihatDiv[0].dataset.active === "true" && beat === "0" && currentState !== "running" ) {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (hihatDiv[1].dataset.active === "true" && beat === "1" && currentState !== "running" ) {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (hihatDiv[2].dataset.active === "true" && beat === "2" && currentState !== "running" ) {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (hihatDiv[3].dataset.active === "true" && beat === "3" && currentState !== "running" ) {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
            
                    }
                    Tone.Transport.start();  
        });

    //    // CLAP 
        Tone.ToneAudioBuffer.loaded().then(() =>{
                    Tone.Transport.scheduleRepeat(time => {
                        repeat(time)
                    }, "4n");
                    
                    function repeat(time){
                        let beat = Tone.Transport.position.split(":")[1]
                        if (clapDiv[0].dataset.active === "true" && beat === "0" && currentState !== "running") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (clapDiv[1].dataset.active === "true" && beat === "1" && currentState !== "running") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (clapDiv[2].dataset.active === "true" && beat === "2" && currentState !== "running") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (clapDiv[3].dataset.active === "true" && beat === "3" && currentState !== "running") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
            
                    }
                    Tone.Transport.start();  
        });
        

    //STOP PLAYBACK
    let stopPlayback = document.getElementsByClassName("stop__button") 
    let stoppedPlayback = stopPlayback.forEach(playback => {
    playback.addEventListener('click', () => {
        Tone.Transport.stop();
    })

    })
})

//CHANGE BPM
    let tempo = 60.0;
    const bpmControl = document.getElementById('bpm');
    const bpmValEl = document.getElementById('bpmval');
    
    bpmControl.addEventListener('input', e => {
    tempo = Number(e.target.value);
    bpmValEl.innerText = tempo;
    //connects tempo to loop tempo
    Tone.Transport.bpm.value = tempo}, false);

