import * as Tone from 'tone';
import snare from '../../dist/assets/sounds/snare-chop_C_major.wav';
import hihat from '../../dist/assets/sounds/hi-hat-africa_C_minor.wav';
import clap from '../../dist/assets/sounds/dry-short-clap.wav';
import { debug, Time } from 'tone';




var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// GRABBING INSTRUMENT ELEMENTS FROM DOM
const kickDiv = document.getElementsByClassName("kick__bar");
const snareDiv = document.getElementsByClassName("snare__bar");
const hihatDiv = document.getElementsByClassName("hihat__bar");
const clapDiv = document.getElementsByClassName("clap__bar");


const changeDrumInstrumentColor = (instrument) => {
    instrument.addEventListener('click', () => {
        if (instrument.dataset.active === "true") {
            instrument.dataset.active = "false"
            instrument.style.backgroundColor = "#202020"
        } else if (instrument.dataset.active === "false") {
            instrument.dataset.active = "true"
            instrument.style.backgroundColor = "red"
        }
    })
}

kickDiv.forEach(singleKick => {
    return changeDrumInstrumentColor(singleKick)
})
snareDiv.forEach(singleSnare => {
    return changeDrumInstrumentColor(singleSnare)
})
hihatDiv.forEach(singleHihat => {
    return changeDrumInstrumentColor(singleHihat)
})
clapDiv.forEach(singleClap => {
    return changeDrumInstrumentColor(singleClap)
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

        //CREATING INSTRUMENTS
        const kick = new Tone.MembraneSynth().toDestination();

        const snareInstrument  = new Tone.Sampler({
            "c2" : snare
        }).toDestination()

        const hihatInstrument  = new Tone.Sampler({
            "c2" : hihat
        }).toDestination()
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
            const changeBorderColorofDrumInstruments = (instrumentDiv) => {
                if (beat === instrumentDiv.id) {
                    instrumentDiv.style.borderColor = "yellow"
                } else if (beat !== instrumentDiv.id) {
                    instrumentDiv.style.borderColor = "#202020"
                }
                if (beat === instrumentDiv.id && instrumentDiv.dataset.active === "true") {
                    instrumentDiv.style.backgroundColor = "#7c0000"
                } else if (beat !== instrumentDiv.id && instrumentDiv.dataset.active === "true") {
                    instrumentDiv.style.backgroundColor = "red"
                }
            }

            kickDiv.forEach(singleKickDiv => {
                return changeBorderColorofDrumInstruments(singleKickDiv)
            })
            snareDiv.forEach(singleSnareDiv => {
                return changeBorderColorofDrumInstruments(singleSnareDiv)
            })
            hihatDiv.forEach(singleHihatDiv => {
                return changeBorderColorofDrumInstruments(singleHihatDiv)
            })
            clapDiv.forEach(singleClapDiv => {
                return changeBorderColorofDrumInstruments(singleClapDiv)
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

